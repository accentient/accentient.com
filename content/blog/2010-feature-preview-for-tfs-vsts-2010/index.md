---
title: "2010 Feature Preview for TFS : VSTS 2010"
date: 2008-10-27T23:32:54Z
authors: ["Richard Hundhausen"]
slug: "2010-feature-preview-for-tfs-vsts-2010"
draft: false
tags: ["Visual Studio", "ALM", "TFS", "Azure Boards", "Azure Test Plans", "Testing"]
---

I am in the TFS 2010 cool features talk at PDC with Brian Harry. I'll stream notes into this post, but please be aware that this discussion focuses on Team Foundation Server, not the full compliment of tools that make up Team Suite.

Also important to note is the significant size of this release. True to form for any given significant software product, version 3 (in this case 2010) is a tremendously significant release. Team System is a good example. The 2010 release will be HUGE. Brian Harry notes that it takes about 8 hours just to demo all the new features.

OK, onto the conference bullets you have come to expect from my fly-by conference posts.
<ul>
	<li>There is a high degree of focus on improving the story of TFS for large enterprises. This is a little conc</li>
	<li>Team Build
<ul>
	<li>Gated Builds
<ul>
	<li>Gated check in allows a build to run and tests to pass BEFORE the check-in is committed to the SCC tree.</li>
	<li>New Build Definition | Trigger | Set as Gated Build</li>
</ul>
</li>
	<li>Build Agent Pooling
<ul>
	<li>Define a pool of build machines instead of individual build servers. This feels a lot like pulling your build machines from the cloud.</li>
	<li>New Build Definition | Build Defaults | Build Agent Properties.</li>
	<li>Wow, this is impressive. I can configure multiple build agents per machine.</li>
	<li>Build agents may be tagged with their capabilities. This allows a build definition to say, "Only build on a build agent running on this OS, or with this COM DLL installed, etc."</li>
	<li>Can specify a collection of Test Lists to run as part of the build definition.</li>
</ul>
</li>
	<li>Build Workflow<strong> - Wow</strong>
<ul>
	<li>New Build Definition | Process</li>
	<li>Define the build in a visual designer with customizable targets. Think Final Builder here. No it isn't all the way there, but this is a nice start. It is basically a visual editor for the team build script.
<ul>
	<li>EX: Copy Outputs to Drop Location.</li>
</ul>
</li>
	<li>Parallel Activity: Allows me to build 2 different ways on 2 different build agents (among other things). For example I want a single build definition to build for Debug and one to build for Release, each build occurring on a separate build agent. Done. And I only labeled once. Nice. And each one has its own drop location (of course).</li>
</ul>
</li>
	<li>Retention Policy: Define what will be deleted when a build fails: the bits, label, the test reports, etc.</li>
</ul>
</li>
	<li>SCC
<ul>
	<li>Rollback. Thank you.</li>
	<li>Branches are first class citizens. Not just another folder visually. Nice. Branches have lots of meta data on them.</li>
	<li>Annotate now tells me what branch a merged change came from. This is a big deal for many regulated customers.</li>
	<li>I can see the history of a change set across many merges to see where it really came from. This is cool, but Track Change Set actually shows me a nice visual graph of how the branches relate to each other in time and as parent/children. Sweet.</li>
	<li>This trend of visually modeling information is powerful and promising.</li>
	<li>Viewing a conflict no longer results in a modal dialog. Now conflicts are seen as pending changes, which allows me to iterate through them and examine code while looking at the conflict item itself. Handy.</li>
</ul>
</li>
	<li>Work Items
<ul>
	<li>Linking them together is no longer horrible.
<ul>
	<li>AND THE RELATIONSHIPS ARE HIERARCHICAL!</li>
	<li>Hierarchical Work Item relationships.</li>
	<li>Hierarchical Work Item relationships.</li>
	<li>And round tripping through MS Project works. Yes!</li>
</ul>
</li>
	<li>New Agile process template. This is no longer MSF, and by golly it just might work.</li>
	<li>Rich text formatting capabilities in all text area type inputs on work items now.</li>
	<li>Excel integration in much nicer, showing hierarchies and allowing a persisted worksheet to hook back up to TFS cleanly.</li>
	<li>I can query against hierarchies. The sample query was "Show me all User Stories with no associated Test Cases." There is a lot implied in that query and all of it is goodness.</li>
</ul>
</li>
</ul>
That's a lot of bullets, but it's a big product. This set likely doesn't scratch the surface of what's coming, but it does show that the product team is addressing many of the most painful things that team'2013-08-28 13:38:40's deal with today.