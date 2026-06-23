---
title: "TFS2010 Build output to a Custom Folder Structure"
date: 2012-02-29T10:38:03Z
authors: ["Simon Reindl"]
slug: "tfs2010-build-output-to-a-custom-folder-structure"
draft: false
tags: ["TFS", "Visual Studio", "ALM"]
---

---

<h1>How to output TFS2010 build output to a subfolder</h1>
The scenario that exists is that I need to build a more detailed tree structure in the build output. I was looking for the least intrusive means of being able to get the build to output to subfolders.

So, I took a branch of the default build template (so I didn’t mess with the rest of the team while I experimented) and started to edit.

&nbsp;

Drilling through the workflow until you were at the <b>Compile the Project</b> sequence (Overall Build Process; Run On Agent; Try Compile, Test, and Associate Changesets and Work Items; &lt;expand&gt;; Try Compile and Test; Compile and Test; For Each Configuration in BuildSettings.PlatformConfigurations; Compile and Test for Configuration; If BuildSettings.HasProjectsToBuild; For Each Project in BuildSettings.ProjectsToBuild; Try to Compile the Project; and finally Compile the project)

&nbsp;

I added a new string variable called <strong>outputDirForProj</strong> scoped for that sequence.

Add in an assign activity setting the <strong>outputDirForProj </strong>to:
<pre class="csharpcode"> System.IO.Path.Combine(outputDirectory, System.IO.Path.GetFileNameWithoutExtension(localProject))</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>

<strong>Note 1:</strong>

I wanted the output to go toProjectFolderOutput

If you want SolutionFolderProjectFolderOutput
<pre class="csharpcode">System.IO.Path.Combine(outputDirectory, System.IO.Directory.GetParent(System.IO.Directory.GetParent(localProject).ToString()).Name, System.IO.Path.GetFileNameWithoutExtension(localProject))</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>

Of course you could put in a build attribute, and manipulate this whichever way you want to.

<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>

The trick is 1) You are in VB and 2) getting the folder name
<div id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:e8d4ea3d-2ad4-4a0d-9700-af33ab7e4339" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">Technorati Tags: <a href="http://technorati.com/tags/TFS2010" rel="tag">TFS2010</a>,<a href="http://technorati.com/tags/Build" rel="tag">Build</a>,<a href="http://technorati.com/tags/SubFolders" rel="tag">SubFolders</a>,<a href="http://technorati.com/tags/Customization" rel="tag">Customization</a></div>
<strong>Note 2:</strong>

Your code (or test) project MUST have a name attribute for this to work. (I’ll put that in another post)

&nbsp;

And after that add a build message (set to high so that I always see it – out of personal preference) with the text
<pre class="csharpcode">String.Format(<span class="str">"Copying build output to {0} "</span>, outputDirForProj)</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>

It ends up looking like:

&nbsp;

<a href="clip_image002_2.jpg"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="clip_image002" src="clip_image002_thumb.jpg" alt="clip_image002" width="461" height="638" border="0" /></a>

&nbsp;

Then set the MSBuild task properties to use the added directory

&nbsp;

&nbsp;

Check in and the build is ready, then you need to edit the build definition to use target projects, not solutions,

In the build definition, select the individual projects instead of the solutions.

<a href="SNAGHTML56ad7e3.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="SNAGHTML56ad7e3" src="SNAGHTML56ad7e3_thumb.png" alt="SNAGHTML56ad7e3" width="420" height="337" border="0" /></a>

<a href="SNAGHTML56ce329.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="SNAGHTML56ce329" src="SNAGHTML56ce329_thumb.png" alt="SNAGHTML56ce329" width="391" height="310" border="0" /></a>

and the resulting output will use the project structure.

<a href="image_2.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="image_thumb.png" alt="image" width="294" height="284" border="0" /></a>
