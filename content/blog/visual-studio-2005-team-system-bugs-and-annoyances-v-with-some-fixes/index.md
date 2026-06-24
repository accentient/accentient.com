---
title: "Visual Studio 2005 Team System - Bugs and Annoyances (V)  (with some fixes)"
date: 2005-05-14T22:38:40Z
authors: ["Richard Hundhausen"]
slug: "visual-studio-2005-team-system-bugs-and-annoyances-v-with-some-fixes"
draft: false
tags: ["Visual Studio", "ALM", "Testing"]
---

<p>And the start of another list.</p>
<ol>
<li>Enabling code coverage for a web service doesn't use the new name of Code Analysis, it still says "Enable FxCop" (but when doing anything but web services, the checkbox is "Enable Code Analysis"
<li>When you run FxCop (Code Analysis), you get a list of errors and warnings in the Error List.&nbsp; If you right-click -&gt; Show Error Help, an error pops up that says "The operation could not be completed. Not implemented".&nbsp; Fix:&nbsp; Use Google or MSN Search.&nbsp; :-)
<li>When using FxCop for a web service, I couldn't find a way to change the rules from warnings to errors, even though that process is trivial for DLLs and windows apps.
<li></li></ol>