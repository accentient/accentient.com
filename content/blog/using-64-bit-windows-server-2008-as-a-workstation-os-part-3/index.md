---
title: "Using 64-bit Windows Server 2008 as a Workstation OS, Part 3"
date: 2008-12-29T07:23:08Z
authors: ["Martin Danner"]
slug: "using-64-bit-windows-server-2008-as-a-workstation-os-part-3"
draft: false
tags: ["Windows"]
---

This article lists the steps I used to setup Windows Server 2008 (WS2008) Standard Edition as a workstation operating system on two different laptops.

First, if you plan to use WS2008 and Hyper-V to run virtual machines on a laptop, you’ll get best results if your laptop meets these criteria:
<ul>
 	<li>Processor that supports <a href="https://accentient.com/blog/ct.ashx?id=682e30bc-8e04-4394-a728-7eb75325c694&amp;url=http%3a%2f%2fwww.pcmag.com%2fencyclopedia_term%2f0%2c2542%2ct%3dhardware%2bvirtualization%26i%3d44120%2c00.asp">hardware virtualization</a> (required for Hyper-V)</li>
 	<li>At least 4GB memory (8GB if you want to run multiple virtual machines simultaneously)</li>
 	<li>Fast internal hard disk (I’m using a 320GB 7200 RPM SATA drive)</li>
</ul>
I should also mention that I’m using WS2008 for running virtual machines in Hyper-V, and also for email, web-browsing, word-processing, spreadsheets and presentations. That’s it. Since Hyper-V performance is of primary importance to me, I don’t install the Vista-like Desktop Experience feature or tweak processor scheduling to improve media playback.

Now, here are the specific step to install WS2008.

1. If you’re replacing an existing operating system that you’ve already been using, then backup anything you want to save to an external drive. The folders I backed-up include:
<blockquote>a. C:Users{your username}

b. Project folders</blockquote>
2. Gather drivers for your laptop. Vista x64 drivers should work just fine.

&nbsp;

3. Run the Windows installation
<blockquote>a. Create 2 partitions

i. A 40GB partition called RECOVERY, for backups
ii. All the rest goes to another partition SYSTEM</blockquote>
<blockquote>b. Install WS2008 on the SYSTEM partition</blockquote>
4. After the WS2008 installation completes, log on as Administrator and run Windows Update multiple times until there are no more Important updates to install.

&nbsp;

5. Using the Server Manager app, add the following Role: Hyper-V.

&nbsp;

6. Using the Server Manager app, add the Features you want. Here are the features I found useful:
<blockquote>a. Telnet Client (useful for testing ports and what have you)

b. Windows Server Backup

c. Windows Powershell

d. Wireless LAN Service</blockquote>
7. If you want to remove Internet Explorer Enhanced Security:
<blockquote>a. Using Server Manager, go to the Security Information section of the summary page and click on "Configure IE ESC". Adjust settings to personal preference.</blockquote>
8. If you are not installed WS2008 SP1 (Build 6001), you may need to install the RTM version of Hyper-V. Download it from <a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=F3AB3D4B-63C8-4424-A738-BADED34D24ED&amp;displaylang=en">here</a>.

9. Install your office productivity software.

&nbsp;

10. Run Windows Update, install everything not marked Optional.

&nbsp;

11. Using Windows Backup, backup the C: drive to the RECOVERY partition.

&nbsp;

12. Using the Hyper-V Manager, available through the Server Manager, setup your virtual machines on Hyper-V.

&nbsp;

13. Use this <a href="http://www.win2008workstation.com/wordpress/lang/en-us/2008/07/17/windows-server-2008-workstation-converter/" target="_blank" rel="noopener noreferrer">nifty converter tool</a> to further configure the OS. Options I installed are:
<blockquote>a. General

i. Set owner information

ii. Disable IE Enhanced Security Configuration

b. Visual Tweaks

i. Disable ctrl+alt+del at Windows Startup

ii. Disable Shutdown Event Tracker

c. Network

i. Enable Wireless Networking

d. Other

i. Enable Windows Search Service</blockquote>
<strong>Gotchas</strong>
<ul>
 	<li>Since Hyper-V is a service that’s always running, it’s more difficult to use VHDs on an external drive. I’ve been told that it is possible to unmount an external drive containing a VHD used by a Hyper-V virtual machine, but I’ve not yet figured out how.</li>
 	<li>The Hyper-V role disables sleep mode and hibernate. I’ve seen some <a href="http://markharrison.co.uk/blog/2008/09/sleep-hibernate-with-hyper-v.htm" target="_blank" rel="noopener noreferrer">blog posts</a> that describe a registry hack to enable sleep mode. But from what I’ve gathered it introduces system instability, so I’m willing to go without these handy features. More info <a href="http://blogs.msdn.com/virtual_pc_guy/archive/2008/02/27/hyper-v-and-power-management.aspx" target="_blank" rel="noopener noreferrer">here</a>.</li>
 	<li>It used to be that you could not install Windows Live Messenger or Windows Live Writer directly. But I’m pleased to report that the Windows Live installer now fully supports Windows Server 2008!</li>
 	<li>If you install the Desktop Experience feature (I didn’t – don’t want to waste CPU cycles on it), Windows Vista desktop is not enabled by default, and it’s not at all clear how to get it setup. Here’s a great <a href="http://softwareblogs.intel.com/2008/02/12/windows-server-2008-aero-enabled-workstation-edition/">blog post</a> that walks you through the process.</li>
 	<li>Here is another excellent <a href="http://blogs.msdn.com/vijaysk/archive/2008/02/11/using-windows-server-2008-as-a-super-desktop-os.aspx">blog post</a> on tweaks to make Windows Server 2008 a better desktop OS.</li>
 	<li>Virtual machines configured to run on Virtual PC will need to be reconfigured to run on Hyper-V. This <a href="http://sstjean.blogspot.com/2008/07/how-to-get-tfs-april-08-ctp-running.html">blog post</a> walks through the process.</li>
</ul>