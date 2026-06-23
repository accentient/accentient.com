---
title: "Extensibility of VFP 9.0"
date: 2004-06-05T19:52:02Z
authors: ["Richard Hundhausen"]
slug: "extensibility-of-vfp-9-0"
draft: false
tags: ["Life"]
---

<p>Sitting through Ken Levy's session and he's going over some new, cool features of 9.0 (Beta)</p>
<ul>
<li>Copying and pasting VFP 9.0 code into some other app (IE, Word) - it keeps the formatting (colors)
<li>New BLOB type in the table and then code <font face="Courier New"><em>REPLACE imagecolumn WITH FILETOSTR(&#8220;foxrox.bmp&#8220;)</em></font>
<li>Want to reference a public variable from command window, type <em><font face="Courier New">M.</font></em> and intellisense pops up
<li>To show the graphic in a picturebox <font face="Courier New">M.Photoform.Image1.PictureVal&nbsp;= ImageColumn</font> (best to do this through code)
<li>Still a limit of 2gbs for BLOB and Memo fields
<li>VFP 9.0 development on Windows 98 isn't supported, but you should be able to deploy the runtime and app just fine
<li>Tip: to select a control in a container, maybe within another container - hold CTRL + SHIFT and then click on it, rather than Edit.
<li>Anchoring to the edges (like in WinForms) works, but it's a binary number :-(
<li>The good news is that you can extend, and create your own property builder hooks
<li>Member data editor is driven from an&nbsp;XML file, so that you can specify which members have what properties and editors
<li>Foxcode allows a dev to hook any Fox IDE and substitute their own code or forms
<li>BindEvent allows you to bind a VFP IDE event to your own object to run whatever code you need - this may change
<li>Objects can be returned from Valid() events now (rather than just .T., .F., or 0) - so you can do a set focus to another control</li></ul>
<p>More information can be found on the <a href="http://blogs.msdn.com/vsdata" target="none" rel="noopener">VS Data Team's Weblog</a></p>