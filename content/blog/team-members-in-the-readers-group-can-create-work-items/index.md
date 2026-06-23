---
title: "Team members in the Readers group can create work items!"
date: 2014-11-17T12:02:25Z
authors: ["Richard Hundhausen"]
slug: "team-members-in-the-readers-group-can-create-work-items"
draft: false
tags: ["Azure DevOps", "Scrum", "TFS"]
---

---

Watch out. This could happen to you and your team.

Let's assume you have a single team project with three teams (Bacon, Lettuce, and Tomato) ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="blt_teams.png" alt="blt_teams" width="473" height="248" />

Next, let's assume you have Jake, a stakeholder, asking for access to the team project. You don't want Jake to be able to add, edit, or delete anything, only to read data. Following <a href="http://msdn.microsoft.com/en-us/library/vstudio/bb558971.aspx" target="_blank" rel="noopener">MSDN's guidance</a>, you add Jake to the Readers group ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="jakereaders.png" alt="jakereaders" width="536" height="213" />

Since Jake only cares about the work that Team Bacon is doing, you add him to that team ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="jakebacon.png" alt="jakebacon" width="743" height="386" />

<a href="http://en.wikipedia.org/wiki/Bob's_your_uncle" target="_blank" rel="noopener">And Bob's your uncle</a> (translation: unfortunately Jake can now create work items, check-in code, etc.). The reason is that members of team Bacon are de facto <em>Contributors</em> to the team project.<em> </em>The fact that Jake is a member of the <em>Readers</em> group doesn't matter, because the <em>Readers</em>  group does not explicitly DENY any permissions at the team project scope ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="readers_permissions.png" alt="readers_permissions" width="346" height="372" />

or at the work item area scope ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="area_permissions.png" alt="area_permissions" width="797" height="301" />

<strong><span style="text-decoration: underline;">The Workaround</span></strong>

You could obviously change the "Not set" permissions to "Deny" for the <em>Readers</em> group at the various scopes: team project, area, code, etc. I, Microsoft, and other of my fellow MVPs advise against this because of various performance and troubleshooting reasons.

A better workaround would be to remove Team Bacon from the <em>Contributors</em> group and add it to the <em>Readers</em> group ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="bacon_readers_group.png" alt="bacon_readers_group" width="791" height="271" />

Then add the regular Team Bacon members to the Contributors group individually. At this point, Jake (the stakeholder) will have true read-only access as well as only being able to see Team Bacon's slice of the Product Backlog. The other members of Team Bacon will see no interruption in their day-to-day capabilities.

