---
title: "MSI Installs without registering with Add/Remove Programs (ARP)"
date: 2004-06-16T12:32:33Z
authors: ["Richard Hundhausen"]
slug: "msi-installs-without-registering-with-addremove-programs-arp"
draft: false
tags: ["Life"]
---

<p>I had a student ask how to do this, because they have problems with their users dabbling with Control Panel's ARP applet. I suggested a tighter group policy, but went on to research the MSI documentation anyway.</p>
<p>Turns out that there are a <a href="http://msdn.microsoft.com/library/en-us/msi/setup/property_reference.asp" target="none" rel="noopener">number of properties</a> you can set as command line switches during installation. The&nbsp;simplest one that caught my attention was setting <strong>ARPSYSTEMCOMPONENT = "1"</strong>, which treats the install as a system component, rather than a standard desktop application.</p>
<p>Using Visual Studio .NET, I built a standard Windows setup project and&nbsp;when I executed it, I passed it the switch. It worked great.</p>
<p>&nbsp;&nbsp; <font face="Courier New">setup.exe ARPSYSTEMCOMPONENT =&nbsp; "1"</font></p>
<p>So why can't I&nbsp;burn this value into the .MSI from Visual Studio? The project properties window and dialog only offer about&nbsp;1/10th of the settings you can implement in&nbsp;an .MSI. According to the SDK documentation, I can add many different settings which were related to what I was trying to do: <a href="http://msdn.microsoft.com/library/en-us/msi/setup/arpnoremove_property.asp" target="none" rel="noopener">ARPNOREMOVE</a> and <a href="http://msdn.microsoft.com/library/en-us/msi/setup/arpnomodify_property.asp" target="none" rel="noopener">ARPNOMODIFY</a> for example.</p>
<p>When I tried to hack the .vdproj file directly and add the setting, I couldn't make it work, even though some of the&nbsp;<em>ARPxxx</em> settings are already in there. Any suggestions? Here's a snippet of my .vdproj file:</p>
<p><font face="Courier New">"Product"<br />{<br />"Name" = "8:Microsoft Visual Studio"<br />"ProductName" = "8:MoviesSetup"<br />"RestartWWWService" = "11:FALSE"<br />"RemovePreviousVersions" = "11:TRUE"<br />"DetectNewerInstalledVersion" = "11:TRUE"<br />"ProductVersion" = "8:1.0.0"<br />"Manufacturer" = "8:CET"<br />"ARPSYSTEMCOMPONENT" = "8:1"<br />"ARPHELPTELEPHONE" = "8:"<br />"ARPHELPLINK" = "8:"<br />"Title" = "8:MoviesSetup"<br />"Subject" = "8:"<br />"ARPCONTACT" = "8:CET"<br />"Keywords" = "8:"<br />"ARPCOMMENTS" = "8:"<br />"ARPURLINFOABOUT" = "8:"<br />"ARPPRODUCTICON" = "8:"<br />"ARPIconIndex" = "3:0"<br />"SearchPath" = "8:"</font></p>