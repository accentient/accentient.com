---
title: "Unconfiguring Team Foundation Server 2010"
date: 2011-01-21T08:26:17Z
author: "Richard Hundhausen"
slug: "unconfiguring-team-foundation-server-2010"
draft: false
tags: ["TFS", "Visual Studio"]
---

---

<p><font size="2">I actually had a need to do this today, so I did some browsing of the </font><a href="http://social.msdn.microsoft.com/Forums/en/tfssetup/threads" target="_blank" rel="noopener"><font size="2">Team Foundation Server – Setup</font></a><font size="2"> forums and found these steps:</font></p> <ol> <li><font size="2">Execute <a href="http://msdn.microsoft.com/en-us/library/ms253116.aspx" target="_blank" rel="noopener">tfsconfig setup /uninstall:all</a>.</font>  <blockquote> <p><font size="2">This should be done from the Program FilesMicrosoft Team Foundation Server 2010Tools directory.<br /></font><a href="https://accentient.com/blog/content/binary/8358467a6362_6D47/image_2.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/8358467a6362_6D47/image_thumb.png" width="671" height="194"></a></p></blockquote> <li><font size="2">Drop the <strong>Tfs_Configuration</strong>,<strong> Tfs_Warehouse, </strong>and (optionally) any team project collection relational databases.</font> <li><font size="2">Drop the <strong>Tfs_Analysis</strong> Analysis Services database.</font> <li><font size="2">Optionally, delete any <a href="http://msdn.microsoft.com/en-us/library/ms253177.aspx" target="_blank" rel="noopener">SharePoint site collections</a> that were created.</font> <li><font size="2">Optionally, delete any <a href="http://msdn.microsoft.com/en-us/library/ms186470.aspx" target="_blank" rel="noopener">SQL Reporting Services folders</a> that were created.</font></li></ol> <p><font size="2">Unconfigured! (is that a word?)</font></p>
