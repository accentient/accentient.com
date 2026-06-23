---
title: "Removing pingback, trackback, and comment spam from dasBlog"
date: 2007-07-17T19:50:18Z
authors: ["Richard Hundhausen"]
slug: "removing-pingback-trackback-and-comment-spam-from-dasblog"
draft: false
tags: ["Community", "SQL Server"]
---

Ok, I finally got fed up with all of the spam in my historical dasBlog postings. It's really embarrassing to send a link to a a colleague, only to have them snicker at all of the spam comments and trackbacks.

&nbsp;

For those of you who don't know what a <a href="http://en.wikipedia.org/wiki/Trackback" target="_blank" rel="noopener">trackback</a> is, it's basically an acknowledgement that enables authors to keep track of who is linking to, or referring to their articles. When used properly, trackbacks form a communication link between the two blogs, so that new comments on one blog can basically ping the other, allowing readers to easily follow discussions on both. The problem is that spammers have abused this mechanism and bloggers end up with trackbacks and pingbacks to various gambling, herbal medication, and adult sites.

&nbsp;

Earlier this year I joined the ranks, and disabled my trackback and pingback services in dasBlog. I then followed <a href="http://www.hanselman.com/blog/BlogInteresting32WaysToKeepYourBlogFromSucking.aspx" target="_blank" rel="noopener">Scott Hanselman's advice</a> on using <a href="http://akismet.com/" target="_blank" rel="noopener">Akismet</a> spam blocking service.

&nbsp;

The big effort was then how to cleanup the &lt;Comment&gt; and &lt;Trackback&gt; elements that were spam, so, like others before me, I built a tool to assist with this.

&nbsp;

&nbsp;
<ol>
	<li>Download <a href="ScrubDasBlog.zip" target="_blank" rel="noopener">ScrubDasBlog.zip</a> or <a href="ScrubDasBlogSource.zip" target="_blank" rel="noopener">ScrubDasBlogSource.zip</a> to your hard drive</li>
	<li>Edit the blacklist.txt to include your own blacklisted URLs *</li>
	<li>Backup your existing feedback files: <span style="text-decoration: underline;">content*.dayentry.xml</span></li>
	<li>Run the ScrubDasBlog utility, specifying the path to your content folder and the path to your blacklist.txt file, for example:</li>
</ol>
&nbsp;
<blockquote>
<span style="font-family: 'Courier New'; font-size: small;">scrubdasblog c:inetpubwwwrootmydasblogcontent c:scrubdasblogblacklist.txt</span></blockquote>
&nbsp;
<blockquote>
* If you have predominately more SPAM comments and trackbacks in your dasBlog history, then you can generate a starter blacklist by going into your <span style="text-decoration: underline;">content</span> sub-folder and typing the following:</blockquote>
&nbsp;
<blockquote>
<span style="font-family: 'Courier New'; font-size: small;">type *.xml | find "AuthorHomepage" &gt; blacklist.txt</span></blockquote>
&nbsp;
<blockquote>
After you generate the blacklist.txt file, you should remove any good sites and remove any duplicates, before running the ScrubDasBlog utility.</blockquote>
&nbsp;

I would recommend downloading the Source code version and reading through my code. Please comment on any improvements you might make.