---
title: "Team Foundation Server - Performance Fix"
date: 2005-05-12T00:00:17Z
authors: ["Richard Hundhausen"]
slug: "team-foundation-server-performance-fix"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>You've gotta see this <a href="http://blogs.msdn.com/buckh/archive/2005/04/19/409886.aspx">post</a>&nbsp;by Buck Hodges!&nbsp; There is VERY heavy load on TFS, and it's because in Beta 2 the refresh rate for Analysis Services was set to 2 minutes instead of the normal 60 minutes!&nbsp; It's a major Team Foundation Server performance problem when it's installed directly out of the box.&nbsp; Here's a cut from the Buck's blog entry.</p>
<blockquote dir=ltr style="MARGIN-RIGHT: 0px">
<p dir=ltr style="MARGIN-RIGHT: 0px">Did you install your beta data tier&nbsp;in Virtual PC or Virtual Server and see a high CPU load while its running?&nbsp; Even on real hardware, you may notice some load when nothing would appear to be going on.&nbsp; Someone mentioned on an internal mailing list that the data tier CPU load&nbsp;for a combined&nbsp;app and data tier installed in Virtual Server was quite high, averaging about 50-70% with most of that time being used by SQL analysis services (msmdsrv.exe).</p></blockquote>
<p dir=ltr style="MARGIN-RIGHT: 0px">Check out his fix!</p>
<p dir=ltr style="MARGIN-RIGHT: 0px">UPDATE:&nbsp; I'2013-08-28 13:51:36'm going to include his fix here, in case his site is down, or he moves his blog entry.&nbsp; But don't forget to go check out Buck Hodges' <a href="http://blogs.msdn.com/buckh/">blog</a>.&nbsp; The following is a cut/paste from his blog.&nbsp; I hesitate to quote so much, but this is such a critical issue that it needs the broadest possible exposure.&nbsp; Once again, check out his <a href="http://blogs.msdn.com/buckh/archive/2005/04/19/409886.aspx">post</a> for more updates, and great information on TFS.</p>
<blockquote dir=ltr style="MARGIN-RIGHT: 0px">
<p>The warehouse was designed to run processing every hour. For demo purposes the period was changed to 2 minutes in beta 2. On a weak system or a virtual machine you will see this behavior.</p>
<p>Change the run interval on the app tier as follows.</p>
<ol>
<li>Stop TFSServerScheduler using 'net stop TFSServerScheduler'.
<li>Go&nbsp;to http://localhost:8080/Warehouse/warehousecontroller.asmx&nbsp;using a browser on the app tier.&nbsp; Click on ChangeSetting and enter the following values and then&nbsp;press the 'Invoke' button (3600 seconds = run once per hour).
<ol>
<li>settingID: RunIntervalSeconds
<li>newValue: 3600</li></ol>
<li>Restart TFSServerScheduler using 'net start TFSServerScheduler'.</li></ol>
<p>Note: It is important to restart TFSServerScheduler, as the interval is cached and will not take effect until the next run.</p>
<p>You can also manually kick off the data warehouse.&nbsp; Here are the steps to do so:</p>
<ol>
<li>Go&nbsp;to http://localhost:8080/Warehouse/warehousecontroller.asmx&nbsp;using a browser on the app tier.
<li>Click&nbsp;the ‘Run’ link.
<li>Press the ‘Invoke’ button.</li></ol>
<p>&nbsp;This will trigger a refresh of the reports.</p></blockquote>
<p dir=ltr>Thanks, Buck!&nbsp; We thank you, presenters everywhere thank you, and TFS performance thanks you!</p>