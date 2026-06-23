---
title: "Problem downloading from Sharepoint to Vista"
date: 2008-04-26T18:47:37Z
authors: ["Martin Danner"]
slug: "problem-downloading-from-sharepoint-to-vista"
draft: false
tags: ["Windows"]
---

<p>I recently ran into a problem with our new Windows SharePoint Services (WSS) 3.0 instance running on Windows Server 2008. I'm running Windows Vista x64 on my laptop, which has been working very well. But, when I tried to download a file from this new SharePoint site, the download started OK but then stopped almost immediately, as if the connection was lost.</p> <p>I did some searching around the web and came across <a href="http://robgarrett.com/cs/blogs/software/archive/2006/12/31/vista-firefox-2-slow-network.aspx" target="_blank" rel="noopener">this post</a>. As it turns out Windows Vista can negotiate the TCP packet size with Windows Server 2008 to optimize download speed. Apparently my router (A NetGear FVS318) is throwing a wrench in the works by blocking the SYN packets used to negotiate packet size. Result: no download!</p> <p>Fortunately the fix is very easy once the&nbsp; problem has been identified. Just run a Command Prompt as Administrator, and paste this onto the command line:</p> <p><strong>netsh interface tcp set global autotuning=disabled</strong></p> <p>That did the trick for me! However, you may want to re-enable auto-tuning when connected to a router that handles SYN packets properly. To re-enable TCP auto-tuning, use this command:</p> <p><strong>netsh interface tcp set global autotuning=normal</strong></p> <p> To see the current TCP settings on your Windows Vista client, use this command:</p> <p><strong>netsh interface tcp show global</strong></p>