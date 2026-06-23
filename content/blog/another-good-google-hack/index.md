---
title: "Another good Google hack!"
date: 2007-03-15T22:29:35Z
authors: ["Richard Hundhausen"]
slug: "another-good-google-hack"
draft: false
tags: ["Misc"]
---

For some time, I've been sharing a neat hack that I came up with for finding files using Google. Here's how it works:

&nbsp;

Assume you are looking for a specific file, such as northwind.mdb.

&nbsp;

&nbsp;
<ul>
	<li>If you enter "northwind", you'll find 1,666,000 hits.</li>
	<li>If you enter "northwind.mdb", you'll find 186,000 hits (mostly articles talking about northwind.mdb)</li>
</ul>
&nbsp;

To find pages that have the file itself, type the following underlined search ...

&nbsp;

<span style="text-decoration: underline;">"index of" northwind.mdb</span>

&nbsp;

This returns 712 pages, and you want to look for the ones that begin with "index of", such as <em>Index of /english_examples/exceltmm/22.</em>

&nbsp;

These "index of" pages are simply directory listings from Web servers where directory browsing was enabled. This is generally considered a security hole, but some sites (like .edu sites) leave them open because it's an easy way to share files.

&nbsp;

So, here's an update to my hack, sent to me anonymously:

&nbsp;

<span style="text-decoration: underline;">intitle:index.of "mp3" +"Jack Jones" -htm -html -php -asp "Last Modified"</span>

&nbsp;

As you can see, this sample is looking for MP3s, and includes "Last Modified" and excludes some noise. It'2013-08-28 18:35:14's a little cleaner and reduces the chances you'll return pages that aren't really directory listings.

&nbsp;

Update: Here's yet another <a href="http://blog.awswebshop.com/2006/10/15/turn-google-into-your-own-personal-free-napster" target="none" rel="noopener">blog posting</a> on how to do this, from Amazon's official blog ...

&nbsp;

Note: you shouldn't download licensed/copyrighted material that doesn't belong to you.