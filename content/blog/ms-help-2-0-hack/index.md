---
title: "MS Help 2.0 Hack!"
date: 2004-12-14T01:55:16Z
authors: ["Richard Hundhausen"]
slug: "ms-help-2-0-hack"
draft: false
tags: ["Life"]
---

<p>Maybe this has been blogged before, but I couldn't find it.</p>
<p>If you're like me, you miss the simplicity of .HLP and .CHM files, where&nbsp;a simple&nbsp;double-click opens the help file. As you know, Microsoft has been deploying any help that relates to Visual Studio .NET in the <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/htmlhelp/html/hwmscextendingnethelp.asp" target="none" rel="noopener">MS Help 2.0 format</a>, which is not so friendly.</p>
<p>Ok, so here's my problem, if you obtain help files, like from the <a href="http://www.gotdotnet.com/workspaces/workspace.aspx?id=8d122e04-c968-4b56-976a-59b9ed394404" target="none" rel="noopener">Visual Studio Team System prerelease documentation</a>, and you want to just read through it, you can't just double-click on any of the files:</p>
<p><img src="filesvstshelpfiles.jpg"></p>
<p>So my hack goes like this: (you must be on a Visual Studio .NET/2005 machine)</p>
<ol>
<li>Open the .vrg file with notepad (<em>_VsEnt80_reg.vrg in the above example</em>).
<li>Look for the "Filename"= section of the file (<em>"ms-help://ms.VsEnt.v80.en" in the above example</em>).
<li>Copy the entire ms-help://xxxxxx path to the clipboard (<em>ms-help://ms.VsEnt.v80.en in the above example).</em>
<li>Drop to the command prompt and run the following, pasting in the above path.
<p><em>&nbsp;&nbsp; &#8220;C:Program FilesCommon FilesMicrosoft SharedHelpdexplore.exe&#8221; /helpcol <u>ms-help://ms.VsEnt.v80.en</u></em></p>
<li>Create a batch file, command file, or shortcut and you're set!
<p></p></li></ol>