---
title: "A Primer on ALM in the Microsoft Stack"
date: 2008-10-17T05:58:46Z
authors: ["Richard Hundhausen"]
slug: "a-primer-on-alm-in-the-microsoft-stack"
draft: false
tags: ["Microsoft", "Development", "Visual Studio", "ALM"]
---

By now I you've likely heard the term ALM. For the uninitiated, here is the latest <a href="http://en.wikipedia.org/wiki/Application_Lifecycle_Management" target="_blank" rel="noopener">from Wikipedia</a>.
<blockquote><b>Application lifecycle management (ALM)</b> regards the process of delivering <a href="http://en.wikipedia.org/wiki/Software">software</a> as a continuously repeating cycle of inter-related steps: definition, design, development, testing, deployment and management. Each of these steps needs to be carefully monitored and controlled.</blockquote>
Does this sound familiar? It should. This is YAW2QH2DS (Yet Another Way to Quantify How to Deliver Software). This smacks of other big acronyms you may be familiar with like CMMI or *UP.

I don't mean to trivialize this with curmudgeonly developer attitude. The idea of measuring our organization's maturity level in the software delivery craft matters. It matters because successful small companies typically get bigger, and the challenge to every one of these organizations is how to stay successful as they struggle with issues of scaling up. It matters because it isn't good enough to compile and run software. It needs to work well, solve a good problem, and actually be delivered into the hands of users.

Measuring our organization's mastery of delivering great software is also important for organizations needing to get back to a good solid quality baseline. When things get big quickly without a control mechanism (companies, code bases, my belly, etc.) they trend toward entropy. ALM maturity can help provide that control mechanism.

Don't take that the wrong way. It am not saying, "Let'2013-08-28 13:38:41's use a manager's tool to measure and manipulate those pesky developers."

Quite the opposite, what I am really saying is closer to, "Imagine never having to explain to management that unit tests are a good thing and worth the effort."

If we have a common reference for measuring our collective skills, we can agree collectively that we can improve in certain areas.

What if (brace yourself) the framework itself (the one your CIO bought off on) required that unit tests, measured code coverage, automated builds, and automated testing were present in your delivery cycle on order to be level 2? Now we're cooking with a little more gas, eh?
<h2>Microsoft and ALM</h2>
So, guess what? Microsoft makes tools for software developers. Big news, but there are lots of tools that others in your organization use to complete the delivery cycle: System Center, MS Project, Project Server, Portfolio Server, etc. These are the tools used by people in your company up and down stream of developers in the delivery lifecycle. Go ahead and resent them, but wouldn't it be nice if these things were used <em><strong>well</strong></em> and worked more cohesively with <em>your</em> tools?

There isn't a terribly cohesive story when flowing things between these tools (phases of the ALM cycle) but they are getting there. The real value here should be:
<ul>
	<li>Tools that are frictionless to their primary users.</li>
	<li>Tools optimized for the specialist using them. Whether this is developers, project managers, program managers, IT helpdesk, system administrators, developers, or testers.</li>
	<li>Tools that seamlessly integrate, allowing passing the products of these tools between each other.</li>
</ul>
Obviously, Microsoft has a strong story for these tools as individual solutions. In the last few years, Microsoft tools have actually started to integrate more easily and this is why. Integrating them up and down stream to complete the ALM story will be a significant effort going forward. The Visual Studio Team System story is a particularly strong start for Microsoft in pursuing an integrated ALM line. The effort is underway to integrate the ALM story across all disciplines.
<h2>It's Not Just a Tool Story</h2>
"Great," you're thinking. So this is a part of world domination through tooling? Not exactly. The fact is that the tools themselves are being built these days to embrace many different processes or methodologies (read TFS Process Templates here). Project Management tooling is certainly due for an overhaul, but System Center has some shiny newness that is heading in the right direction.

As long as the base tools themselves continue supporting extensibility hooks, the community should be able to plug and play as desired. The key will be in getting full integration supported in the community tools. As an example, we really should put in the hooks for nUnit to integrate with Team Build for integrated reporting.

The bottom line here is the tools are getting more extensible along the stack as well. This means that we should be able to support any wonderful, decrepit, promising, or ill-advised silver-bullet process or technique that comes along. "Now don't that make you sweat chickens", my dad would say.
<h2>The ALM Maturity Model</h2>
So what about the model itself? Exactly what is this all about?

The basic ALM model endorsed by Microsoft includes the following Practice Areas.
<ul>
	<li>User Experience (UX)</li>
	<li>Requirements Management</li>
	<li>Quality &amp; Test</li>
	<li>Code Quality</li>
	<li>Architecture &amp; Design</li>
	<li>Project Management</li>
	<li>Software Configuration Management</li>
	<li>Deployment &amp; Operations</li>
	<li>Data Management</li>
</ul>
What I like about these areas is that it doesn't really matter whether you are a waterfall-driven Inicorp Employee or dyed-in-the-wool Agilista, these Practice Areas can typically be agreed upon as important. We can also all agree that being mature (read: competent) in these areas is important.

How mature are you? Microsoft provides an <a href="https://www.microsoft.com/assess/#" target="_blank" rel="noopener">online survey for evaluating the ALM maturity in your organization</a> where you can see a measured range of maturity for each Practice Area and specific competencies within each area.

Think about the questions you would ask to gauge competency in these Practice Areas. I was surprised to learn that the online survey asked many of the same questions I would have asked. Nice.
<h2>So?</h2>
So, what's the big deal and why is this different? I find a couple of things interesting.
<ul>
	<li>Several tool vendors are embracing similar ALM models, not just MSFT.</li>
	<li>CMMI is so 8 years ago.</li>
	<li>It's not about tools. It is about tools that support the business we need to do.</li>
	<li>There's a boatload of money coming behind this. Your executives will hear about this. This ALM TLA will come up in a meeting.</li>
	<li>This framework actually embraces, rather than eschews, Agile Software Development practices. Seriously.</li>
	<li>It gives your department lead something to brag about when you write unit test (don't undervalue this one).</li>
</ul>
This has a chance. This has a chance to actually improve the craft and to improve the bottom line at the same time, and that's a powerful combination.