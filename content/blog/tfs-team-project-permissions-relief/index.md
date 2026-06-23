---
title: "TFS Team Project Permissions Relief"
date: 2008-04-10T04:24:07Z
authors: ["Richard Hundhausen"]
slug: "tfs-team-project-permissions-relief"
draft: false
tags: ["TFS"]
---

When creating a new Team Project in your Team Foundation Server, everything is nice and smooth right up until you get to the permissions of groups and individuals. This can be a real PITA because permissions must be set up in 3 separate places.
<ol>
	<li>Team Project level permissions within TFS itself</li>
	<li>The Share Point Portal site for the Team Project</li>
	<li>The SQL Reporting Services site created to serve reports on the Team Project</li>
</ol>
If you have done a little forward thinking, you have Active Directory groups for the major role mappings you want to make in all three of these areas. This will make the task a little better, but by the time you've gotten through with your Reporting Services permissions, you start to wonder if you remembered all the right group permissions way back on the Team Project itself. You know that feeling, and by the time you've assured yourself all is well, 10 minutes have elapsed.

Enter the CodePlex project "<a href="http://www.codeplex.com/TFSAdmin">Team Foundation Server Administration Tool</a>". This handy little utility lets you see permissions for each group across all 3 areas all at once. There may be the occasional uncaught exception or UI oddity, but this beats the heck out of doing the job manually.

These early releases of Team Foundation Server do still have a few ugly little knots on their heads, and the open source community has really stepped in to smooth those knots out. This utility is one great example. For a more complete list of open source tools for Team System, check out <a title="http://widgets.accentient.com/" href="http://widgets.accentient.com/">http://widgets.accentient.com/</a>. Thanks to Richard Hundhausen's for his excellent slide deck on <a href="https://accentient.com/blog/WhatsYourVSTSWorstPractice.aspx" target="_blank" rel="noopener">Team System implementation anti-patterns</a> which turned me on to this utility.