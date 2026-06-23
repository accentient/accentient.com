---
title: "ASP.NET 2.0 SecurityException"
date: 2005-05-08T00:10:24Z
authors: ["Richard Hundhausen"]
slug: "asp-net-2-0-securityexception"
draft: false
tags: ["Life"]
---

Today I built the most trivial of ASP.NET 2.0 Web applications that called the most trivial of ASP.NET 2.0 Web services. I deployed both to IIS 6.0, and the one wouldn't call the other. I was getting these, over and over:<br /><br /><strong>Security Exception</strong><br /><br />Description: The application attempted to perform an operation not allowed by the security policy. To grant this application the required permission please contact your system administrator or change the application's trust level in the configuration file.<br /><br />Exception Details: System.Security.SecurityException: Request for the permission of type 'System.Net.WebPermission, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089' failed.
<p></p>
<p><strong>Resolution</strong></p>
<p>Not very elegant here, but I added this to the web.config of the calling Web site, and it works:</p>
<p>&lt;system.web&gt;<br />&nbsp;&nbsp; &lt;trust level="Full" originUrl=""/&gt;<br />&lt;/system.web&gt;<system.WEB><system.WEB></p>
<p>Found some research <a href="http://weblogs.asp.net/rhurlbut/archive/2004/09/20/231778.aspx" target="none" rel="noopener">here</a> and <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpgenref/html/gngrftrustsection.asp" target="none" rel="noopener">here</a>.</p>