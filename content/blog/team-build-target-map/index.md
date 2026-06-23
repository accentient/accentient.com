---
title: "Team Build Target Map"
date: 2008-11-25T00:57:40Z
authors: ["Martin Danner"]
slug: "team-build-target-map"
draft: false
tags: ["TFS", "Visual Studio", "ALM"]
---

<a href="Team_Build_Target_Map1.docx">Team_Build_Target_Map1.docx (22.73 KB)</a>



I had the good fortune of reviewing the upcoming book titled Inside the <a href="http://www.microsoft.com/MSPress/books/12999.aspx" target="_blank" rel="noopener noreferrer">Microsoft® Build Engine: Using MSBuild and Team Foundation Build</a>. This book is an absolute must for anyone who is creating and customizing build definitions in Team Foundation Build. As part of my review process I created a map that lists the order of target invocation. I found this map very handy, so I’m posting it because I figure others will find it handy too. The map is listed below, and also contained in the attached word document. If you make any corrections or improvements to the map, please share back!



By the way, <a href="http://www.attrice.info/msbuild/index.htm" target="_blank" rel="noopener noreferrer"><span style="color: #669966;">MSBuild Sidekick</span></a> turned out to be very useful in building this map. The Team Foundation Build targets file is large and complex. MSBuild Sidekick's tree-view makes it much easier to navigate this beast, and the search features made it easy to traverse the target dependencies. This is a very handy tool for editing (or studying) build scripts.



<style id=dynCom type=text/css>.msocomanchor {<br />

	background: infobackground<br />

}<br />

.msocomoff {<br />

	display: none<br />

}<br />

.msocomtxt {<br />

	visibility: hidden<br />

}<br />

.msocomtxt {<br />

	position: absolute<br />

}<br />

.msocomtxt {</p>

<p>}<br />

.msocomtxt {</p>

<p>}<br />

.msocomtxt {<br />

	width: 33%<br />

}<br />

.msocomtxt {<br />

	background: infobackground<br />

}<br />

.msocomtxt {<br />

	color: infotext<br />

}<br />

.msocomtxt {<br />

	border-top: threedlightshadow 1pt solid<br />

}<br />

.msocomtxt {<br />

	border-right: buttonshadow 2pt solid<br />

}<br />

.msocomtxt {<br />

	border-bottom: buttonshadow 2pt solid<br />

}<br />

.msocomtxt {<br />

	border-left: threedlightshadow 1pt solid<br />

}<br />

.msocomtxt {<br />

	padding-right: 3pt; padding-left: 3pt; padding-bottom: 3pt; padding-top: 3pt<br />

}<br />

.msocomtxt {<br />

	z-index: 100<br />

}<br />

</style>

<p class="MsoNormal">This map shows the order of target execution in the Team Build targets file,<span style="mso-spacerun: yes;">  </span>%ProgramFiles%MSBuildMicrosoftVisualStudioTeamBuildMicrosoft.TeamFoundation.Build.targets. The target names in the map are color coded as follows:</p>

<p class="MsoNormal" style="margin-left: 0.5in;"><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">Green: this is an extensibility target that can be customized in your TFSBuild.proj file</span><span style="color: #92d050;">

</span><span style="color: #0070c0;">Blue: This is run as a separate MSBuild process to support parallel processing<!--?xml:namespace prefix = o ?--></span></b></p>



<h2 class="Section1">EndToEndIteration</h2>

<p class="MsoNormal">When a Team Build agent starts a new build, the build starts by invoking the <b style="mso-bidi-font-weight: normal;">EndToEndIteration</b> target. This target then invokes the following chain of targets.</p>



<blockquote class="Section1" dir="ltr" style="margin-right: 0px;">

<p class="MsoListParagraphCxSpFirst" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CheckSettingsForEndToEndIteration</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>InitializeBuildProperties</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman'2013-08-28 13:38:28';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeEndToEndIteration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BuildNumberOverrideTarget</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>InitializeEndToEndIteration</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>InitializeWorkspace</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeInitializeWorkspace</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CoreInitializeWorkspace</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterInitializeWorkspace</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>TeamBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CleanAll <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(CleanCompilationOutputOnly != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>InitializeBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>PreBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>Get</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeGet</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CoreGet <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipGet != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterGet</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>Label</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeLabel</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CoreLabel <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipLabel != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterLabel</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CleanCompilationOutput <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(CleanCompilationOutputOnly == true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeClean</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CallClean </span></b><span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipClean != true)</span><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CoreCleanCompilationOutput</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>ComputeConfigurationList</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CleanConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b><span style="color: #00b050;">BeforeCleanConfiguration</span></b><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-bidi-font-weight: bold;">CoreCleanConfiguration</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-bidi-font-weight: bold;">ComputeSolutionList</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b><span style="color: #0070c0;">CleanSolution</span></b><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b><span style="color: #00b050;">AfterCleanConfiguration</span></b><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="mso-spacerun: yes;"> </span><span style="color: #00b050;">AfterClean</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>Compile</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>CallCompile</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CoreCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CompileConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCompileConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span>CoreCompileConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>ComputeSolutionList</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CompileSolution</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 4in; text-indent: -0.25in; mso-list: l1 level8 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="color: #00b050;">BeforeCompileSolution</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 4in; text-indent: -0.25in; mso-list: l1 level8 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span>CoreCompileSolution</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 4in; text-indent: -0.25in; mso-list: l1 level8 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompileSolution</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompileConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>PostBuild <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipPostBuild != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>GetChangesetsAndUpdateWorkItems</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeGetChangesetsAndUpdateWorkItems</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span>CoreGetChangesetsAndUpdateWorkItems <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipGetChangesetsAndUpdateWorkItems != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterGetChangesetsAndUpdateWorkItems</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>Test</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span>CoreTest</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">RunTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>TestConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeTestConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span>CoreTestConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>ResolveTestFilesForEndToEndIteration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterTestConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">GenerateDocumentation</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">PackageBinaries</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>DropBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeDropBuild</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span>CoreDropBuild <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipDropBuild != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterDropBuild</span></b></p>

<p class="MsoListParagraphCxSpLast" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterEndToEndIteration</span></b></p>

</blockquote>

<h2 class="Section1">DesktopBuild</h2>

<p class="MsoNormal">This is the target execution sequence when you perform a Desktop Build. For more information on configuring and using a Destop Build, see this <a href="http://msdn.microsoft.com/en-us/library/ms181292.aspx" target="_blank" rel="noopener noreferrer"><span style="font-size: 10.5pt; line-height: 115%; font-family: 'Trebuchet MS','sans-serif';">MSDN article</span></a>.</p>



<blockquote class="Section1" dir="ltr" style="margin-right: 0px;">

<p class="MsoListParagraphCxSpFirst" style="text-indent: -0.25in; mso-list: l3 level1 lfo2;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>Compile</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l3 level2 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l3 level2 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CallCompile</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l3 level3 lfo2; mso-add-space: auto;"><span style="color: #0070c0; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CoreCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l3 level4 lfo2; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CompileConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l3 level5 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCompileConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l3 level5 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span>CoreCompileConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l3 level6 lfo2; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>ComputeSolutionList</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l3 level6 lfo2; mso-add-space: auto;"><span style="color: #0070c0; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">CompileSolution</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l3 level7 lfo2; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCompileSolution</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l3 level7 lfo2; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span>CoreCompileSolution</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l3 level7 lfo2; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompileSolution</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l3 level5 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompileConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l3 level2 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCompile</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l3 level1 lfo2;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span>Test</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span>CoreTest</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #0070c0;">RunTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>TestConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeTestConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span>CoreTestConfiguration</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterTestConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l3 level2 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterTest</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l3 level1 lfo2;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">GenerateDocumentation</span></b></p>

<p class="MsoListParagraphCxSpLast" style="text-indent: -0.25in; mso-list: l3 level1 lfo2;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">PackageBinaries</span></b></p>

</blockquote>

<h2 class="Section1"><span style="mso-fareast-font-family: 'Times New Roman';">DesktopRebuild</span></h2>

<p class="MsoNormal">Start a build using DesktopRebuild as the initial target to perform a clean, full compilation and run tests.  For more information on how to build team projects on the desktop, see this <a href="http://msdn.microsoft.com/en-us/library/ms181723.aspx">MSDN article</a>.</p>



<blockquote class="Section1" dir="ltr" style="margin-right: 0px;">

<p class="MsoListParagraphCxSpFirst" style="text-indent: -0.25in; mso-list: l4 level1 lfo5;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>Clean</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l4 level2 lfo5; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b><span style="color: #00b050;">BeforeClean</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l4 level2 lfo5; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CoreClean</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CoreCleanAll <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(CleanCompilationOutput != true AND SkipClean != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2in; text-indent: -0.25in; mso-list: l1 level4 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>CallClean <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(CleanCompilationOutput == true AND SkipClean != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 2.5in; text-indent: -0.25in; mso-list: l1 level5 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b><span style="color: #0070c0;">CoreCleanCompilationOutput</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>ComputeConfigurationList</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3in; text-indent: -0.25in; mso-list: l1 level6 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b><span style="color: #0070c0;">CleanConfiguration</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b><span style="color: #00b050;">BeforeCleanConfiguration</span></b><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-bidi-font-weight: bold;">CoreCleanConfiguration</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 4in; text-indent: -0.25in; mso-list: l1 level8 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><span style="mso-bidi-font-weight: bold;">ComputeSolutionList</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 4in; text-indent: -0.25in; mso-list: l1 level8 lfo1; mso-add-space: auto;"><span style="color: #0070c0; font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b><span style="color: #0070c0;">CleanSolution</span></b><b style="mso-bidi-font-weight: normal;"></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 3.5in; text-indent: -0.25in; mso-list: l1 level7 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="color: #00b050; mso-bidi-font-weight: bold;">AfterCleanConfiguration</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l3 level2 lfo2; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span><b><span style="color: #00b050;">AfterClean</span></b></p>

<p class="MsoListParagraphCxSpLast" style="text-indent: -0.25in; mso-list: l4 level1 lfo5;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>DesktopRebuild (see previous section for details)</p>

</blockquote>

<h2 class="Section1">OnBuildBreak</h2>

<p class="MsoNormal">If an error occurs during the compile phase, normal processing is suspended and the <b style="mso-bidi-font-weight: normal;">OnBuildBreak</b> target is invoked. This target then invokes the following sequence of targets:</p>



<blockquote class="Section1" dir="ltr" style="margin-right: 0px;">

<p class="MsoListParagraphCxSpFirst" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeOnBuildBreak</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><span style="mso-spacerun: yes;"> </span>CoreOnBuildBreak</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>GetChangesetsOnBuildBreak</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeGetChangesetsOnBuildBreak</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span>CoreGetChangesetsOnBuildBreak <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipGetChangesetsAndUpdateWorkItems != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterGetChangesetsOnBuildBreak</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>DropBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeDropBuild</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span>CoreDropBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><span style="mso-spacerun: yes;"> </span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterDropBuild</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1in; text-indent: -0.25in; mso-list: l1 level2 lfo1; mso-add-space: auto;"><span style="font-family: 'Courier New'; mso-fareast-font-family: 'Courier New';"><span style="mso-list: Ignore;">o<span style="font: 7pt 'Times New Roman';">   </span></span></span>CreateWorkItem</p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">BeforeCreateWorkItem</span></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span>CoreCreateWorkItem <span style="font-size: 9pt; line-height: 115%; mso-bidi-font-size: 11.0pt;">(SkipWorkItemCreation != true)</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 1.5in; text-indent: -0.25in; mso-list: l1 level3 lfo1; mso-add-space: auto;"><span style="color: #00b050; font-family: Wingdings; mso-fareast-font-family: Wingdings; mso-bidi-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7pt 'Times New Roman';">  </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterCreateWorkItem</span></b></p>

<p class="MsoListParagraphCxSpLast" style="text-indent: -0.25in; mso-list: l1 level1 lfo1;"><span style="color: #00b050; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span><b style="mso-bidi-font-weight: normal;"><span style="color: #00b050;">AfterOnBuildBreak</span></b></p>

</blockquote>

<h1 class="Section1"><span style="font-size: x-large;">Skip Properties</span></h1>

<p class="MsoNormal">These properties are used to suppress the execution of certain targets in the build sequence.  A complete list of customizable Team Foundation Build properties can be found in this <a href="http://msdn.microsoft.com/en-us/library/aa337598.aspx" target="_blank" rel="noopener noreferrer"><span style="color: #000099;">MSDN article</span></a>.</p>



<blockquote class="Section1" dir="ltr" style="margin-right: 0px;">

<p class="MsoListParagraphCxSpFirst" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipClean</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipDropBuild</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipGet</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipGetChangesetsAndUpdateWorkItems</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipInitializeWorkspace</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipInvalidConfigurations</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipLabel</p>

<p class="MsoListParagraphCxSpMiddle" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipPostBuild</p>

<p class="MsoListParagraphCxSpLast" style="text-indent: -0.25in; mso-list: l0 level1 lfo3;"><span style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7pt 'Times New Roman';">         </span></span></span>SkipWorkItemCreation</p>

</blockquote>