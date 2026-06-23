---
title: "Vista talking to our Windows Server 2003 VERY slow"
date: 2007-03-24T17:34:34Z
authors: ["Richard Hundhausen"]
slug: "vista-talking-to-our-windows-server-2003-very-slow"
draft: false
tags: ["Misc"]
---

I recently "upgraded" to Vista on my laptop.&nbsp; Immediately, I noticed a few things that were very annoying...&nbsp; Primarily, it was the file transfer speed between my Vista box and our Windows Server 2003 box.&nbsp; What used to take about 3 minutes to download now takes well over 4 hours.&nbsp; In addition, the WSS portal we use takes over 1 minute for the home page to come up, versus less than 1 second.&nbsp; Yuck.&nbsp; So, I have to keep a copy of Windows XP around whenever I need to download stuff from our server.&nbsp; I shut down Vista, swap hard drives (laptop) and boot into XP.&nbsp; Then my speeds are nice and fast again.<br /><br />Microsoft recommended that I run the following command as an Admin from my Vista command prompt:<br /><i><br />netsh interface tcp set global autotuninglevel=disabled</i><br /><br />I wish I could report that it increased my performance, but, alas, I'm still stuck.&nbsp; <br /><br />I love the Vista experience, and there's so much to like about the OS, but I've run into so many "gotchas" that kill my productivity that I have to recommend staying with XP for now.&nbsp; At least until the first Service Pack is released, or they solve the major interoperability issues.<br /><br />UPDATE:&nbsp; I did a reboot after the netsh command above and NOW I'm moving quickly!&nbsp; It worked!&nbsp; I've still got doubts about the wisdom of moving, at this time, to Vista, but my communication problem with the server is no longer one of them!<br />
<p></p>