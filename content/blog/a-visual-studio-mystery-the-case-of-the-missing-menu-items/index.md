---
title: "A Visual Studio Mystery - The Case of the Missing Menu Items"
date: 2008-12-31T16:01:14Z
authors: ["Martin Danner"]
slug: "a-visual-studio-mystery-the-case-of-the-missing-menu-items"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Recently I was working with a client who installed the Team Foundation Client 2008 on his workstation, and subsequently decided to install Visual Studio 2008 Development Edition. The installation completed normally, but when he launched Visual Studio he quickly discovered that some important things were missing.</p>
<p><a href="Image1_2.jpg"><img title=Image1 style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px" height=460 alt=Image1 src="Image1_thumb.jpg" width=644 border=0></a>&nbsp;</p>
<p>For instance, the <strong>File</strong> menu was missing the <strong>New Project</strong> item. It was as if the we were still looking at the Team Foundation Client, and that the installation of the Development Edition had somehow failed. At first this was very puzzling until a sharp developer suggested that we look at the Settings (<strong>Tools</strong> –&gt; <strong>Import and Export Settings</strong>)</p>
<p><a href="Image2_4.jpg"><img title=Image2 style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px" height=458 alt=Image2 src="Image2_thumb_1.jpg" width=644 border=0></a>&nbsp;</p>
<p><a href="Image3_4.jpg"><img title=Image3 style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px" height=484 alt=Image3 src="Image3_thumb_1.jpg" width=489 border=0></a> </p>
<p><a href="Image4_2.jpg"><img title=Image4 style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px" height=484 alt=Image4 src="Image4_thumb.jpg" width=489 border=0></a> </p>
<p><a href="Image5_2.jpg"><img title=Image5 style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px" height=484 alt=Image5 src="Image5_thumb.jpg" width=487 border=0></a> </p>
<p>Sure enough, Team Foundation Client had installed and automatically selected the setting called <strong>Project Management</strong>. Although the Development Edition installation added a few more settings, it left the selection unchanged. Once we changed the selection to something more appropriate, all the normal menus became visible. Mystery solved!</p>