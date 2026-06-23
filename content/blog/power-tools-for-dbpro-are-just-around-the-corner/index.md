---
title: "Power Tools for DBPro are just around the corner"
date: 2007-08-08T16:39:29Z
authors: ["Richard Hundhausen"]
slug: "power-tools-for-dbpro-are-just-around-the-corner"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>Gert Drapers, the PM for Database Professionals announced that the first set of Power Tools should be released by the end of this week. With that in mind I wanted to blogging about some of the cool new features. Today's blog is on the new Regular Expression builder.</p>
<p><img height=727 alt="Regular Expression Builder.jpg" src="Regular Expression Builder.jpg" width=782 border=0></p>
<p>This allows you to choose your regular expression and and preview the result of the expression! Very cool. Here's a tip to add to the list of regular expressions:</p>
<p>Navigate to the AppDataRoaming Folder (this will be different depending on what O/S you're using - for Vista it's C:Users%Username%AppDataRoaming) and you'll find a file called RegExHelperConfig.xml.</p>
<p>Add a new record (for example, to add something simple like area code) with the following:</p>
<p><font face="Courier New">&lt;Record Key="21" DisplayName="Area Code" Regex="{3}" /&gt;</font></p>
<p><font face=Arial>You can also add a new element which shows up when you click the Insert Element button by inserting a record in the syntax element section of this same file. Then you can distribute this file to all of your developers and they'll have the updated contents!</font></p>
<p><font face=Arial>I believe that at the end of september (I didn'2013-08-28 13:39:53't get an exact date from Apress) a Second Edition of <a href="http://www.amazon.com/Visual-Studio-2005-Team-System/dp/1590594606/ref=pd_bbs_sr_1/103-5765168-4125453?ie=UTF8&amp;s=books&amp;qid=1186591080&amp;sr=8-1">Pro Visual Studio 2005 Team System</a> will be released with approximately 100 new pages of content devoted just to the Database Professionals Edition of Team System.</font></p>