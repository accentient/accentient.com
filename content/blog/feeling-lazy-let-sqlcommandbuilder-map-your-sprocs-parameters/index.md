---
title: "Feeling lazy? Let SqlCommandBuilder map your SProc's parameters"
date: 2004-08-06T03:16:56Z
authors: ["Richard Hundhausen"]
slug: "feeling-lazy-let-sqlcommandbuilder-map-your-sprocs-parameters"
draft: false
tags: ["Life"]
---

<p>You may know my feeling on SqlCommandBuilder, but on those days you're feeling lazy ...</p>
<p><font face="Courier New">&nbsp; Dim cmdNW As New SqlCommand<br />&nbsp; cmdNW.Connection = conNW<br />&nbsp; cmdNW.CommandType = CommandType.StoredProcedure<br />&nbsp; cmdNW.CommandText = "Employee Sales by Country"<br /></font><font color=#0000ff><font face="Courier New"><strong>&nbsp; SqlCommandBuilder.DeriveParameters(cmdNW)</strong></font><br /></font></p>
<p></p>