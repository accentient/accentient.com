---
title: "Excluding folders and files when adding to source control"
date: 2011-04-14T12:20:16Z
author: "Richard Hundhausen"
slug: "excluding-folders-and-files-when-adding-to-source-control"
draft: false
tags: ["TFS", "Visual Studio"]
---

---

<strong><span style="color: #ff0000;">Nov 2016 Update</span></strong>: I've had a few people reach out to me over the years and ask about how to do this in 2013, 2015, etc. The answer is to use a .tfignore file as outlined <a href="https://www.visualstudio.com/en-us/docs/tfvc/add-files-server" target="_blank" rel="noopener">here</a>.

In Team Foundation Server when you are adding items to source control, Microsoft automatically excludes certain folders and files:

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/b94e8441753b_A95E/image_3.png" alt="image" width="552" height="94" border="0" />

This is helpful when adding a folder (especially with subfolders) of files, specifically Visual Studio projects. The thinking is that you typically don’t want to add files in Debug, Release, or ClientBin folders as well as certain binary files (.pdb, .obj, .dll, .exe, etc.). You can always recreate them later as needed.

There are times, however, that a team may want to add .dll files (for example) to source control. For those situations, a user can either clear the *.dll out of the list before adding, or click the <em>Include Items</em> button on the next screen:

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/b94e8441753b_A95E/image_6.png" alt="image" width="546" height="151" border="0" />

But what if a user wants to change the default list of excluded folders and files? Easy, just change the ExcludeMasks value in the registry. Visual Studio 2010 Team Explorer looks at these two keys in this order:
<ol>
	<li><span style="font-family: 'Courier New';">HKEY_CURRENT_USERSOFTWAREMicrosoftVisualStudio10.0TeamFoundationSourceControlAddOptionsExcludeMasks</span></li>
	<li><span style="font-family: 'Courier New';">HKEY_LOCAL_MACHINESOFTWAREMicrosoftVisualStudio10.0TeamFoundationSourceControlAddOptionsExcludeMasks</span></li>
</ol>
All you have to do is make the change:

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/b94e8441753b_A95E/image_11.png" alt="image" width="388" height="166" border="0" />

Exit and re-run Visual Studio and see that the defaults are different now (no *.dll anymore):

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/b94e8441753b_A95E/image_12.png" alt="image" width="550" height="47" border="0" />
