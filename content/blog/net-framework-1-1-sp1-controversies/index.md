---
title: ".NET Framework 1.1 SP1 controversies"
date: 2004-09-14T21:06:19Z
authors: ["Richard Hundhausen"]
slug: "net-framework-1-1-sp1-controversies"
draft: false
tags: ["Life"]
---

<p>As you may know, .NET Framework 1.1 has a <a href="http://msdn.microsoft.com/netframework/downloads/updates/sptechpreview/default.aspx" target="none" rel="noopener">service pack</a> out now.</p>
<p>I've been reading a few notes about installing it.</p>
<ul>
<li>I've heard that it <a href="http://support.sourcegear.com/viewtopic.php?t=1774" target="none" rel="noopener">breaks SourceGear Vault</a></li>
<li>But then I've heard <a href="http://www.ericsink.com/entries/false_alarm.html" target="none" rel="noopener">that it doesn't</a></li></ul>
<p>Also, there appears to be&nbsp;a problem w/ the client-side JAVASCRIPT file. If you've upgraded to .NET FW 1.1 SP1, you'll need to copy the old "WebUIValidation.js" into your IIS aspnet_clientsystem_web1_1_4322 folder. This is the old file before the SP1 update and your web app should work as usual now. Here is the thread that mentioned about the workaround.</p>
<p><a href="http://channel9.msdn.com/ShowPost.aspx?PostID=21650" target="none" rel="noopener">http://channel9.msdn.com/ShowPost.aspx?PostID=21650</a><br /></p>