---
title: "Yet Another Use of a Unit Test Framework"
date: 2008-11-26T19:19:02Z
authors: ["David Starr"]
slug: "yet-another-use-of-a-unit-test-framework"
draft: false
tags: ["Community", "Development"]
---

Believe me, I understand TDD. I grok it. It is in my soul.

I also happen to believe (and know from experience) that unit test frameworks are valuable far beyond their use in TDD. Some of the best uses are for integration tests at the API level.

It is this coolness that makes it so handy to run a unit test harness as a load test run using VSTS. I worked with one client who had a particular need for this in testing a HUGE network of independently addressable embedded Linux devices, each one exposing a TCP/IP-level API. More on how to running unit tests as load tests <a href="http://blogs.microsoft.co.il/blogs/shair/archive/2008/06/19/load-testing-features-of-visual-studio-team-system.aspx" target="_blank" rel="noopener noreferrer">here</a>.

But on to my latest use of a unit test. Remember back in the day when we wrote libraries without unit test frameworks? What did we do? We wrote a little command line EXE to exercise the thing while we wrote it and never checked that in to SCC. It worked, mostly.

I often have the same need when writing Windows Forms applications. I want to spool up and play with a window without all of the overhead of the entire application. So, here's my test.
<div style="font-size: 8pt; margin: 20px 0px 10px; overflow: auto; width: 97.5%; cursor: text; max-height: 200px; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border: gray 1px solid; padding: 4px;">
<div style="font-size: 8pt; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;">
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New'2013-08-28 13:38:22', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">   1:</span> <span style="color: #0000ff;">namespace</span> ElegantCode.BeSure.Test.GivenTheConfirmationDialogIsDisplayed</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">   2:</span> {</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">   3:</span>     </pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">   4:</span>     <span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span> WhenTheUserClicksNo</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">   5:</span>     {</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">   6:</span>         </pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">   7:</span>         <span style="color: #0000ff;">public</span> <span style="color: #0000ff;">void</span> ThenTheDialogResultShouldBeNo()</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">   8:</span>         {</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">   9:</span>             ConfirmationForm confirmationDialog = <span style="color: #0000ff;">new</span> ConfirmationForm();</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">  10:</span>             DialogResult result = confirmationDialog.ShowDialog();</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">  11:</span></pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">  12:</span>             Assert.AreEqual(result, DialogResult.No);</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">  13:</span>         }</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: #f4f4f4; border-style: none; padding: 0px;"><span style="color: #606060;">  14:</span>     }</pre>
<pre style="font-size: 8pt; margin: 0em; overflow: visible; width: 100%; color: black; line-height: 12pt; font-family: consolas, 'Courier New', courier, monospace; background-color: white; border-style: none; padding: 0px;"><span style="color: #606060;">  15:</span> }</pre>
</div>
</div>
No, this is not a unit test. All this does for me is allow me to open the window in a run time environment, see it lay out on the screen, click around on it, etc.

If you notice the structure of the test naming, I am using a little BDD convention because I am wondering about the idea of building a manual regression suite this way. What if a tester sites down and runs through a manual test by launching the a unit test harness that drives the UI.

It's an interesting idea, anyway.