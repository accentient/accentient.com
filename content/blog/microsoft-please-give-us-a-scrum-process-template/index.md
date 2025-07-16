---
title: "Microsoft, please give us a Scrum process template"
date: 2015-11-04T16:11:00Z
author: "Richard Hundhausen"
slug: "microsoft-please-give-us-a-scrum-process-template"
draft: false
tags: ["Azure DevOps", "Microsoft", "Scrum", "TFS"]
---

---

In 2014, the Scrum Guide was moved off of Scrum.org and posted to <a href="http://scrumguides.org" target="_blank" rel="noopener">ScrumGuides.org</a>. At the same time, all of the major Scrum organizations in the world acknowledged this as the official definition of Scrum. Unfortunately, Microsoft still hasn't received the memo.

Sure, they have a Scrum process template and it <em>was</em> quite good (back in 2010) because it was very minimal - "barely sufficient" even. Unfortunately, as the Scrum guide <a href="http://scrumguides.org/revisions.html" target="_blank" rel="noopener">evolved</a>, the template did not. What's worse, Microsoft decided that we all wanted Scaled Agile Framework (SAFe) <a href="https://msdn.microsoft.com/en-us/Library/vs/alm/Work/scale/scaled-agile-framework" target="_blank" rel="noopener">support</a> in all templates. Our once-very-lean Scrum process template has wandered away from the light and become bloated with waste - no longer "barely sufficient".

Fortunately, there are several Professional Scrum Developer <a href="https://www.scrum.org/Become-a-Trainer/PSD-Trainer-Application" target="_blank" rel="noopener">Trainers</a> (Visual Studio ALM experts who also teach Scrum, and vice versa) who have offered to help. This is our unordered backlog:

<span style="text-decoration: underline;">Scrum Process Template</span>
<ul>
	<li>Remove <em>Priority</em> and <em>Value Area</em> from the PBI work item type</li>
	<li>Remove <em>Priority, Severity, Activity,</em> and <em>Remaining Work</em> fields from the Bug work item type</li>
	<li>Remove <em>Priority</em> and<em> Activity</em> fields from the Task work item type</li>
	<li>Remove <em>Priority</em> from the Impediment work item type</li>
	<li>Remove <em>Epic</em> and <em>Feature</em> work item types and just use <em>PBI</em> (or just "Item") work item type at all levels</li>
	<li>Let the teams provide the names for the backlog levels</li>
	<li>Change <em>Committed</em> &gt; <em>Forecasted</em> state in the PBI and Bug work item type</li>
	<li>Hide the <em>Reason</em> field in all work item types</li>
	<li>Change <em>Effort</em> &gt; <em>Size</em> in PBI and Bug work item types</li>
	<li>Add <em>Business Value</em> to the Bug work item type</li>
	<li>Use the <em>@CurrentIteration</em> query token in default queries</li>
	<li>Change label <em>Assigned to</em> &gt; <em>Owned by</em></li>
	<li>Make <em>Scrum</em> the default process template (it used to be)</li>
</ul>
<p style="padding-left: 30px;">We know that Microsoft supports <a href="https://msdn.microsoft.com/en-us/library/ms243782.aspx" target="_blank" rel="noopener">custom process templates</a>, which is great and provides Microsoft and its customers a vehicle to still deliver bloated process templates to the market.</p>
Agile Planning Tools
<ul>
	<li>Show PBI work item types on all backlog levels, letting the team decide how many and provide names of those levels (don't assume Epic, Feature, and PBI)</li>
	<li>Remove/hide <em>Capacity Planning</em> tools (or at least disable planning by individual/discipline)</li>
	<li>Fix Forecast tool (don't assume we'll start work in one sprint and finish the next; also show Sprints even though they aren't defined yet)</li>
	<li>Let me specify which user is the "<em>Product Owner</em>" and "<em>Scrum Master</em>" to help auto-assign work items, tweak views, etc.</li>
	<li>Provide first class support for a <em>definition of "Done"</em></li>
	<li>Provide first class support for <em>Sprint goals</em></li>
	<li>Provide first class support for <em><em>Sprint Retrospective improvements</em></em></li>
	<li>Let me pivot the board by something other than state (e.g. effort/size - Fibonacci, team, area, iteration, business value - Fibonacci)</li>
	<li>Enable computed columns in the backlog (e.g. ROI = business value / effort/size)</li>
	<li>Provide a burndown chart by PBI/Bug/Testing results (not just tasks/task hours)</li>
	<li>Provide a burn<span style="text-decoration: underline;">up</span> chart by business value</li>
</ul>
Add Scaling Support
<ul>
	<li>Provide first class support for <em>teams</em> (don't rely on Area path)</li>
	<li>Show me an aggregate board of all teams' Sprint Backlogs (PBI and Bug work items) and any dependencies across the items/teams</li>
	<li>Show me an aggregate board of all teams' selected PBI and Bug work items and any dependencies across the items/teams with Sprint +1, Sprint +2, ... Sprint +n columns</li>
</ul>
Most importantly, please adopt a lean thinking approach to the features you deliver in the future. I'm not saying "check with the PSD community" before adding or changing anything in the agile planning tools, but please take a sniff (or ask us to) and see if there is a smell that your shiny new tool idea wanders away from making VSTS/TFS "barely sufficient" or hinders "individuals and interactions".
