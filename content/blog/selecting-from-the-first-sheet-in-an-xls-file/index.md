---
title: "Selecting from the first sheet in an XLS file"
date: 2004-07-21T20:54:26Z
authors: ["Richard Hundhausen"]
slug: "selecting-from-the-first-sheet-in-an-xls-file"
draft: false
tags: ["Life"]
---

<p>Using the OLEDB .NET Data Provider and Jet, I am able to select from the various worksheets inside an Excel spreadsheet. This is great, and has saved me from automating Excel many times. The&nbsp;catch is that you have to know the name of the first sheet in the XLS file, or use automation or DAO (yuck) to determine it. I found a posting on <a href="http://weblogs.asp.net/donxml/archive/2003/08/21/24908.aspx" target="none" rel="noopener">DonXML's blog</a> that shows how to do this, using the OleDbConnection and it's GetSchemaTable method. Here's the goods:</p>
<p><font face="Courier New">conExcel.Open();<br />DataTable xlsSheets = conExcel.GetOleDbSchemaTable<br />&nbsp;&nbsp;(System.Data.OleDb.OleDbSchemaGuid.Tables,new object[]<br />&nbsp;&nbsp;{null, null, null, "TABLE"});<br />string SheetName =<br />&nbsp;&nbsp;".ToString()+"]";</font></p>