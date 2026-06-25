---
title: "Nexus Support in Azure DevOps, Honestly"
date: 2026-03-18T08:14:52Z
authors: ["Richard Hundhausen"]
slug: "nexus-support-in-azure-devops"
draft: false
tags: ["Azure DevOps", "Scrum"]
---

<p>Let me be candid, because I'd rather you hear it from me than discover it mid-scale. There is no first-class support for Nexus in Azure DevOps. There's no "enable Nexus" switch, no built-in Nexus Sprint Backlog board, no Nexus dashboard waiting for you. I helped create the Nexus framework alongside Ken Schwaber, so I'd love to tell you otherwise, but I won't.</p>

<p>The good news is that Nexus is just Scrum. A Nexus is a framework, similar to Scrum, that binds together the work of three to nine Scrum Teams working on a single Product Backlog to build an Integrated Increment. Schwaber describes it as an exoskeleton to Scrum. So everything you already know about using Azure DevOps for a single Scrum Team still applies. Only a couple of tweaks are needed to support multiple teams working on one Product Backlog.</p>

<figure class="wp-block-image size-large has-custom-border"><img src="nexus-framework.png" alt="The Nexus framework diagram showing multiple Scrum Teams, the Nexus events, and the single integrated Product Backlog" style="border-width:1px"/></figure>

<p><strong>What Azure DevOps gives you</strong></p>

<p>Three building blocks come more or less for free, and together they cover most of what you need.</p>

<ul>
  <li><strong>Multiple teams in one project.</strong> A Project Administrator creates additional teams, each with its own suite of agile tools, backlogs, boards, and dashboards. That maps cleanly onto the multiple Scrum Teams of a Nexus.</li>
  <li><strong>An area hierarchy for ownership.</strong> When you create teams, Azure DevOps creates matching area paths. You arrange those areas into a hierarchy that represents which team looks after which part of the product, and the areas a team selects filter its backlog automatically.</li>
  <li><strong>A shared backlog.</strong> There's still one Product Backlog underneath, and each team sees a filtered view of it based on selected areas. The default team, ideally renamed the Nexus Integration Team, selects the root area and sees everything, which is exactly what the Product Owner needs.</li>
</ul>

<p>Used together, teams plus area hierarchy plus the shared, filtered backlog get you a workable Nexus on top of plain Azure Boards.</p>

<p><strong>What you still do by hand</strong></p>

<p>Here's the honest part. Azure Boards doesn't offer a great board or visualization for the Nexus Sprint Backlog, the composite view that makes cross-team dependencies transparent. You can get close, but it takes effort: customize the Professional Scrum process to add a WIP state, install the Query Based Boards extension, adopt a PBI naming convention prefixing the title with the team, create a query that returns all current-Sprint PBIs, and set predecessor/successor links to represent cross-team dependencies. That's a fair amount of assembly for something a first-class feature would hand you.</p>

<p>You'll also manage the area hierarchy yourself, including dragging existing areas under team areas and pruning placeholder areas that just add noise. And the cross-team coordination that is the whole point of <a href="https://www.scrum.org/resources/online-nexus-guide" target="_blank" rel="noopener">Nexus</a> happens in the events and in people, not in the tool.</p>

<p>The takeaway: Azure DevOps supports a Nexus, it just doesn't automate it. Lean on teams, areas, and the shared backlog, accept a little manual work for the Nexus Sprint Backlog, and remember that the framework lives in the people, not the product. Sounds l