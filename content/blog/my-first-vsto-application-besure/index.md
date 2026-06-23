---
title: "My First VSTO Application - BeSure"
date: 2008-11-29T04:01:00Z
authors: ["Richard Hundhausen"]
slug: "my-first-vsto-application-besure"
draft: false
tags: ["Development"]
---

If you exchange email with me on a regular basis, you know that I am the king of email faux pas. I regularly do things like this:
<ul>
	<li>Use CNTRL+Enter to send an email sooner than I really want to send it.</li>
	<li>Send emails that are missing attachments.</li>
	<li>Send from my work account when I meant to send from my personal account (this one is a biggy in Outlook).</li>
	<li>Hit Reply All when I meant Reply.</li>
	<li>Include the wrong person on the CC line.</li>
</ul>
In short, I am well aware of proper email etiquette, but I am notoriously bad at exercising it. All I really need is a last minute check to ensure I am not doing something stupid.

Enter my first real (Visual Studio Tools for Office) application. I just want to give myself an "Are You Sure" screen before sending an email in Outlook and review all the critical aspects of the email before I send it.

This Add In for Outlook 2007 simply displays a window before actually sending my email, giving me an opportunity to change my mind. It shows me the major things that I should check before really hitting send:
<ul>
	<li>The account I am sending the email from</li>
	<li>The addresses on the To: line</li>
	<li>The addresses on the CC: line</li>
	<li>The addresses on the BCC: line</li>
	<li>The number of attachments on the email.</li>
</ul>
<a href="image_2.png"><img style="display: inline; border-width: 0px;" title="image" src="image_thumb.png" alt="image" width="244" height="184" border="0" /></a>

The code is up on Elegant Code's Google Code SVN repo <a href="http://code.google.com/p/elegantcode/" target="_blank" rel="noopener">here</a> and you can download the click once installer <a href="http://elegantcode.googlecode.com/files/ElegantCode.BeSure.zip" target="_blank" rel="noopener">here</a>. I guess if anyone cares about something as inane as this, you are welcome to send me feedback and suggestions.

I am the first to realize this is a lame little utility, but it was interesting to write it as I got a little more familiar with the VSTO model. Also, I know there aren't any real unit tests in the test project. The reasons for this are twofold.
<ol>
	<li>The app is nothing much more than a Windows form with drag and drop attributes and 2-line event handlers.</li>
	<li>I am feeling lazy tonight.</li>
</ol>
Enjoy.