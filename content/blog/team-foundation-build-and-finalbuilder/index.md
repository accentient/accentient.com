---
title: "Team Foundation Build and FinalBuilder"
date: 2008-11-29T07:02:48Z
authors: ["Richard Hundhausen"]
slug: "team-foundation-build-and-finalbuilder"
draft: false
tags: ["TFS", "Visual Studio", "Tools"]
---

When looking at <a href="http://www.finalbuilder.com/finalbuilder.aspx" target="_blank" rel="noopener noreferrer">FinalBuilder</a> and <a href="http://www.finalbuilder.com/finalbuilder.aspx" target="_blank" rel="noopener noreferrer">Team Foundation Build</a> side by side, the obvious breakdown in features and advantages looks like this.

<ol>

 	<li>Team Foundation Build provides a complete build solution with easy integration to other components of Team Foundation Server and Visual Studio Team System. Here is a set of features that detail what integration really means.

<ul>

 	<li>Build reporting and archiving inside Team Foundation Server</li>

 	<li>Easy access to source control</li>

 	<li>Ability to quickly spool up quick and dirty builds</li>

 	<li>Simple scheduling tools providing day, time, and event driven build firing</li>

 	<li>Easy to use retention tools for "expiring" old build artifacts</li>

 	<li>Automated test execution</li>

</ul>

</li>

 	<li>FinalBuilder provides an excellent visual development environment with pretty widgets to drop on a design surface. Creating build scripts visually can be a nicer design experience than working with the raw XML found in Team Foundation Build and tools like nAnt.Microsoft obviously recognizes the value of visual composition as the next version of Team Foundation Build (2010) is built on WF (Windows Workflow). This means builds tasks are effectively WF activities. If you've worked with WF, you may know that WF almost implies the next point: Team Foundation Build scripts will be built visually via a design surface in Visual Studio.</li>

 	<li>Arguably, the most significant advantage FinalBuilder has today is in the number of out-of-the-box build tasks (actions in FinalBuilder language) that come with the product. A complete list of FinalBuilder actions is available <a href="http://www.finalbuilder.com/Products/FinalBuilder/FeatureMatrix/tabid/63/Default.aspx" target="_blank" rel="noopener noreferrer">here</a>.</li>

 	<li>The complete list of FinalBuilder actions is exhaustive and I don't dare replicate it here.</li>

</ol>

<h2>Integration of the 2 Products</h2>

Regarding using Final Builder with Team Foundation Build, it is important to note that the two products don't preclude each other. Far from it, FinalBuilder ships with an integration task for working with Team Foundation Build. <a href="http://www.finalbuilder.com/articles.aspx?mid=370&amp;ctl=ArticleView&amp;articleId=20" target="_blank" rel="noopener noreferrer">See this article</a> for more information about using that integrated functionality.



This integration task gives us the ability to call FinalBuilder scripts from an automated (scheduled or event-fired) Team Foundation Build run. This is cool because we get the best of both tools:

<ol>

 	<li>TFB Gives us complete integration with the development platform and reporting tools of Team System.</li>

 	<li>2. Final Builder gives us a nice visual development experience and more out-of-the-box build tasks than MSBuild.</li>

</ol>

<h2>Choosing the Right Tools from your Toolbox</h2>

One thing to keep in mind is this: Is the tool you need one that simply builds .NET web sites, class assemblies, and windows forms applications? If yes, the problem you are trying to solve is moderately simple. Team Foundation Build does a very good job of providing a complete solution for these scenarios.



FinalBuilder does have an additional expense associated with it, so if the build situation you are trying to solve is one of creating .NET binary packages, you may be better off using Team Foundation Build "unadorned". It does a great job of doing what it does.



If you are looking for other functionality like working with VB6 projects or spooling up virtual machines for deployment scenarios, FinalBuilder has a lot to offer. The promise of Team Foundation Build extending WF in the 2010 Team System release holds the promise of a solidly extensible build platform with an inherent visual design story. As Team Foundation Build matures, it will likely provide a feature parity competitor to FinalBuilder, but it has some catching up to do.