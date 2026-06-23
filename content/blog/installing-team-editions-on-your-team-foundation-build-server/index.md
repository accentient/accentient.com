---
title: "Installing Team Edition(s) on your Team Foundation Build server"
date: 2008-03-19T15:25:57Z
authors: ["Richard Hundhausen"]
slug: "installing-team-editions-on-your-team-foundation-build-server"
draft: false
tags: ["Microsoft", "Visual Studio", "ALM"]
---

<p>It's generally known that if you want to run any tests, code analysis, or database project build/deployment that you need to install one or more Team Edition of VSTS on your build server. What's not so well known are the licensing ramifications around these scenarios.</p> <p>Fortunately <a href="https://blogs.msdn.com/jeffbe" target="_blank" rel="noopener">Jeff Beehler</a>, Team System Chief of Staff, has <a href="https://blogs.msdn.com/jeffbe/archive/2008/03/18/licensing-team-system-editions-for-your-build-machine.aspx" target="_blank" rel="noopener">posted on this subject</a>.</p> <p>To summarize:</p> <p><em>If the users creating the builds are licensed users of the edition in question (or Team Suite), that license extends to Team Foundation Build and you don't need to purchase an additional license. One way to think about it is: the people that are using the Team editions need to be properly licensed which in turn ensures the that the build machines are covered as well. Users who merely queue (execute) and review the automated builds are only required to have a Team Foundation Server CAL.</em></p>