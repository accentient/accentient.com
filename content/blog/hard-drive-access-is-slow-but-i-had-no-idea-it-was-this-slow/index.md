---
title: "Hard Drive access is SLOW  But I had no idea it was this slow"
date: 2004-12-23T06:37:29Z
authors: ["Richard Hundhausen"]
slug: "hard-drive-access-is-slow-but-i-had-no-idea-it-was-this-slow"
draft: false
tags: ["Misc"]
---

<p><a href="http://blogs.msdn.com/simonme/">Simon Meacham</a> has a wonderful post on performance implications, and profiling applications.&nbsp; When I talk about the importance of caching I often talk about how slow hard drive access is.&nbsp; But this quote really drives it home!</p>
<p><font face=Tahoma color=#000080 size=2>Now 2GHz is a difficult thing to imagine for a human. Put simply that is 2 <strong>billion</strong> (Dr Evil pose) instructions per second at maximum throughput. So lets put this on our terms. Let's say once processor "clock cycle" is not 1/2,000,000,000 of a second but rather 1 second. On that scale accessing the nearby L1 on-chip cache takes 6 seconds, the off chip (L2) cache 2-3 minutes, and accessing main memory takes 3-4 weeks. Accessing the disk (just one disk access) by comparison takes a whopping 1 year on this timescale.</font></p>
<p>Read the whole post!&nbsp; <a href="http://blogs.msdn.com/simonme/archive/2004/05/31/145024.aspx">http://blogs.msdn.com/simonme/archive/2004/05/31/145024.aspx</a></p>
<p>&nbsp;</p>