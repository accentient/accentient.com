---
title: "Workflow State Categories: Why Your States Map the Way They Do"
date: 2025-12-22T11:42:17Z
authors: ["Richard Hundhausen"]
slug: "workflow-state-categories-in-azure-boards"
draft: false
tags: ["Azure Boards", "Scrum", "Azure DevOps"]
---

<p>Here's a question that stumps a lot of teams the first time they customize a process: how does Azure Boards know that "Committed" in Scrum and "Active" in Agile mean roughly the same thing? The agile tools work the same way regardless of which process you picked, even though every process names its states differently. The answer is state categories.</p>

<figure class="wp-block-image size-large has-custom-border"><img src="scrum-work-item-types.png" alt="Scrum process work item types whose requirement states map to underlying state categories" style="border-width:1px"/></figure>

<p><strong>What a state category is</strong></p>

<p>The workflow states define how a work item progresses from creation to closure. Each state belongs to a state category, which used to be called a metastate. The state category is the layer underneath the visible name. It's what lets the agile tools in Azure Boards operate in a standard way no matter the project's process.</p>

<p>This is the same mechanism that lets the different processes have their own names for work item types without breaking anything. Microsoft introduced these meta-types so a Scrum project could say "Product Backlog Item" and "Impediment" while an Agile project says "User Story" and "Issue," and the boards, backlogs, and charts keep working identically.</p>

<p><strong>How the Scrum states map</strong></p>

<p>In the Scrum process, a PBI moves through New, Approved, Committed, and Done. Each of those visible states sits in a state category that the tooling actually reasons about. New sits in the proposed category, the in-progress states sit in their category, and Done sits in the completed category. The boards use the category, not the label, to decide what counts as new work, work in progress, and finished work. That's why a burndown or a board column behaves correctly even after you rename things.</p>

<p><strong>Why it matters when you customize</strong></p>

<p>This becomes very real the moment you create an inherited process. Say you want to replace Committed with Forecasted to match the <a href="https://scrumguides.org/" target="_blank" rel="noopener">Scrum Guide</a>. You don't just rename a string. You add a new state and you map it to the right category. When I add a Ready state, I map it to the Proposed category. When I add a Forecasted state, I map it to the In Progress category. Get the mapping right and the boards, queries, and charts keep working exactly as before, just with the words your team prefers.</p>

<p>Get it wrong and you'll see strange behavior: items that won't show up where you expect, burndowns that don't add up, board columns that don't line up with states. The label is for humans. The category is for the tool. Respect both.</p>

<p>Understand the layer underneath, and you can rename your states freely without breaking a thing. Sounds like good Scrum to me.</p>
