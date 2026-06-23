---
title: "Questions from SQL Week (Israel)"
date: 2005-11-15T14:37:44Z
authors: ["Richard Hundhausen"]
slug: "questions-and-answers-from-sql-week-israel"
draft: false
tags: ["Conferences", "SQL Server"]
---

<p>Thank you everyone for attending my talks. I'm going to start answering the questions I've been asked here. Feel free to email me if you have additional questions, or if my answer(s) aren't clear.</p>
<p><strong>Q.</strong> Can I convert .RDLC (ReportViewer control) files to .RDL (Reporting Services) files?<br /><strong>A.</strong> You bet. Check out <a href="http://msdn2.microsoft.com/en-us/library/ms252109.aspx" target="none" rel="noopener">this page</a> for more information.</p>
<p><strong>Q.</strong> How can I clear out all the connection pools from my middle-tier<br /><strong>A.</strong> ADO.NET 2.0 has the new SqlConnection.<a href="http://msdn2.microsoft.com/en-us/library/system.data.sqlclient.sqlconnection.clearallpools.aspx" target="none" rel="noopener">ClearAllPools()</a> static method.<br /></p>