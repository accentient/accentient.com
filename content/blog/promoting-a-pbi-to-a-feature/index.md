---
title: "Promoting a PBI to a Feature (Epic)"
date: 2015-01-29T11:27:29Z
author: "Richard Hundhausen"
slug: "promoting-a-pbi-to-a-feature"
draft: false
tags: ["Scrum", "TFS"]
---

---

For Scrum Teams using TFS 2013 to create and manage their Product Backlog, they may want to take advantage of the new <a href="https://msdn.microsoft.com/en-us/library/dn306083.aspx" target="_blank" rel="noopener">Agile Portfolio</a>. This "higher level" backlog allows a team or organization to plan and track initiatives, features, epics, etc. The term "Feature" is the default, but with on-premises TFS, you can <a href="https://msdn.microsoft.com/en-us/library/vstudio/hh543813.aspx" target="_blank" rel="noopener">customize</a> this.

Recently, a team I was working with renamed <em>Feature</em> to <em>Epic</em>, and then wanted to "promote" several of their current PBI work items to Epics. I supported this decision, because it helps keep the Product Backlog "pure" - only containing items than can actually be developed. I wrote a script to create Epics which were basically copies of the respective PBIs. Part of this script was to set the original PBI to the <em>Removed </em>state, but I wanted to add a new reason that was more meaningful than "Removed from the backlog".

Step 1 - I edited the Product Backlog Item work item type definition to add a new Reason ...
<div style="font-family: Consolas,monaco,monospace;"><strong>&lt;TRANSITION from="Approved" to="Removed"&gt;
&lt;REASONS&gt;
&lt;DEFAULTREASON value="Removed from the backlog" /&gt;
<span style="color: #0000ff;">&lt;REASON value="Promoted to Epic"/&gt;</span>
&lt;/REASONS&gt;
&lt;/TRANSITION&gt;</strong></div>
<div style="font-family: Consolas,monaco,monospace;"></div>
<p />
<div style="font-family: Consolas,monaco,monospace;">Step 2 - I removed the <em>ReadOnly="True"</em> attribute from the respective Control (if necessary) ...</div>
<p />
<div style="font-family: Consolas,monaco,monospace;"><strong>&lt;Control Type="FieldControl" FieldName="System.Reason" LabelPosition="Left" Label="Reason" <span style="color: #0000ff;">ReadOnly="True"/&gt;</span></strong></div>
After importing the updated WITD and refreshing the page, I get the capability I want ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="PromotedToEpic.png" alt="PromotedToEpic" width="311" height="97" />
