---
title: "Installing July CTP of Team System"
date: 2005-08-07T00:39:11Z
authors: ["Richard Hundhausen"]
slug: "installing-july-ctp-of-team-system"
draft: false
tags: ["Visual Studio", "ALM", "SQL Server"]
---

<p>Since I have nothing else going on in my life (ya - right), I thought I would start installing the July CTP of TFS and VSTS. This CTP requires a dual-installation, because you have to use the June CTP of SQL Server 2005 which uses a different build of the .NET Framework than VSTS July CTP. Anyway, I've run into some problems, which I will share with you ...</p>
<ul>
<li>You can install SQL 2005 June CTP on the same VPC as the DC, because of <a href="http://forums.microsoft.com/msdn/ShowPost.aspx?PageIndex=2&amp;PostID=17320" target="none" rel="noopener">this problem</a>.
<li>So, I had to create a separate VPC for the DC (at least it runs with &lt; 200mb of memory allocated).</li></ul>
<p>More to come, I'm sure ...</p>