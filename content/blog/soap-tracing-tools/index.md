---
title: "SOAP Tracing Tools"
date: 2004-06-19T15:26:49Z
authors: ["Richard Hundhausen"]
slug: "soap-tracing-tools"
draft: false
tags: ["Life"]
---

<p>If you are doing any serious&nbsp;Web Service development, you'll need a good tracing tool -- something that watches HTTP&nbsp;traffic and logs the requests and resonses, so you can see what SOAP headers and elements are being transfered. Most of these tracing tools work by interception. The tool registers as a port 8080 (for example) listener, collects all inbound and outbound traffic, and then forwards the requests on to port 80 (for example). It can cause a few problems, but they work well for the most part.</p>
<ul>
<li><a href="http://msdn.microsoft.com/webservices/building/soaptk/default.aspx" target="none" rel="noopener">MsSoapT3.exe (part of Soap Toolkit 3.0)</a>&nbsp;... or you can download it directly <a href="filesmssoapt3.exe">here</a>.</li></ul>
<p><img src="filesmssoapt3.gif" < P>
<p>Here are a couple of others:</p>
<ul>
<li><a href="http://www.pocketsoap.com/tcptrace" target="none" rel="noopener">Simon Fell's Win32 TCP-Trace utility</a>
<li><a href="http://www.pocketsoap.com/tcptrace/pt.aspx" target="none" rel="noopener">Simon Fell's&nbsp;Proxy Trace tool</a></li></ul>