---
title: "What’s new in the Visual Studio Scrum 2.1 Process Template?"
date: 2012-11-28T16:01:22Z
authors: ["Richard Hundhausen"]
slug: "whats-new-in-the-visual-studio-scrum-2-1-process-template"
draft: false
tags: ["Azure DevOps", "Scrum", "TFS"]
---

---

<p>If you’ve connected to the hosted Team Foundation Service lately, you’ve noticed a new version of the Scrum template is available …</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_3.png" width="555" height="107"></p> <p>Being the curious type, I connected to the service with Visual Studio 2012, downloaded the new template, and compared it with the 2.0 process template using the Compare tool in Visual Studio …</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_8.png" width="568" height="503"></p> <p>It seems that there are 7 files that have changed, and 1 new one in the 2.1 template …</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_9.png" width="991" height="290"></p>   <p>Other than the obvious changes to metadata (2.0 &gt; 2.1, etc.), it appears the new version only has a few substantive changes …</p> <ul> <li>A new custom build process template to support <a href="http://blogs.msdn.com/b/bharry/archive/2012/06/07/announcing-continuous-deployment-to-azure-with-team-foundation-service.aspx" target="_blank" rel="noopener">Continuous Deployment to Azure</a></li> <li>In the default build template, the Sources, Binaries, and TestResults directory names have been shortened from Sources to src, Binaries to bin, TestResults to tst</li> <li>Bug and PBI work item types can now be transitioned from Approved &gt; New, Committed &gt; New, Done &gt; New, Done &gt; Approved, and Approved &gt; Done.</li></ul>
