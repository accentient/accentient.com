---
title: "Using 64-bit Windows Server 2008 as a Workstation OS, Part 2"
date: 2008-12-27T23:00:57Z
authors: ["Martin Danner"]
slug: "using-64-bit-windows-server-2008-as-a-workstation-os-part-2"
draft: false
tags: ["Windows"]
---

Way back in July I wrote a <a href="https://accentient.com/blog/Using64bitWindowsServer2008AsAWorkstationOSPart1.aspx" target="_blank" rel="noopener noreferrer">blog post</a> explaining why I switched from Windows Vista to Windows Server 2008 (WS2008) as the primary OS for my laptop. Well I’ve lived with WS2008 for a few months now, and although there are more than a few inconveniences associated with it, I still think the advantages outweigh the disadvantages, at least for the work that I do. As I installed WS2008 on my laptop I made notes, thinking this might be useful information, not only for the next time around, but also to share with my compatriots in the blog-o-sphere.

I recently purchased a <a href="http://www.dell.com/content/products/productdetails.aspx/xpsnb_m1530" target="_blank" rel="noopener noreferrer">Dell XPS M1530</a> laptop with all the bells and whistles: T9300 processor, 4GB RAM, 320GB 7200 RPM internal SATA drive, and hi-res glossy widescreen display. This time I decided to leave Windows Vista on the machine to play games and movies and enjoy all the other consumer candy that comes with it. So, I installed WS2008 in a dual-boot configuration, with WS2008 being the default OS. To do this, though, I had to make room on the internal hard drive. I wanted to devote as little space to Vista as possible because I didn’t expect to use it much. Vista was consuming about 15GB, so I figured that shrinking it’s partition down to 30GB would be more than sufficient. Much to my surprise though, the Disk Management utility in Vista was not willing to shrink the volume below 150GB. WTF!

A bit of investigation lead me to <a href="http://www.howtogeek.com/howto/windows-vista/working-around-windows-vistas-shrink-volume-inadequacy-problems/" target="_blank" rel="noopener noreferrer">this article</a>. Based on its advice I defragged and optimized the volume using a 15-day free trial of <a href="http://www.raxco.com/products/downloadit/perfectdisk_download.cfm" target="_blank" rel="noopener noreferrer">Perfect Disk 2008</a>. But some system files simply refused to move from the middle of the Vista volume. So, I did what any rational person would do: give up. I ended up with a 150GB Vista partition with gobs of free space. Arggh. As it turns out though, the Vista volume mounts as drive D in WS2008, so I decided to use all that extra space in the Vista volume (drive D) to store the huge virtual hard disk files (VHDs) for the Hyper-V virtual machines I would be installing later. Problem solved!

The WS2008 installation went smoothly. The WS2008 installer even set up the dual boot menu to appear on startup, with WS2008 as the default selection. Perfect!

In the next installment I’ll share the steps I used to install and configure Windows Server 2008 Standard Edition as a laptop OS.