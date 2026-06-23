---
title: "General Access Denied error when using Hyper-V with existing VHD images"
date: 2009-02-21T18:14:08Z
authors: ["Richard Hundhausen"]
slug: "general-access-denied-error-when-using-hyper-v-with-existing-vhd-images"
draft: false
tags: ["Windows"]
---

I’ve really been enjoying my <a href="http://www.samsung.com/global/business/semiconductor/productInfo.do?fmly_id=161&amp;partnum=MMCQE28G8MUP" target="_blank" rel="noopener noreferrer">Samsung 128GB SATA 3.0Gb/s Flash-based Solid State Drive (NSSD)</a>. Per <a href="http://www.dougseven.com" target="_blank" rel="noopener noreferrer">Doug Seven</a>’s advice, I’ve been copying over my existing Virtual PC 2007 hard drive images to the SSDD, and booting them up with Hyper-V. For the most part, there hasn’t been a problem, except yesterday I started receiving "General Access Denied" error message, something like this:

VMMS Account does not have sufficient privilege to open attachment 'E:Hyper-VWindows Server 2008Windows Server 2008.vhd'. Error: 'General access denied error' (0x80070005).

There’s a lot of chatter on the forums about this, but essentially it comes down to having to give the Network Service account (for the Hyper-V Image Management Service) adequate permission to the VHD file. There are several ways to do this, but I just gave the Everyone group (<em>Users</em> in Windows Server 2008) full control under the Hyper-V folder. Fixed!

As a follow-up, it <a href="http://www.aperture.ro/index.php/2009/01/intel-releases-patch-for-ipmi-driver-causing-conflicts-in-microsoft-hyper-v" target="_blank" rel="noopener noreferrer">turns out</a> that this is a bug for systems running Intel motherboards and Intel <a href="http://www.intel.com/support/motherboards/server/sysmgmt/sb/CS-029944.htm" target="_blank" rel="noopener noreferrer">released a fix</a> back in November 2008.