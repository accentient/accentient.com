---
title: "Whidbey (May 2004 CTP) Documentation Bug"
date: 2004-06-05T19:13:23Z
authors: ["Richard Hundhausen"]
slug: "whidbey-may-2004-ctp-documentation-bug"
draft: false
tags: ["Life"]
---

<p>Thanks to&nbsp;<a href="http://normen.mine.nu/myblog/viewpost.aspx?PostID=79" target="none" rel="noopener">Fredrik Normen</a> for posting the fix!</p>
<p>The MSDN Library that&nbsp;shipped with the Visual Studio 2005 CTP for May, will not display any documents. It just searches and searches for the content.&nbsp;This&nbsp;can be fixed by doing the following tasks:</p>
<ol>
<li>Go to <em>C:Program FilesCommon FilesMicrosoft Sharedhelp whidbey</em>
<li>Open the file <em>dexplore.exe.config</em>
<li>Change&nbsp;the following lines:</li></ol>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;supportedRuntime version="v2.0.40507" safemode="true"/&gt;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;requiredRuntime version="v2.0.40507" safemode="true"/&gt;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to: </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;supportedRuntime version="v2.0.40426" safemode="true"/&gt; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;requiredRuntime version="v2.0.40426" safemode="true"/&gt; </p>
<p>&nbsp;&nbsp;&nbsp; To make the search function to work, do the following steps:</p>
<ol>
<li>Delete this folder <em>C:Documents and Settings<username>Application DataMicrosoftMSDN8.0</em>
<li>Open the MSDN help, ignoring&nbsp;the error.
<li>Go to <em>Tools - Options - Help -&nbsp;Online</em> section and&nbsp;uncheck the "Use Online Content" box. </li></ol>