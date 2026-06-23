---
title: "What’s new and different in Visual Studio Scrum 2.0?"
date: 2012-03-12T21:10:26Z
authors: ["Richard Hundhausen"]
slug: "whats-new-and-different-in-visual-studio-scrum-2-0"
draft: false
tags: ["Scrum", "TFS"]
---

---

<p>Try this: Download the Visual Studio Scrum 2.0 – Preview 3 process template from the <a href="http://www.microsoft.com/visualstudio/11/en-us/downloads#tfs" target="_blank" rel="noopener">Team Foundation Server 11 Beta</a> into one folder and then do the same with the <a href="http://visualstudiogallery.msdn.microsoft.com/59ac03e3-df99-4776-be39-1917cbfc5d8e" target="_blank" rel="noopener">Visual Studio Scrum 1.0</a> version of the template.</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image.png" width="451" height="142"></p> <p>Next, drop to the (Developer) command prompt and run this:</p> <p><font size="2" face="Courier New"><strong>tf.exe folderdiff "C:Microsoft Visual Studio Scrum 1.0" "C:Microsoft Visual Studio Scrum 2.0" /recursive</strong></font></p> <p>Yep, they’ve changed a lot:</p> <p><a href="image_3.png" target="_blank" rel="noopener"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_thumb.png" width="415" height="484"></a></p> <p>If you double-click the ProductBacklogItem.xml difference, you can see the differences in the new new <a href="http://msdn.microsoft.com/en-us/library/bb385990(v=vs.110).aspx" target="_blank" rel="noopener">IDE-hosted tool</a>.</p> <p><a href="image_4.png" target="_blank" rel="noopener"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_thumb_3.png" width="644" height="240"></a></p> <p>If you are wanting a complete, functional walkthrough of the differences, you’ll have to wait for my upcoming book.</p> <p>#ItsInTheBook</p>
