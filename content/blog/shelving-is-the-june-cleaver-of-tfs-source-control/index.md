---
title: "Shelving is the June Cleaver of TFS Source Control"
date: 2008-09-16T16:05:32Z
authors: ["Richard Hundhausen"]
slug: "shelving-is-the-june-cleaver-of-tfs-source-control"
draft: false
tags: ["TFS", "Visual Studio", "ALM"]
---

<div class="zemanta-img"><img src="http://upload.wikimedia.org/wikipedia/en/thumb/b/bb/B_barb02.JPG/202px-B_barb02.JPG" alt="June Cleaver" align="right" /></div>

Ever notice that no matter what shenanigans Beaver would get into, June always believed everything was fine? No matter how many scotches Ward had after dinner, there was no problem, according to June. June Cleaver is the classic enabler with a bad case of denial.



So is the TFS Source Control Shelving feature.



Don’t get me wrong. Sometimes everything really is okay. Sometimes I just want to push my code into a shelf set because I have to go to my kid’s play in 5 minutes and I just want to make sure I am backed up in case the building burns down in the next 2 hours. Sometimes.



More often, Ward is shelving his code because he hasn’t checked in for 3 days and can’t be bothered to do the necessary merges before he heads home to that scotch bottle.



I would go so far as this: <em>Frequent shelving is a smell.</em>



Reasons you don’t need shelving include:

<ol>

 	<li>Team members are checking in frequently as they make changes to code, passing tests and keeping code coverage high. Frequently means every few passing unit tests or so.</li>

 	<li>Team members are in the habit, nay, are required to check in the day’s work and get a clean build before they go home for the day.</li>

 	<li>When a team member is looking for a code review, that person has direct (as in "within voice range") access to other team members who can perform said review. Even better, they are pairing.Note for distributed teams: <a href="http://connect.microsoft.com/site/sitehome.aspx?SiteID=94">Microsoft’s SharedView</a> works great for remote pairing.</li>

</ol>

I find it best to think of the Shelving feature as <a href="http://skydrive.live.com/">SkyDrive</a> for source code. It isn’t sufficient as a source control strategy, but can be pretty handy on occasion.



One more way that Shelving is like June Cleaver? Pretty. Not smart.