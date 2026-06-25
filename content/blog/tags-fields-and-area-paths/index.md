---
title: "Tags, Fields, and Area Paths: Slicing the Backlog"
date: 2026-02-10T15:24:17Z
authors: ["Richard Hundhausen"]
slug: "tags-fields-and-area-paths"
draft: false
tags: ["Azure Boards", "Scrum"]
---

<p>Sooner or later your Product Backlog gets big enough that you want to slice it: show me just the mobile work, just the bugs, just the items for the payments area. Azure Boards gives you three tools for this, and teams constantly reach for the wrong one. Here's when to use a tag, a field, and an area path.</p>

<figure class="wp-block-image size-large has-custom-border"><img src="area-paths.png" alt="Area paths configured in Azure Boards representing functional, logical, or physical areas of the product" style="border-width:1px"/></figure>

<p><strong>Tags: lightweight and ad hoc</strong></p>

<p>Reach for a tag when you want to find, filter, and identify items without committing to any structure. Tags are optional on every work item type, and you can add as many as you like. A common move is for a team that has dropped the Bug work item type to tag those PBIs with "Bug," so the Product Backlog holds one consistent type but you can still filter the bugs out when you want them. Tags are perfect for cross-cutting, evolving labels: "Bug," "Tech Debt," "Spike," "Blocked." They cost nothing to create and nothing to retire.</p>

<p><strong>Area paths: stable structure</strong></p>

<p>Area paths are heavier and more permanent. They must be set up ahead of time and can represent functional, logical, or physical areas or features of the product. If a PBI applies to everything, or you're not sure, leave it at the default root value. Use an area path when the division is real and durable, the kind of structure you'd organize teams or features around. In scaled implementations, each team within a project can have its own corresponding area path plus a default. That's the area path doing its proper job: stable, structural ownership, not a casual label.</p>

<p>One caution. Don't abuse the Area field as a stand-in for team ownership when what you really want is a Team field. Treating area paths as a team gimmick is a common shortcut that muddies what the field is actually for.</p>

<p><strong>Fields: when you need to measure or compute</strong></p>

<p>Reach for a field when you need a value you can sort, sum, chart, or compute against, not just filter by. Value and Size are the obvious ones, because together they give you ROI across the whole backlog on a common scale. The discipline here is restraint: the PBI form has many fields, and tracking data in fields you don't use is most likely waste. Before you press a field into service for organizing the backlog, ask whether a tag would do the job with less ceremony. Usually it would.</p>

<p><strong>A practical rule of thumb</strong></p>

<ul>
  <li>Need a casual, evolving label to filter on? Use a <strong>tag</strong>.</li>
  <li>Need stable, structural ownership or a real product division? Use an <strong>area path</strong>.</li>
  <li>Need a value you'll sort, sum, or compute? Use a <strong>field</strong>, sparingly.</li>
</ul>

<p>Slice the backlog with the lightest tool that does the job, and your <a href="https://scrumguides.org/" target="_blank" rel="noopener">Scrum</a> Team stays focused on value, not bookkeeping.</p>
