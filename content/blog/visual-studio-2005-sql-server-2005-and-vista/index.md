---
title: "Visual Studio 2005 / SQL Server 2005 and Vista"
date: 2006-12-11T02:54:40Z
authors: ["Richard Hundhausen"]
slug: "visual-studio-2005-sql-server-2005-and-vista"
draft: false
tags: ["Windows", "Visual Studio", "Microsoft", "SQL Server"]
---

<p>I'm getting more and more questions regarding running Visual Studio 2005 on Vista. Here's the summary from Microsoft:</p>
<p>"Visual Studio 2005 is supported on Windows Vista. We recommend that developers install Visual Studio 2005 Service Pack 1 and the Visual Studio 2005 SP1 Update for Windows Vista as they become available (SP1 end of this year, VS Update for Vista Q1 next year). We also recommend that Visual Studio 2005 be run with elevated administrator privileges. Visual Studio 2003 &amp; 2002 are not supported on Windows Vista. The underlying frameworks (.NET Fx 3.0, 2.0 &amp; 1.1) are supported and applications using them will run on Windows Vista."</p>
<p><font color=#ff0000>(Update 14 Dec) </font><font color=#ff0000>Here are some more resources ...</font></p>
<ul>
<li><a href="http://msdn2.microsoft.com/en-us/vstudio/aa964140.aspx" target="none" rel="noopener">Visual Studio 2005 on Windows Vista Issue List</a></li>
<li><a href="http://blogs.msdn.com/heaths/archive/tags/VS+2005+SP1/default.aspx" target="none" rel="noopener">Heath Stuart's blog</a></li></ul>
<p>You can read more on Soma's <a href="http://blogs.msdn.com/somasegar/archive/2006/09/26/772250.aspx" target="none" rel="noopener">blog</a>.</p>
<p>As for SQL Server 2005, I've heard that you won't have any problems installing the Developer edition, but if you want to install Standard or Enterprise versions, you'2013-08-28 18:35:19'll need to install the <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=d2da6579-d49c-4b25-8f8a-79d14145500d&amp;DisplayLang=en" target="none" rel="noopener">CTP of Beta 2</a>. If you are wanting to use Reporting Services, remember that&nbsp;RS uses IIS and IIS 7 + Vista are different. Here is a <a href="http://geeks.ms/blogs/sergiotarrillo/archive/2006/10/16/4703.aspx" target="none" rel="noopener">blog post</a>&nbsp;(in Spanish but the screens are pretty self-explanatory), instructing on how&nbsp;to properly configure IIS on Vista for RS. Beyond that, there is guidance in an older June <a href="http://www.microsoft.com/sql/howtobuy/windowsvistasupport.mspx" target="none" rel="noopener">article</a>.</p>