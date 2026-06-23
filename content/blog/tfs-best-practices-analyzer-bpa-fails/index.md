---
title: "TFS 2013 Best Practices Analyzer (BPA) fails with %TFSServerURLValidated% error"
date: 2014-02-14T09:16:10Z
authors: ["Richard Hundhausen"]
slug: "tfs-best-practices-analyzer-bpa-fails"
draft: false
tags: ["Preferred Practice", "TFS"]
---

---

Earlier this week I installed the <a href="http://visualstudiogallery.msdn.microsoft.com/f017b10c-02b4-4d6d-9845-58a06545627f" target="_blank" rel="noopener">Team Foundation Server 2013 Power Tools</a> and went to run a BPA scan. It finished very quickly, giving me a couple of strange <em>%TFSServerURLValidated%</em> messages …

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" alt="image" src="image.png" width="820" height="315" border="0" />

Viewing the report showed an additional warning “Cannot validate the URL provided”. I double-checked the spelling of my TFS URL, but it was fine. By selecting the “Other Reports” option, I was able to find the root cause …

<a href="image1.png" rel="lightbox"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" alt="image" src="image_thumb.png" width="820" height="408" border="0" /></a>

So I began my research of the “Incorrect Windows PowerShell version 3.0. Windows PowerShell version 2.0 is supported in the current console.” error message and tried many things …

<a href="temp2.png" rel="lightbox"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="temp" alt="temp" src="temp_thumb.png" width="16" height="16" border="0" /></a>Tried running BPA as Administrator (try the easy stuff first, right?)

<a href="temp3.png" rel="lightbox"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="temp" alt="temp" src="temp_thumb1.png" width="16" height="16" border="0" /></a>Correct versions of PowerShell were installed

<a href="temp4.png" rel="lightbox"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="temp" alt="temp" src="temp_thumb2.png" width="16" height="16" border="0" /></a>PowerShell ExecutionPolicy was set to RemoteSigned

<a href="temp5.png" rel="lightbox"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="temp" alt="temp" src="temp_thumb3.png" width="16" height="16" border="0" /></a>The WinRM service was running and configured to support basic authentication

Still stumped, I reached out to some fellow Visual Studio ALM MVPs and <a href="http://blog.stangroome.com/" target="_blank" rel="noopener">Jason Stangroome</a> gave me the answer, which I’m paraphrasing here …

“The error message is coming from within PowerShell. BPA is trying to add the "TfsBPAPowerShellSnapIn" snapin into the in-process PowerShell runspace but the snapin is reporting that it expects v3 of PowerShell whilst the BPA in-process runspace is hosting PSv2. On an OS with PowerShell v3 or later installed, switching between the two is performed by switching between CLR 2 and CLR 4. Checking the TFS BPA assemblies shows that they are compiled for CLR 2. So, either BPA needs to run under CLR 4, or the TfsBPAPowerShellSnapIn needs to report that it works with PSv2.”

Following Jason’s lead, I created a <span style="font-family: Consolas;">TfsBpa.exe.Config</span> file in the <span style="font-family: Consolas;">C:Program Files (x86)Microsoft Team Foundation Server 2013 Power ToolsBest Practices Analyzer</span> folder and added these lines to it to force the CLR 4 to be used …
<span style="font-family: Consolas;">
&lt;configuration&gt;
&nbsp;&lt;startup&gt;
&nbsp;&nbsp;&lt;supportedRuntime version=&quot;v4.0.30319&quot;/&gt;
&nbsp;&lt;/startup&gt;
&lt;/configuration&gt;</span>

BPA is working great now …

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" alt="image" src="image2.png" width="820" height="211" border="0" />
