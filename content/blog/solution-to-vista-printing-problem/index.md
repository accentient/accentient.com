---
title: "Solution to Vista printing problem"
date: 2007-03-26T03:59:09Z
authors: ["Richard Hundhausen"]
slug: "solution-to-vista-printing-problem"
draft: false
tags: ["Misc"]
---

I've solved the problem with the printer shared via USB on a Windows XP box!&nbsp; I can now print to it from my Vista box.<br /><br />I found the solution at TechArena.&nbsp; You can find it <a href="http://forums.techarena.in/showthread.php?t=655513">here</a>.&nbsp; Basically, you need to install the printer locally first, then fake it out using a Port that points directly to the shared printer.&nbsp; Then, be sure to disable the "Offline Printer" support so that it prints over the network immediately.<br /><br />UPDATE:&nbsp; And here's another <a href="http://members.shaw.ca/bsanders/NetPrinterNoPP.htm">post</a>, which makes things a bit more clear.<br />
<p></p>