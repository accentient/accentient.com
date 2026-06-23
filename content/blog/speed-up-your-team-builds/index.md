---
title: "Speed up your Team Builds"
date: 2007-08-01T19:17:09Z
authors: ["Richard Hundhausen"]
slug: "speed-up-your-team-builds"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Over the past few years, a few of my clients have deployed <a href="http://msdn2.microsoft.com/en-us/library/ms252490(VS.80).aspx" target="_blank" rel="noopener">Team Foundation Server Proxy</a> to improve the performance of their remote/distributed teams. It&nbsp;boosts network performance by caching copies of source control files in a remote location, local to the developer needing the files but away from the main source control location.&nbsp;In short,&nbsp;the proxy helps each user avoid a costly download of the files to their workspace across the slower connection.</p> <p>So why wouldn't this work for Team Build?</p> <p>In today's <a href="http://msdn2.microsoft.com/en-us/chats/default.aspx" target="_blank" rel="noopener">VSTS chat</a>, I asked if anyone had done this. I should have expected that <a href="http://blogs.msdn.com/buckh/" target="_blank" rel="noopener">Buck Hodges</a> would have, and even <a href="http://blogs.msdn.com/buckh/archive/2007/03/07/configuring-the-build-to-use-the-version-control-proxy.aspx" target="_blank" rel="noopener">blogged about it</a>.</p>