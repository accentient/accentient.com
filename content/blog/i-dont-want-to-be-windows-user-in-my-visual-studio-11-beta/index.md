---
title: "I don’t want to be Windows User in my Visual Studio 11 Beta"
date: 2012-03-09T21:01:28Z
authors: ["Richard Hundhausen"]
slug: "i-dont-want-to-be-windows-user-in-my-visual-studio-11-beta"
draft: false
tags: ["Visual Studio"]
---

---

<p>I don’t know why it bothers me so much to see "Windows User" every time I fire up my Visual Studio 11 Beta …</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image.png" width="452" height="225"></p> <p>… but since it does, I thought I would share with you the steps I took to change it. Actually, these steps are not too different from a <a href="https://accentient.com/blog/changingthelicensedtouserinvisualstudio2008.aspx" target="_blank" rel="noopener">previous blog post</a> I made about a previous version of Visual Studio.</p> <p>Using your favorite registry editor (is there more than one?) change the <font size="2" face="Courier New">UserName</font> value of the following key:</p> <p><font color="#000000" size="2" face="Courier New">HKEY_LOCAL_MACHINESOFTWAREWow6432NodeMicrosoftVisualStudio11.0Registration</font></p> <p>If you are still running 32-bit Windows, drop out the <font size="2" face="Courier New">Wow6432Node</font> part:</p> <p><font color="#000000" size="2" face="Courier New">HKEY_LOCAL_MACHINESOFTWAREMicrosoftVisualStudio11.0Registration</font></p> <p>After exiting the registry editor, run <font size="2" face="Courier New">devenv /setup </font>from an elevated command prompt. Then, the next time you launch Visual Studio you will see something much more interesting:</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="image_4.png" width="449" height="228"></p> <p>That’s what I’m talking about. <a href="http://abcnews.go.com/US/captain-awesome-douglas-smith-jr-cut/story?id=12353814" target="_blank" rel="noopener">#CaptainAwesome</a></p>
