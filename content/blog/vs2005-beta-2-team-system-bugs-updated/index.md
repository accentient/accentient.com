---
title: "VS2005 Beta 2 - Team System Bugs (Updated)"
date: 2005-05-05T19:20:16Z
authors: ["Richard Hundhausen"]
slug: "vs2005-beta-2-team-system-bugs-updated"
draft: false
tags: ["Visual Studio", "ALM", "Azure Boards", "Testing"]
---

<p>Just a small list of some bugs I've run across, and fixes where applicable.&nbsp; (Right now all of the fixes seem to involve shutting down and restarting VS2005 -- Clicking Refresh anywhere doesn't seem to work.)&nbsp; <font color=#ff6600>Rob Carron has responded to a few of these in the comments.&nbsp; I've copied them here in red.</font></p>
<p>1)&nbsp;N<font size=2>ewly created Iterations are not available to use in new Work Items until VS2005 is shut down and restarted.</font></p>
<p><font color=#ff6600>I've confirmed this is a known issue.</font> </p>
<p>2) If you are assigned a Work Item, such as a Task, from someone at another computer, it is not enough to simply Refresh the Work Items folder.&nbsp; You must close and reopen VS2005.</p>
<p><font color=#ff6600>Refreshing the Work Items folder will show you new queries, but not new work items. To see new work items, you'll need to refresh an open query. Otherwise, just open a query.</font></p>
<p>3) When creating an Application Diagram: if you drag an ASP.NET WebService onto the design surface, you get the same shape and defaults as when you drag an ASP.NET WebApplication.&nbsp; (Although this may be TECHNICALLY correct, it is very confusing to have two different items to drag over that have nearly identical graphical images).&nbsp; When implemening, the only selections are based on Web Sites, however the do correctly implement into a Web Service.</p>
<p>4) When a unit test project is created by Test1, and checked into source control, and then Dev1 on a different machine opens up the same project (from File -&gt; Recent Projects), Dev1 is alerted that a new project has been added to the solution and prompted to include the new project.&nbsp; When Dev1 says "Yes" to downloading the project, a message saying that the SCC database is corrupt is raised.&nbsp; However, by going to File -&gt; Open from Source Control you can get the whole solution with the new projects and everything works!</p>
<p>5) Error messages&nbsp;seem to occur on a fairly regular basis (one every 30 minutes or so of heavy use).&nbsp; Almost always they are easily recoved from.&nbsp; This isn't much help, but you know you'2013-08-28 13:51:57're not alone!&nbsp; It may have to do with memory.&nbsp; We have TFS running in its own VPC with 1.5 Gig of memory, and 11 clients each in VPCs with only 640 Meg of memory.&nbsp; The errors are annoying, but generally non-reproducible, so I think it has something to do with memory or configuration in some way.</p>
<p>6) When you delete a file inside of SCC (from the Source Control Explorer), then reattempt to add a file with the same name, you get an error telling you that a file with the same name exists in Source Control.&nbsp; Fix: Simply close and reopen VS2005 on the client.</p>
<p>7) Not technically Team System, but VS2005 error.&nbsp; When you build a web service in VS2005 Beta 2,&nbsp;then build a deployment package for that web service and finally deploy it to an IIS web server, it sets the desired version of the Framework to version 1.1, not 2.0!!!!&nbsp; Fix: <font size=2></p></font>