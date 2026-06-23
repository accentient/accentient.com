---
title: "VSTS Things I Learned Last Week"
date: 2008-11-20T17:59:36Z
authors: ["Richard Hundhausen"]
slug: "vsts-things-i-learned-last-week"
draft: false
tags: ["TFS", "Visual Studio"]
---

I taught another week long class on Team System last week and as always, I learned a lot. It's a definite truth that if you want to learn about something, teach a class on it.

The other thing about is that each client you work with is looking to solve a different problem and you get introduced to new scenarios when you work through the "How can I solve that problem" discussions. This week included a lot of those types of discussions, and I therefore had to dig a bit.

What pearls of wisdom did I come away with?
<ol>
	<li>There is no apparent command line tool or GUI tool to get ONLY the files that changed as part of a change set.Scenario: I have files A, B, and C in a folder, and I change file B as part of change set 43. When I do a get (<strong>tf.exe get 43) </strong>I am going to get all 3 files.

What to do if I only wanted the delta (file B)? Well, there's a freeware utility waiting to happen.</li>
	<li>In TFS 2008, I can create a new Team Project and as part of that installation, I can choose to create the new source control library as a branch of a code line in another Team Project.</li>
	<li>&nbsp;

What happens to the history in case I delete Team Project A, which was the head for Team Project B's branch in SCC? Well, Team Project B just became the head.</li>
	<li>There is a PowerTool set for the Database Professional SKU (now packaged with the Developer SKU) that adds T-SQL code analysis. Maybe this will cut down on:
select * from customer</li>
</ol>