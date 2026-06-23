---
title: "Changing the licensed to user in Visual Studio 2008"
date: 2009-10-20T01:09:44Z
authors: ["Richard Hundhausen"]
slug: "changing-the-licensed-to-user-in-visual-studio-2008"
draft: false
tags: ["Visual Studio"]
---

<p>If you’re like me, then you don’t pay attention when you install a lot of software. Often times I just click Next > Next > Finish without reading the screens.</p> <p>For example, I guess I wasn’t paying attention to who the registered user was when I installed Visual Studio 2008 or Windows for that matter, because the splash screen shows this:</p> <p><a href="image_2.png"><img title="image" style="border-right: 0px; border-top: 0px; display: inline; border-left: 0px; border-bottom: 0px" height="349" alt="image" src="image_thumb.png" width="533" border="0"></a> </p> <p>Yes, it’s a registry setting and you can find/set it here:</p> <p><strong>HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionRegisteredOwner</strong></p> <p><a href="image_4.png" target="_blank" rel="noopener"><img title="image" style="border-right: 0px; border-top: 0px; display: inline; border-left: 0px; border-bottom: 0px" height="301" alt="image" src="image_thumb_1.png" width="533" border="0"></a> </p> <p>Unfortunately, changing it didn’t do anything, until I learned the trick from <a href="http://www.wintellect.com/CS/blogs/jrobbins/default.aspx" target="_blank" rel="noopener">John Robbins</a> (Wintellect):</p> <p>After you change HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionRegisteredOwner, restart Windows and then run "<strong>DEVENV /setup</strong>" from an elevated PowerShell window. That will update the splash screen registry key.