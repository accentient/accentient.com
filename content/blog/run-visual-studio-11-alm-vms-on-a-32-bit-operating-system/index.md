---
title: "Run Visual Studio 11 ALM VMs on a 32-bit operating system"
date: 2012-01-09T15:57:27Z
author: "Richard Hundhausen"
slug: "run-visual-studio-11-alm-vms-on-a-32-bit-operating-system"
draft: false
tags: ["Microsoft", "Visual Studio"]
---

---

Like most Microsoft ALM geeks, I downloaded the <a href="http://blogs.msdn.com/b/briankel/archive/2011/09/16/visual-studio-11-application-lifecycle-management-virtual-machine-and-hands-on-labs-demo-scripts.aspx" target="_blank" rel="noopener noreferrer">Visual Studio 11 ALM VM</a> the day <a href="http://blogs.msdn.com/b/briankel" target="_blank" rel="noopener noreferrer">Brian Keller</a> posted it. One of the first things I realized is that the VM is for 64-bit operating systems only. This is because Team Foundation Server 11 <a href="http://www.microsoft.com/download/en/details.aspx?id=27539" target="_blank" rel="noopener noreferrer">only runs</a> on a 64-bit server OS. This is no problem for me, because I have Hyper-V running here at my desk and I can run 64-bit VMs just fine. But, if you are one of the unfortunate many who do not have a W2K8 64-bit environment sitting around, then this blog post is for you (maybe).

<u>VirtualBox to the rescue</u>

<a href="https://www.virtualbox.org/" target="_blank" rel="noopener noreferrer">VirtualBox</a> is Oracle’s virtualization product. It’s freely available as Open Source Software under the terms of the GNU GPL. Personally, I'm a Hyper-V guy myself having the occasional fling with Virtual PC; but, VirtualBox has one feature that really seals the deal for me – and it’s very handy in this specific situation: it supports 64-bit guest operating systems, running on 32-bit host operating systems! Yes, you read that correctly. It’s magic.

Important: You need to make sure that the PC you are running the 32-bit host hardware is x64 capable and supports <a href="http://www.microsoft.com/windows/virtual-pc/support/configure-bios.aspx" target="_blank" rel="noopener noreferrer">hardware virtualization</a>. You will need to verify that your system supports this and possibly enable it in the BIOS. Microsoft even has a <a href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=592" target="_blank" rel="noopener noreferrer">tool</a> you can use to help verify.

<u>Steps to follow</u>
<ol>
 	<li>Verify that your 32-bit computer supports hardware virtualization.</li>
 	<li><a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noopener noreferrer">Download</a> and install the latest version of VirtualBox (for Windows hosts).</li>
 	<li><a href="http://blogs.msdn.com/b/briankel/archive/2011/09/16/visual-studio-11-application-lifecycle-management-virtual-machine-and-hands-on-labs-demo-scripts.aspx" target="_blank" rel="noopener noreferrer">Download</a> and expand the Visual Studio 11 VM to a safe location.</li>
 	<li>Launch VirtualBox and create a new VM, giving it a friendly name and selecting Windows 2008 (64 bit) as the OS.

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/ab64f81436e4_C816/image_11.png" alt="image" width="484" height="160" border="0" /></li>
 	<li>Give the VM adequate memory (mine seems to run fine with 2560mb and that leaves a ~1.5gb available for the host on 4gb machines)

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/ab64f81436e4_C816/image_12.png" alt="image" width="484" height="90" border="0" /></li>
 	<li>Uncheck the Start-up Disk option (we’ll come back to this in a bit).

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/ab64f81436e4_C816/image_13.png" alt="image" width="484" height="124" border="0" /></li>
 	<li>Finish creating the VM.</li>
 	<li>In the VM Manager, select the new VM and click Settings.</li>
 	<li>In the Storage section, right-click on the SATA Controller and select Remove Controller.

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/ab64f81436e4_C816/image_16.png" alt="image" width="484" height="173" border="0" /></li>
 	<li>Right-click on the IDE Controller and select Add Hard Disk. <a href="http://ollysense.blogspot.com/2010/05/virtualbox-using-hyper-v-vhd-image.html" target="_blank" rel="noopener noreferrer">Why did we do these last two steps?</a>

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/ab64f81436e4_C816/image_17.png" alt="image" width="484" height="174" border="0" /></li>
 	<li>Select Choose existing disk and navigate to the .VHD file you expanded in step 3.</li>
 	<li>Save your settings and then start, login, use, and love the VM!</li>
</ol>
<u>Making it better</u>

There are some other steps you may want to do in order to make using the VM a more enjoyable experience. Personally, I would …
<ul>
 	<li>Enable additional processors (if running on a multi-processor machine)<!--EndFragment--></li>
 	<li>Disable Audio (unless you really need it)<!--EndFragment--></li>
 	<li>Modify Network settings to ensure Internet connectivity</li>
 	<li>Activate Windows</li>
 	<li>Install VirtualBox <a href="http://www.virtualbox.org/manual/ch04.html" target="_blank" rel="noopener noreferrer">Guest Additions</a></li>
 	<li>Stop and Disable the various Hyper-V services (Data Exchange, Guest Shutdown, Heartbeat, Time Synchronization, and Volume Shadow Copy Requestor)</li>
 	<li>Reboot and create a snapshot</li>
</ul>
For more information, check out the article <a href="http://piftech.level5000.com/2011/08/04/converting-hyper-v-guest-systems-to-virtualbox/" target="_blank" rel="noopener noreferrer">Converting Hyper-V guest systems to VirtualBox</a> as well as <a href="http://rollyperreaux.com/2011/03/update-how-to-use-virtualbox-for-hyper-v-preconfigured-vm-images-graphical-step-by-step-part-1-of-4/" target="_blank" rel="noopener noreferrer">How to use VirtualBox for Hyper-V Preconfigured VM Images</a>.
