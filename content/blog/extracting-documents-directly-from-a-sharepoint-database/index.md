---
title: "Extracting documents directly from a SharePoint database"
date: 2007-07-09T21:06:55Z
authors: ["Richard Hundhausen"]
slug: "extracting-documents-directly-from-a-sharepoint-database"
draft: false
tags: ["Microsoft"]
---

<p>Last month at Tech-Ed, I asked many of my&nbsp;SharePoint&nbsp;friends, and a few vendors,&nbsp;how to do this. I got answers ranging from "You can't" to "You'll need to buy our utility". They all told me that I should just add the content database back to my SharePoint instance and then use the WebDav or some other utility (sometimes commercial)&nbsp;to extract the documents in bulk. This wouldn't work, because I had upgraded to WSS 3.0 and this was a WSS 2.0 database. Well, it may have worked, but I was saving it as a final option.</p> <p>Instead, I searched the Web and found a posting by <a href="http://blog.plaxoed.com" target="_blank" rel="noopener">Mark Jen</a> where he <a href="http://blog.plaxoed.com/2006/11/02/little-tool-to-extract-all-files-out-of-sharepoint/" target="_blank" rel="noopener">posted the code</a> on how to do this. His code does what I suspected was possible - just rip through the items in the dbo.Docs table, and stream out the Content fields. It handles the creation of the folders as well!</p> <p>Thanks Mark!</p>