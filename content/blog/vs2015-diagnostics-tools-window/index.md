---
title: "Turn off the Diagnostics Tools window in Visual Studio 2015"
date: 2015-08-17T11:58:41Z
author: "Richard Hundhausen"
slug: "vs2015-diagnostics-tools-window"
draft: false
tags: ["Visual Studio"]
---

---

I'm sure it's awesome.
I'm sure it doesn't impact performance (much).
I'm sure my apps would be more awesome if I used it, but ...

... today I want to turn off this "helpful" window from always showing while I was debugging my code ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="DiagnosticToolsWindow.jpg" alt="Visual Studio 2015 Diagnostic Tools window" width="512" height="538" />

So I followed these steps ...
<ol>
	<li>Tools &gt; Options &gt; Debugging.</li>
	<li>Clear the "Enable diagnostic tools while debugging" option.</li>
</ol>
<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="DisableDiagnosticToolsWhileDebugging.jpg" alt="Disable Diagnostic Tools while debugging" width="744" height="434" />

Oh, and I took the opportunity to turn off IntelliTrace while I was in there too ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="DisableIntelliTrace.jpg" alt="Disable IntelliTrace" width="744" height="434" />

#PerformanceEek
