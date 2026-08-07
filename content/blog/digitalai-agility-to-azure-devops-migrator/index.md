---
title: "We Open Sourced Our Digital.ai Agility to Azure DevOps Migrator"
date: 2026-08-07T10:00:00Z
authors: ["Richard Hundhausen"]
slug: "digitalai-agility-to-azure-devops-migrator"
description: "A PowerShell tool that moves work items from Digital.ai Agility (formerly VersionOne) into Azure DevOps, preserving hierarchy, links, attachments, and history. It moved 53,683 items in a single run. Now MIT licensed on GitHub."
draft: false
tags: ["Azure DevOps", "Azure Boards", "Tools", "MVP"]
---

<p>If your organization is still tracking work in Digital.ai Agility, formerly VersionOne, and you have decided to move to Azure DevOps, the decision was the easy part. The migration is where it gets real. You have years of Epics, Stories, Defects, Tasks, and Issues. You have a hierarchy that people actually navigate every day, attachments nobody is willing to lose, and a leadership team that believes "just export it" is a sentence with a meaning.</p>

<p>We finished one of these recently. Then we open sourced the tool that did it.</p>

<p><a href="https://github.com/accentient/digitalai-agility-to-ado" target="_blank" rel="noopener noreferrer"><strong>github.com/accentient/digitalai-agility-to-ado</strong></a> &middot; MIT licensed &middot; PowerShell 7+</p>

<p>It has migrated <strong>53,683 work items in a single run</strong>. All types, all scopes, closed items included.</p>

<p><strong>What it moves</strong></p>

<p>The tool reads Agility through its REST API and creates work items in an Azure DevOps project. The type mapping targets the Scrum process:</p>

<table>
  <thead>
    <tr><th>Digital.ai Agility</th><th>Azure DevOps (Scrum)</th></tr>
  </thead>
  <tbody>
    <tr><td>Epic (Portfolio Item), top level</td><td>Epic</td></tr>
    <tr><td>Epic (Portfolio Item), nested</td><td>Feature</td></tr>
    <tr><td>Story (Backlog Item)</td><td>Product Backlog Item</td></tr>
    <tr><td>Defect</td><td>Bug</td></tr>
    <tr><td>Task</td><td>Task</td></tr>
    <tr><td>Issue</td><td>Impediment</td></tr>
  </tbody>
</table>

<p>Along with the items themselves it carries across the hierarchy, dependency and Affects links, attachments, area and iteration paths, and a backdated two-point revision history, so created-by and last-changed-by land on their real dates rather than all showing you as the author on migration day. Types, fields, states, and links are all configured in a <code>mappings.json</code> file, so adapting to your instance does not mean editing the script.</p>

<p><strong>Your type names probably lie to you</strong></p>

<p>This one cost us a day, so take it for free. Agility instances can rename asset types in the UI, and the API only ever reports the internal name. No endpoint exposes the alias. The reliable tell is the work item's <strong>Number prefix</strong>: <code>E-</code> Epic, <code>S-</code> Story, <code>D-</code> Defect, <code>TK-</code> Task, <code>I-</code> Issue, <code>AT-</code> Test, <code>R-</code> Request.</p>

<p>On one instance we migrated, the UI called an <code>Issue</code> a <em>Challenge</em> and called a <code>Defect</code> an <em>Issue</em>. So when the customer said "our Challenges should become Impediments and our Issues should become Bugs," that was already exactly what the table above does. Check the prefixes before you start arguing about mappings.</p>

<p><strong>Four decisions that made it safe</strong></p>

<p>Most of the engineering in a migration tool is not the mapping. It is making the thing safe enough that a nervous customer will actually let you run it against their production instance.</p>

<p><em>Agility is only ever read from.</em> Every Agility call goes through a single function that hard codes <code>-Method Get</code>. There is no code path in the tool that can modify anything in the source, and the tests assert that in both directions. This is the sentence that ends the risk conversation.</p>

<p><em>Validate before the first create.</em> Every mapped state and field is checked against Azure DevOps before a single work item is written. A mapping mistake fails on call one, not on item one of fifty thousand.</p>

<p><em>Dry run everything.</em> <code>-DryRun</code> prints the type, title, parent link, area path, state, priority, and assignee for every item, and asks Azure DevOps to validate each payload with <code>validateOnly=true</code>. Field problems surface as <code>INVALID</code> before anything is written. It is not total coverage, since state transitions, links, and close dates need a real item, but it catches the class of error that would otherwise ruin your weekend.</p>

<p><em>Deleting is a separate script.</em> The migration only ever creates and updates. <code>Remove-WorkItems.ps1</code> only ever destroys. The two share no code, no functions, and no names, so no edit to one can change what the other does. Deletion in Azure DevOps is permanent, there is no recycle bin here, and that deserved a wall rather than a flag.</p>

<p>One more property worth calling out: runs are <strong>idempotent and resumable</strong>. Each item's Agility number is recorded in a custom field, so an interrupted migration just continues where it stopped. On a run of fifty thousand items, that is the difference between a hiccup and a restart.</p>

<p><strong>What it does not do</strong></p>

<p>Honesty is cheaper than a support thread.</p>

<p>It is one way only, Agility to Azure DevOps. There is no sync and no delta mode, so edits made in the source after migration are not brought across. Close dates and the backdated history require a PAT identity with rule-bypass rights. It targets the Scrum process, and the Agile process needs <code>mappings.json</code> changes for User Story and StoryPoints. Epics nested three or more levels deep get flattened onto the top-level Epic, with the real parent preserved as a Related link. Source comments, called Conversations, are not migrated, and history is two-point only, because Agility's full-history endpoint is not available on every hosted instance. Attachments <em>are</em> migrated. Dependency links that form a cycle get rejected by Azure DevOps with <code>TF201035</code>; each one is skipped on its own, so the work items still migrate and only that link is lost.</p>

<p><strong>Versions</strong></p>

<p>Compatibility is governed by the API surface the tool uses, not by the product's branding, which has changed twice. It calls only <code>rest-1.v1/Data</code> and <code>attachment.img</code> with bearer auth, a surface that has been stable across the whole rebranding history. It is verified on Digital.ai Agility 26.1.6.5 SaaS against Azure DevOps Services, and is expected to work on CollabNet VersionOne and legacy VersionOne, though we have not tested those. Azure DevOps Server should work and is likewise untested.</p>

<p><strong>Go take it</strong></p>

<p>Clone it, read <code>docs/migration-reference.md</code> for the full field mapping and the reasoning behind the non-obvious behavior, copy the two sample config files, and run a dry run. The tests are hermetic, so <code>Invoke-Pester -Path tests</code> works without credentials or a live instance. Issues and pull requests are welcome.</p>

<p>And if you are staring down a migration of any real size, know that the script run is rarely the hard part. Scoping, field mapping, process design, and deciding what <em>not</em> to bring across are what actually take the time. If you want help planning or running one, <a href="/contact/">get in touch</a>.</p>
