---
title: "Filing bugs from an ASPX page"
date: 2007-04-17T17:03:01Z
authors: ["Richard Hundhausen"]
slug: "filing-bugs-from-an-aspx-page"
draft: false
tags: ["Visual Studio", "ALM"]
---

If you'd like to file bugs in TFS using a web page, perhaps for users that don't have VS2005 or the Team Explorer installed, there's a pretty clean example located <a href="http://blogs.vertigosoftware.com/teamsystem/archive/2007/04/09/4828.aspx">here</a>.<br /><br />Now, I hear everyone crying out about Microsoft's purchase of <a href="http://www.devbiz.com/teamplain/webaccess/default.aspx">TeamPlain</a> and the web access available though that.&nbsp; (The version one of the TeamPlain addin is now freely available for download <a href="http://www.devbiz.com/teamplain/webaccess/default.aspx">here</a>.)&nbsp; I'm the first to admit that the TeamPlain solution is likely the best, however, there are times when you need to create your own solution.&nbsp; And the primary reason for that is 'multiplexing'2013-08-28 13:41:14', or supporting a large number of users who do not have TFS Client Access Licenses (CALs), by dropping everything into a single database, then having a triage individual, who does have a call, make the final decision to upload to the TFS server.&nbsp; (More on that in a future post...)<br />
<p></p>