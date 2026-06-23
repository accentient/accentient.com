---
title: "DeleteTeamProject.exe"
date: 2005-05-15T02:21:37Z
authors: ["Richard Hundhausen"]
slug: "deleteteamproject-exe"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>There's a nice little utility out there for Team System.&nbsp; It allows you to delete a team project.&nbsp; You know, those Foo1 and MyTest projects you create right away?&nbsp; Right!&nbsp; Well, there's no way in VSTS to delete those, so someone at MS gave us a wonderful little utility, DeleteTeamProject.exe.&nbsp; <strong>UPDATE:&nbsp; Except I can't get it to work.&nbsp; It deletes everything useful, but you can't get rid of it from the Team Explorer.&nbsp; :-(</strong></p>
<p><em>(BUT BE CAREFUL!&nbsp; It isn't part of VSTS, it's just a utility someone threw together for the Beta.&nbsp; There is no error checking, and it fails unless everything is JUST RIGHT, and once it fails your TFS is completely corrupted, but you can then run with the /force attribute.)</em></p>
<p>Bottom Line Up Front - here'2013-08-28 13:51:18's how you use it:&nbsp; <strong>DeleteTeamProject /domain:{MyTFSServerName} "My Team Project"</strong></p>
<p>Pretty easy to use, but there are some gotchas!</p>
<p>First, it's located in a pretty remote directory: C:Program FilesMicrosoft Visual Studio 8Common7IDEPrivateAssemblies (assuming you're on drive C:)</p>
<p>Second, here are the parameters you can pass it.&nbsp; <strong>/q</strong> and <strong>/domain</strong> and <strong>/force</strong>, as well as the project name.&nbsp;&nbsp;&nbsp;<strong>/q</strong> just schwacks the project without asking for user confirmation, and <strong>/domain </strong>refers to the name of the TFS server.&nbsp; :-)&nbsp; Yes, you read that right!&nbsp; That took a while to figure out.&nbsp; <strong>/force </strong>continues deleting pieces even if one fails (useful if you only get 1/2 way through).</p>
<p>Buck Hodges has a <a href="http://blogs.msdn.com/buckh/archive/2005/01/24/359462.aspx" target="none" rel="noopener">post </a>that talks about using it in the Dec CTP, but some stuff has changed, I think.&nbsp; I tried leaving <strong>/domain</strong>&nbsp;off (since it wasn't required if you're only on one domain, but that didn't work.&nbsp; I'm on a VPC domain, which is on top of another domain, so that could be why).&nbsp; I tried <strong>/domain:MyDomain</strong> and that didn't work, neither did <strong>/domain:MyDomainMyServer</strong>, but <strong>/domain:MyServerName</strong> worked!</p>
<p>Happy Deleting!&nbsp; Oh, one more gotcha!&nbsp; You'd better have your ducks in a row, and all your source code checked in, since it deletes stuff out of the TFS databases WITHOUT USING A TRANSACTION.&nbsp; So if you have just one little file checked out somewhere on your whole dev team, it will fail 1/2 way through.&nbsp; You can use the<strong> /force</strong> attribute to ignore the errors in the deletions and continue deleting pieces that weren't deleted yet.&nbsp; But you can't change your mind and go back.</p>
<p>I hope I didn't scare you away.&nbsp; When you need it, you need it!&nbsp; Just take all necessary precautions, and then some.&nbsp; Maybe this feature will be added in the final release.</p>