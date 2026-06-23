---
title: "Consuming ASP.NET Web Services from SQLCLR"
date: 2005-09-06T15:30:01Z
authors: ["Richard Hundhausen"]
slug: "consuming-asp-net-web-services-from-sqlclr"
draft: false
tags: ["Visual Studio", "Microsoft", "SQL Server"]
---

<p>I've done a lot of things from the SQLCLR thus far, except for consuming an ASP.NET Web Service. This morning, I ran into some difficulties. Here are some key points to remember:</p>
<ul>
<li>Remove any app.config from your SQLCLR project so that VS 2005 can properly deploy</li>
<li>Refer to this <a href="http://forums.microsoft.com/msdn/ShowPost.aspx?PostID=73977" target="none" rel="noopener">posting</a> if you get the "Cannot load dynamically generated serialization assembly ..." error message</li>
<li>Refer to this <a href="http://blogs.msdn.com/sqlclr/archive/2005/07/25/Vineet.aspx" target="none" rel="noopener">posting</a> on how to automate the fix above from within Visual Studio 2005</li></ul>
<p>Many thanks to <span class=inlineLink onclick="window.open('/msdn/persona.aspx?ep=0&amp;fu=/msdn/User/Profile.aspx?UserID=1735', target='_self')"><strong>Vineet Rao (Microsoft)&nbsp;</strong>for these tips.</span></p>