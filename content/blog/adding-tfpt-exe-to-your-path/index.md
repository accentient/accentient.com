---
title: "Adding TFPT.exe to your PATH"
date: 2008-02-10T21:59:52Z
authors: ["Richard Hundhausen"]
slug: "adding-tfpt-exe-to-your-path"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>I know. I know. This doesn't sound like a very interesting post, but it saved me time, and hopefully it can save you some too.</p> <p>When you install Visual Studio 2008, Microsoft creates a "Visual Studio 2008 Command Prompt" shortcut, under that program group.</p> <p><img style="border-top-width: 0px; border-left-width: 0px; border-bottom-width: 0px; border-right-width: 0px" height="143" alt="image" src="image_thumb.png" width="658" border="0"></p> <p>I like to take this shortcut and drop it on my Quick Launch toolbar:</p> <p><img style="border-top-width: 0px; border-left-width: 0px; border-bottom-width: 0px; border-right-width: 0px" height="32" alt="image" src="image_thumb_1.png" width="143" border="0"></p> <p>The problem is that when you install the Team Foundation Server Power Tools (or other new command line utilities) you need to put them in the path.</p> <p>Well, if you look at the file the shortcut calls, it's <u>vcvarsall.bat</u>, but don't bother editing that file because it calls <u>vcvars32.bat</u>, but don't bother editing that file, because it calls <u>vsvars32.bat</u>. If you go ahead and edit that file, you can find where the PATH is getting set, and add the Power Tools path to it:</p> <p>@set PATH=C:Program FilesMicrosoft Visual Studio 9.0Common7IDE;C:Program FilesMicrosoft Visual Studio 9.0VCBIN;C:Program FilesMicrosoft Visual Studio 9.0Common7Tools;C:WINDOWSMicrosoft.NETFrameworkv3.5;C:WINDOWSMicrosoft.NETFrameworkv2.0.50727;C:Program FilesMicrosoft Visual Studio 9.0VCVCPackages;<u>C:Program FilesMicrosoft Team Foundation Server 2008 Power Tools</u>;%PATH%</p>