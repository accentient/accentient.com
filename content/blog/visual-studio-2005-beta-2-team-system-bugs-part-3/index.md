---
title: "Visual Studio 2005 Beta 2 Team System Bugs (Part 3)"
date: 2005-05-07T19:40:17Z
authors: ["Richard Hundhausen"]
slug: "visual-studio-2005-beta-2-team-system-bugs-part-3"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Here's the latest round of bugs and annoyances on our weekend of discovery:</p>
<ul>
<li>When you copy/paste an application prototype, or drag and drop a saved to toolbox prototype, it overwrites your Class Namespace with the name of the new application
<li>Speaking of copy/paste in the application designers, you can't use the keyboard - Ctrl+C and Ctrl+V, you have to use the mouse.
<li>Can we hide the labels of our Web app and Web service endpoints by default?
<li>When you rename the DefaultSystem1.dd (deployment diagram) to a better name, such as MyDeployment.dd, it doesn't seem to take right away. It seems like you have to save/reopen the document.
<li>Semi-related to the above, the deployment report always seems to read "Default", no matter what I name the AD, LDD, or DD.
<li>When the validation of a deployment diagram finds "warnings", these then become "errors" in the deployment report.
<li>It seems that Visual Studio is applying my "Clean Build" source control policy when checking in Distributed System Designer solutions, which don't have any code to "build". You can always override the policy constraint; but, this is a pain.</li></ul>