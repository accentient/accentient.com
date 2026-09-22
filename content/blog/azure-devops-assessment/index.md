---
title: "Your Entire Azure DevOps Organization at a Glance"
date: 2026-09-22T14:00:00Z
authors: ["Richard Hundhausen"]
slug: "azure-devops-assessment"
description: "A read-only PowerShell tool that inventories an Azure DevOps organization: projects, teams, people, security groups, work items, repos, pipelines, feeds, and more, in one Markdown report and one JSON file. Now MIT licensed on GitHub."
draft: false
tags: ["Azure DevOps", "Tools", "MVP"]
---

<p>Almost every Azure DevOps engagement starts with the same question: what is actually in here? Before a migration, a process redesign, a licensing review, or a coaching engagement, somebody has to find out how many projects there are, which process each one uses, who has access to what, how much work is really being tracked, and which of all those repositories anyone still commits to. The answer the customer gives you on day one is usually a guess. The answer the organization gives you is the truth, but it's spread across dozens of settings pages.</p>

<p>We used to collect it by hand, clicking through Project Settings and filling in a spreadsheet. That took days, and was out of date by the time we finished. So we wrote a script to do it, used it on real engagements, and have now put it on GitHub.</p>

<p><a href="https://github.com/accentient/ado-assessment" target="_blank" rel="noopener noreferrer"><strong>github.com/accentient/ado-assessment</strong></a> &middot; MIT licensed &middot; PowerShell 7 or Windows PowerShell 5.1</p>

<p><strong>What it reports</strong></p>

<p>Point it at an organization and it assesses every project the PAT can see, a list of named projects, or the projects in a CSV file. It only ever reports what the token has access to: projects the token's owner can't see are left out, and one you name explicitly is reported as "not found or not visible" rather than assessed. For each one you get the process (including the parent of an inherited process), teams and their admins, security groups, people, work item counts per type, area and iteration paths, Git repositories, build and release pipelines, artifact feeds, wikis, test plans, service connections, and available agent pools. The report opens with an organization-wide summary table and closes with a work item type matrix across all projects, which is often the first place process drift becomes obvious.</p>

<p>A few details make the numbers trustworthy rather than just plentiful:</p>

<ul>
<li><strong>Nested groups are expanded.</strong> "114 people" means 114 distinct identities, not 114 group memberships. Each person gets their roles (Project Admin, Contributor, Reader), teams, other groups, access level, and last access date.</li>
<li><strong>Work item types come from the process</strong>, not from assumptions, so custom types from inherited processes show up with real counts from Analytics.</li>
<li><strong>Repos and pipelines are profiled.</strong> Repository size, branch count, last commit and author, disabled and empty repos. Pipelines are split into YAML and classic, with paused and disabled ones flagged, plus the last run and its result.</li>
<li><strong>It degrades gracefully.</strong> If the token can't read an area, that area shows <code>n/a</code>, the Warnings section explains why (including the server's own message, so you can tell a missing scope from a missing license), and the rest of the assessment carries on.</li>
</ul>

<p>The output is Markdown for people and JSON for tools. The repo includes an <a href="https://github.com/accentient/ado-assessment/blob/main/docs/example-report.md" target="_blank" rel="noopener noreferrer">example report</a> from a real four-project organization, anonymized: every name is fictional, and the counts are real.</p>

<p><strong>Read-only, and provably so</strong></p>

<p>If you are going to run a script against a customer's production organization, the first thing they will ask is whether it can change anything. It can't. Every REST call goes through a single function, <code>Invoke-AdoGet</code>, that hard-codes <code>-Method Get</code>. That meant making a couple of deliberate choices: work item counts come from the Analytics OData service instead of WIQL, and identities are resolved with Graph <code>GET</code> endpoints instead of the <code>subjectlookup</code> batch endpoint, because both of the alternatives require a <code>POST</code>.</p>

<p>The token itself should put a security team at ease, too. It's a custom-defined PAT with <strong>Read</strong> checked on a short list of scopes (Project and Team, Work Items, Code, Build, Graph, and a few others) and nothing else: no Write, no Manage, no Full access. The README lists each scope, what it's used for, and what you lose without it. It's scoped to the one organization being assessed, and you can give it a short expiration and revoke it the moment the assessment is done. Even the token's storage is conservative. It lives in Windows Credential Manager, never in the script, the repo, or the report, and it's never echoed to the console. The only things the tool writes are the report files on your own disk.</p>

<p>You don't have to take our word for it. The Pester test suite parses the script's syntax tree to confirm that only <code>Invoke-AdoGet</code> makes web requests and that every one is a body-less GET, then checks every request at run time as well. The tests are hermetic and never touch a real organization. The web and credential cmdlets are replaced with guards that throw, so any code path that tries to reach the network or Credential Manager fails the test. The end-to-end tests then mock the single web cmdlet <code>Invoke-AdoGet</code> calls, so every request is answered by a small fake organization instead of Azure DevOps. That's enough to run a full end-to-end assessment, including a project the token can only partly read, and check the report and JSON that come out. GitHub Actions runs the suite on both PowerShell 7 and Windows PowerShell 5.1 on every push.</p>

<p><strong>Getting started</strong></p>

<p>There are no modules to install. It's one script and three switches. Store a read-only PAT in Windows Credential Manager (the script can prompt for it and save it for you), set the organization URL at the top of <code>AssessProjects.ps1</code>, choose <code>-All</code>, <code>-Projects</code>, or <code>-CsvPath</code>, and run it. For a complete picture, the token should belong to a Project Collection Administrator with a Basic (or higher) access level. The report and JSON land in a gitignored <code>reports/</code> folder, and the results stay in <code>$Assessment</code> afterwards so you can explore them in the terminal.</p>

<p>Two things to know. This is for <strong>Azure DevOps Services</strong>; Azure DevOps Server isn't yet supported. <a href="/contact/">Contact us</a> if you have that need. And the report contains names, email addresses, group memberships, and last access dates for everyone in the organization, so treat it like the personnel data it is.</p>

<p><strong>Inventory, not judgment</strong></p>

<p>The tool shows what's there. It doesn't score the organization or tell you what to change, and that's on purpose. Knowing that a project has 109 Contributors and 4 Readers, or that 9 of its 39 repositories are disabled, as in the example report, is the start of a conversation, not the end of one. Deciding what those numbers mean for your teams, your process, and your plans is the hard part. If you'd like help with that, whether it's an assessment, a migration, or improving your teams' agility, <a href="/contact/">get in touch</a>.</p>
