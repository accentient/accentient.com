---
title: "Visual Studio 2005 Team System - Bugs and Annoyances (IV)"
date: 2005-05-11T05:49:36Z
authors: ["Richard Hundhausen"]
slug: "visual-studio-2005-team-system-bugs-and-annoyances-iv"
draft: false
tags: ["Visual Studio", "ALM", "SQL Server", "Testing"]
---

<p>And a few more bugs and annoyances.</p>
<p>1)&nbsp; When you implement an application (i.e. Web Service) from the Application Diagram, you are not prompted to check the resulting project to source control.&nbsp; Workaround:&nbsp; Add it yourself manually from solution explorer.&nbsp; Nothing too difficult to do, just would be a bit more consistent with the rest of the 'new project' functionality in VS2005.</p>
<p>2) When you implement a Web service from an Application Diagram, the resulting code doesn't contain a reference to System.Xml.&nbsp; I know that this isn't a bug...&nbsp; But it seems wierd, since you so often use Xmk in XML Web services.</p>
<p>3) When you implement a unit test, using the right-click method from the code, there can be problems if you're dealing with XML.&nbsp; If you are&nbsp;passing a System.Xml.XmlDocument as a parameter, the unit test converts it to an XmlNode.&nbsp; These are much harder to deal with, since in a unit test, you may want to just load the XML from a file.&nbsp; But the problem goes very deep into Visual Studio, since the return type of a Web service is converted from XmlDocument to XmlNode.&nbsp; Yet they are NOT interchangable.</p>
<p>4) Team Foundation Server seems to sometimes slow to an absolute crawl, with processor utilization hitting 100% for 10 - 15 minutes at a time.&nbsp; Generally, this is when you attempt to check in a solution to TFS from a client.&nbsp; We have our TFS on a standalone box, set up according the setup guide.&nbsp; We must be missing some optimizations somewhere.&nbsp; The web server and SQL Server processes compete for processor time, pushing it up to 100%.&nbsp; Something's wrong.</p>
<p>5) When adding Unit Tests to a class, you can simply right-click a method and choose "Create Tests". It prompts you for the language, file names, etc. - but not the path. The new project is tucked away under My DocumentsVisual Studio 2005 ... which is an annoyance, if you like to tuck all your related projects in sub-folders under a common solution folder -- or if you just plain hate My Documents.&nbsp; Fix:&nbsp;First create a Test Project, by right-clicking your solution.&nbsp; Then when you </p>
<p>&nbsp;</p>