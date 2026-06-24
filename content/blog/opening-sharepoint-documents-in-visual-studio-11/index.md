---
title: "Opening SharePoint documents in Visual Studio 11"
date: 2012-03-16T06:46:18Z
authors: ["Richard Hundhausen"]
slug: "opening-sharepoint-documents-in-visual-studio-11"
draft: false
tags: ["TFS", "Microsoft"]
---

---

<p>Today I was trying to open the ProcessGuidance.html file ...</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image.png" width="375" height="348"></p> <p>A double-click, or a right-click &gt; Open both resulted in Internet Explorer asking me if I want to Save or Cancel the document download. This was a surprise. I was expecting it to just open the web page.</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_3.png" width="644" height="484"></p> <p>It turns out that this is a setting in SharePoint Foundation 2010. Here are the steps I followed to fix this:</p> <ol> <li>Launched SharePoint 2010 Central Administration.</li> <li>Clicked Application Management &gt; Manage web applications.</li> <li>Selected my web application.</li> <li>Selected General Settings.</li> <li>Scrolled down and selected <em>Permissive</em> Browser File Handling.</li></ol> <blockquote> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_4.png" width="624" height="450"></p> <p>Now the document opens up in the browser, rather than prompting me to save it!</p></blockquote>
