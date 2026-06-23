---
title: "VS2005 Beta 2 - Team System Tips and Tricks"
date: 2005-05-06T16:59:22Z
authors: ["Richard Hundhausen"]
slug: "vs2005-beta-2-team-system-tips-and-tricks"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Tips:</p>
<p>1) In the Distributed System Designers, when connection applications or logical servers, and your lines look messy, right-click any of the connections, and choose "Redraw Connection".&nbsp; This works GREAT for beautifying your connections.</p>
<p>2) When starting VS2005, you can use the <strong>Right-Click -&gt; Run As...</strong> command to log in as a different user.&nbsp; You then interact with TFS as the "run as" identity.&nbsp; <strong>This can be useful if you're giving Team System demos on VPC and don't want to continually log in and out of the VPC.</strong>&nbsp; <em>Hint: you can even have two copies of VS2005 running, each under a different identity!</em></p>
<p>3) When creating a new project, you can select "Add this project to Source Control".&nbsp; Don't do this!&nbsp; It will AUTOMATICALLY create a new directory somewhere in the SCC directory structure, and it seems like this is simply the last place you added something!&nbsp; So if you're working on a different team project, you'll be in the wrong location.&nbsp; Instead, leave the box unchecked, and then right click the project or solution in the Solution Explorer, and add to Source Control that way.&nbsp; You then have full control over the location (on the TFS box) of your source files.</p>
<p>4) Occasionally in Team Suite, my Task Manager shows the devenv.exe using well over 200, even 300mb of RAM at times. This is a good time to exit and restart Visual Studio 2005.</p>
<p>5) After viewing your Deployment Report in Internet Explorer, save it as a Web Archive (single file .MHT) and then you can upload this to the project portal, embedding all the graphics and such into the one file.</p>