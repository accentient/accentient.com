---
title: "Don't be \"Not most specific\""
date: 2004-06-01T16:51:23Z
authors: ["Richard Hundhausen"]
slug: "dont-be-not-most-specific"
draft: false
tags: ["Life"]
---

<p>While teaching C# the other day, it occurred to me that in C#, you can create differing method signatures by playing with the parameter types as well as modifiers (ref or out). This works in C#, because when you call the method using the argument modifiers (ref or out) it selects the appropriate signature; but what about when you call this from Visual Basic .NET?</p>
<p><font face="Courier New">namespace Hundhausen<br />{<br />&nbsp;public class Foo<br />&nbsp;{<br />&nbsp;&nbsp;public void Bar(ref string s) {}<br />&nbsp;&nbsp;public void Bar(string s) {}<br />&nbsp;}<br />}</font></p>
<p>When you consume this class from Visual Basic .NET and call it like this:</p>
<p><font face="Courier New">Dim f As New Hundhausen.Foo<br />f.Bar("Hello World")</font></p>
<p>It gives this message:</p><img src="filesnotmostspecific.jpg">
<p>Interesting behavior, isn't it? The solution is to always compile your C# code with CLSCompliant attribute set to true and then this nonsense won't occur.</p>
<p>Here's the <a href="filesnotmostspecificproject.zip">project</a>, if you want to play with it.<br /></p>