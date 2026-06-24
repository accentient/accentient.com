---
title: "Support for Word and Excel reporting from Reporting Services"
date: 2006-09-20T07:52:49Z
authors: ["Richard Hundhausen"]
slug: "support-for-word-and-excel-reporting-from-reporting-services"
draft: false
tags: ["Visual Studio", "ALM", "SQL Server"]
---

<p>Reporting in Team System is handled by SQL Server 2005 Reporting Services. As such, team members get to enjoy (and are restricted-by) the built-in report <a href="http://msdn2.microsoft.com/en-us/library/ms154606.aspx" target="none" rel="noopener">rendering extensions</a>&nbsp;(CSV, Excel, HTML, Image, MHTML, PDF, and XML). What's missing from this list is the Microsoft Word DOC format and a richer Microsoft Excel XLS format.</p>
<p>This is where a product called&nbsp;<a href="http://officewriter.softartisans.com" target="none" rel="noopener">OfficeWriter</a> comes in. It enables you to use Excel or Word to create templates utilizing data markers and merge fields for databinding sections of the document to the various Team Foundation Server data items. After a quick configuration of Reporting Services, your reports can generate documents/spreadsheets based on these templates without the need for Microsoft Office on the server. There's also an integration with Reporting Services that will let you create these documents without any coding at all. Users will design their RDL reports using&nbsp;Excel or Word, without the need for&nbsp;Visual Studio or SQL Report Builder.</p>
<p>Check out their latest version of OfficeWrite&nbsp;(v3.6)&nbsp;at&nbsp;<a href="http://officewriter.softartisans.com" target="none" rel="noopener">http://officewriter.softartisans.com</a></p>