---
title: "Shipping unit tests with your shrinkwrapped software"
date: 2007-04-12T22:35:16Z
authors: ["Richard Hundhausen"]
slug: "shipping-unit-tests-with-your-shrinkwrapped-software"
draft: false
tags: ["Preferred Practice", "Tools", "Visual Studio", "ALM", "Azure Test Plans", "Testing"]
---

Last year, at PDC, I sat down with <a href="http://www.ssw.com.au/ssw/employees/employeesprofile.aspx?EmpID=AC">Adam Cogan</a>, of <a href="http://www.ssw.com.au/ssw/">SSW</a>, during an MSDN magazine party.&nbsp; Feeling the guilty pleasure of totally geeking out while a decent party was going on, Adam led a group of geeks through some of his very cool software tools.&nbsp; Somewhere during the discussion, he mentioned that he deploys his unit test, along with a test runner, with his shrinkwrapped application.&nbsp; That got my attention, since I'd never thought of them like that.&nbsp; I called him on it, and he explained.&nbsp; Now, there seems to be a visceral reaction from folks against the idea.&nbsp; Here's WHY it makes sense to deploy unit tests and a test runner with you application:<br />
<ol>
<li><i>Customer - "Your stupid app lost all my contact data!"</i>
<li><i>Help Desk - "Maybe I can help.&nbsp; Go to Help -&gt; Analyze"</i>
<li><i>Customer - "OK.&nbsp; I see this list of green and red dots with text."</i>
<li><i>Help Desk - "Can you read me the line next to the first red dot?"</i>
<li><i>Customer - "It says 'Can't find database at C:myappcontacts.mdb'"</i>
<li><i>Help Desk - "Hmm...&nbsp; Can you browse to that directory?"</i>
<li><i>Customer - "No, I deleted it to have room for more mp3's"</i>
<li><i>Help Desk - "Oh...&nbsp; That'2013-08-28 13:41:29's a file required for our app to run.&nbsp; Did you subscribe to our backup service?"</i>
<li><i>Customer - "Yes."</i>
<li><i>Help Desk "Good, go to Tools -&gt; Options -&gt; Restore Contact..."</i></li></ol>
<p>You get the idea.&nbsp; It rocks for troubleshooting those pesky support calls from customers.&nbsp; For a lot more information, and a very nice screenshot, see Adam Cogan's original posting on this topic!&nbsp; You can find the specific recommendation in his <a href="http://www.ssw.com.au/ssw/Standards/Rules/RulesToBetterUnitTests.aspx#MenuUnitTests">menu unit tests</a> best practice.&nbsp;(While you're there, check out the rest of his <a href="http://www.ssw.com.au/ssw/Standards/default.aspx">best practices</a>, he has a huge number of great ideas.)</p>
<p>Unfortunately, you cannot ship your Team System unit tests with your application.&nbsp; I know there's an NUnit to VSTS Unit Test converter.&nbsp; Does anyone know if VSTS Unit Tests can be converted to <a href="http://www.nunit.org">NUnit</a> or <a href="http://mbunit.com/">MbUnit</a> unit tests, so that all of us using VSTS Unit Tests can implement this best practice?<br /><br />UPDATE:&nbsp; <strike>Adam Cogan claims he got the idea from James Newkirk (of NUnit fame).</strike>&nbsp; <strike>That may be the case, but I'll have to credit Adam.&nbsp; :-) He's got so many best practices on his site (see this rule&nbsp;that covers </strike><a href="http://www.ssw.com.au/ssw/Standards/Rules/RulesToBetterUnitTests.aspx#MenuUnitTests"><strike>shipping&nbsp;unit tests</strike></a><strike>&nbsp;for an example)&nbsp;that if he didn't get the idea from Newkirk, he likely would have thought of it himself!</strike></p>
<p>UPDATE TWO:&nbsp;&nbsp;This IS Adam's idea!&nbsp; James simply&nbsp;wanted a&nbsp;distributable test harness for developers to use!&nbsp; I misunderstood his first comment to me!&nbsp; (By the way, if you have comments on this post, or any other, please send email to steve+commentsaccentient.com.&nbsp; We've had to disable comments until we find a way to more effectively eliminate comment spam.)<br /><br /><br /></p>