---
title: "Extending Load Testing Browser Support"
date: 2007-05-24T20:44:13Z
authors: ["Richard Hundhausen"]
slug: "extending-load-testing-browser-support"
draft: false
tags: ["Visual Studio", "Development", "ALM", "Testing"]
---

<p>The browser support out-of-the-box for Team Edition for Testers is pretty minimal. But, you can extend this support by adding your own browsers (common ones you'll probably want to add are IE7, Firefox and Opera and there are others you can probably think of). The files which provide the configuration for the browser types are stored in the C:Program FilesMicrosoft Visual Studio 8Common7IDETemplatesLoadTestBrowsers. You will several files which end in the extension ".browser". These files simply contain the header information a browser sends with a request. The IE6.browser file looks like the following:</p>
<p>&lt;Browser Name="Internet Explorer 6.0"&gt;<br />&nbsp; &lt;Headers&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="User-Agent" Value="Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept" Value="*/*" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept-Language" Value="{{$IEAcceptLanguage}}" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept-Encoding" Value="GZIP" /&gt;<br />&nbsp; &lt;/Headers&gt;<br />&lt;/Browser&gt;</p>
<p>If you aren't sure of what information to enter in this file, simply open up your favorite browser that isn't in the list and go to <a href="http://www.ranks.nl/tools/envtest.html">http://www.ranks.nl/tools/envtest.html</a>&nbsp;and grab the appropriate values! Use the IE6.browser file as a template. For example, if you wanted to add support to test Opera you might add the following and save it as Opera.browser:</p>
<p>&lt;Browser Name="Opera 8.0"&gt;<br />&nbsp; &lt;Headers&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="User-Agent" Value="Opera/8.00+(Windows+NT+5.1;+U;+en)" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept" Value="text/html, image/jpeg, image/gif, image/x-bitmap, */*" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept-Language" Value="en" /&gt;<br />&nbsp;&nbsp;&nbsp; &lt;Header Name="Accept-Encoding" Value="GZIP" /&gt;<br />&nbsp; &lt;/Headers&gt;<br />&lt;/Browser&gt;</p>
<p>There are obviously other values you can place here and some of this will be dependent on your locale,&nbsp;plug-ins you have loaded and other environmental factors. Once you save this file, you should be able to go in and create a new load test and Opera 8.0 will now show up as an option in your browser mix list.</p>