---
title: "VSLive2005 - Eric Lee - VSTS: Enterprise Development and Testing Tools"
date: 2005-02-08T02:00:39Z
authors: ["Richard Hundhausen"]
slug: "vslive2005-eric-lee-vsts-enterprise-development-and-testing-tools"
draft: false
tags: ["Conferences", "Visual Studio", "ALM", "SQL Server", "Testing"]
---

<p>Eric Lee gives a presentation on Enterprise Dev and Testing Tools in VS2005 Team System.</p>
<p><img style="WIDTH: 283px; HEIGHT: 211px" height=271 src="EricLeeSpeaking.jpg" width=356 border=0></p>
<p>A great talk about the WHY of team development.&nbsp; Why is team development important?&nbsp; How can Team System help?</p>
<p>Eric is a great presenter.&nbsp; The audience is hooked, and he's on a roll!&nbsp; :-)</p>
<p>Cool points:</p>
<ul>
<li>Everything in VS Team Foundation Server (TFS) is exposed as a web service, so you can develop any kind of client that you like.&nbsp; Don't like the built-in support for Excel and Project?&nbsp; Build a new one!
<li>You can plug into the event system!&nbsp; You can create a Web Service, and then TFS will call YOU!&nbsp; Almost a SOAP call-back!&nbsp; You can already set up email notifications when it changes.
<li>TFS can handle all of your administrative UI stuff.&nbsp;
<li>Team Build - coming soon - you'll be able to do a scheduled build, run the unit tests, coverage tests, etc, and will generate a build report!&nbsp; Oh, way cool!
<li>Code Analyzer (was FxCop) - rules engine that is fully extensible and configurable.&nbsp; You can catch the errors that are well known.&nbsp; "This will allow you to focus on making new errors." (got a good laugh)
<li>Code Profiler - It's been used for many years at Microsoft.&nbsp; Makes testing your code for performance much easier!
<li>Unit Tests - I'm very excited about this!&nbsp; Programmers NEED to use Unit Tests, and they just don't, since it'2013-08-28 13:52:38's an initial hurdle.&nbsp; But once you've done it, you're sold!&nbsp;
<li>Unit Tests can use data binding to expand the unit testing to be very powerful!
<li>Unit Tests can run against web applications.
<li>Testing infrastructure is robust enough to handle MS internal tests, which can number in the 10s of thousands of tests.&nbsp; Cool!
<li>Team Testing is extensible&nbsp;- "More time spent being sure testing was extensible than in building tests."
<li>Reports include quality measurements at the development level and deployment level.</li></ul>
<p>Time for a demo!&nbsp; Cool stuff from the demo:</p>
<ul>
<li>XSD Schemas are shipped for every notification, so you can actually generate your own classes to consume them!
<li>Code coverage data is exportable to XML format!
<li>Code coverage can merge the results of several different test runs!&nbsp; So test runs can be aggregated.
<li>Code coverage results can be aggregated before sending the report to TFS.&nbsp; Reports can then be generated based on the reports.
<li>Test Manager UI - a great UI for a tester who is responsible for hundreds or thousands of tests.
<li>He's demonstrating the code analysis tools specifically to find the SQL injection vulnerability, this is WAY, WAY cool!&nbsp; And the door is WIDE open for 3rd parties.&nbsp; This is INCREDIBLE!
<li>Now he's showing the tests for memory leaks, possible buffer overruns, and several other more advanced tests.&nbsp; This is literally AMAZING, absolutely <strong>AMAZING</strong>!
<li>Demonstration of a custom validation rule for a web test (and how the object model can be used in the web tests).&nbsp; Another way, way cool feature.&nbsp; And it worked like a champ!
<li>There's a wizard to help you configure the profiling of a web application.&nbsp; This is a huge improvement over what I've seen before.
<li></li></ul>
<p>&nbsp;</p>
<p>This is incredible!&nbsp; Between Ajay and Eric, the audience has been exposed to so much cool stuff in Visual Studio Team System.&nbsp; And they are enthralled!&nbsp; This product is going to be BIG!&nbsp; It's already 6:30 in the evening and the keynote room is still filled with people, all literally sitting on the edge of their seats.</p>
<p>I can hardly stand it!&nbsp; I'm so fidgety with excitement!&nbsp; I'm writing a MOC course on this topic, so I'm familiar with so much of the presentation.&nbsp; But to see the reactions of the people here, and to see the number of doors opened by this technology is so exciting!&nbsp; The possibilities for 3rd party extensions here are just amazing!!!</p>