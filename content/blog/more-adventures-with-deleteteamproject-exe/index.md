---
title: "More adventures with DeleteTeamProject.exe"
date: 2005-05-16T06:33:50Z
authors: ["Richard Hundhausen"]
slug: "more-adventures-with-deleteteamproject-exe"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Still trying to kill a site...&nbsp; Pretty much the answer is that you can clean up most of the database stuff, but you'll always see it in the VS2005 Team Explorer.&nbsp; But, here's how to get the most from DeleteTeamProject.</p>
<p>Log in as TFSSetup (I'm coming in from a client), since that Login has god-like powers.&nbsp; But before you can run DeleteTeamProject.exe, you first must open VS2005 and connect to the TFS (or use the command line).&nbsp; </p>
<p>Finally run it:&nbsp; <strong>DeleteTeamProject /domain:{serverName} /force MyStupidProjectIWantToKill</strong></p>
<p>And it will delete everything from <strong>Currituck</strong>, <strong>scc</strong>, <strong>Report Server</strong> and <strong>Sharepoint</strong>, but it will fail on <strong>vstfs</strong>.&nbsp; I mentioned that TFSSetup has god-like powers over team system...&nbsp; Well, to delete something from <strong>vstfs</strong>, I'm beginning to believe you need to be logged in as <strong>BillG </strong>(and I don't mean Bill Gibson).</p>