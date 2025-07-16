---
title: "Create a Professional Scrum process"
date: 2017-03-15T21:22:36Z
author: "Richard Hundhausen"
slug: "creating-a-professional-scrum-process-in-vsts"
draft: false
tags: ["Azure DevOps", "Scrum"]
---

---

Visual Studio Team Services' customization capabilities are to a point now where I can write this blog post ... as a rebuttal to any <a href="https://accentient.com/blog/microsoft-please-give-us-a-scrum-process-template/" target="_blank" rel="noopener noreferrer">earlier post</a> of my own. As you may know, the <a href="http://www.scrumguides.org/" target="_blank" rel="noopener noreferrer">Scrum Guide</a> has been <a href="http://www.scrumguides.org/revisions.html" target="_blank" rel="noopener noreferrer">updated</a> more frequently than Microsoft's <a href="https://www.visualstudio.com/en-us/docs/work/guidance/scrum-process" target="_blank" rel="noopener noreferrer">Scrum process</a> (template) which, when launched, was meant to be an exact implementation. It falls upon the community (me and you) to update the Scrum process ourselves. Maybe that was Microsoft's plan all along. :-)

Following the guidance <a href="https://www.visualstudio.com/en-us/docs/work/process/customize-process" target="_blank" rel="noopener noreferrer">here</a>, I've documented my journey to create a <em>Professional Scrum</em> process.

First, I created an inherited process based on the <em>Scrum</em> template ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess1.jpg" alt="ProScrumProcess1" width="717" height="348" />

I named this inherited process "Professional Scrum" ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess2.jpg" alt="ProScrumProcess2" width="561" height="344" />

After setting <em>Professional Scrum</em> as the default process, I began customizing it. I started by disabling the <strong>Bug</strong> work item type, because the <strong>Product Backlog Item</strong> WIT works just fine) ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess3.jpg" alt="ProScrumProcess3" width="720" height="197" />

I customized the <strong>Product Backlog Item</strong> layout by hiding the <em>Priority</em> and V<em>alue Type</em> fields ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess4.jpg" alt="ProScrumProcess4" width="898" height="353" />

<span style="text-decoration: underline;">Note</span>: Ideally, I would have liked to remove these fields altogether, but that isn’t allowed today.

Next, I added two new states: <em>Ready</em> (which maps to the <em>Proposed</em> category) and <em>Forecasted</em> (which maps to the <em>In Progress</em> category) ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ReadyState.jpg" alt="ReadyState" width="954" height="535" />

I disabled the <em>Approved</em> and <em>Committed</em> states, replacing them with <em>Ready</em> and <a href="https://www.scrum.org/resources/commitment-vs-forecast-subtle-important-change-scrum" target="_blank" rel="noopener noreferrer"><em>Forecasted</em></a> respectively ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="States.jpg" alt="States" width="211" height="350" />

<span style="text-decoration: underline;">Note</span>: I could have created a similar state workflow for <strong>Epic</strong> and <strong>Feature</strong>, but didn't. You could.

I made similar changes to the <strong>Epic</strong> and <strong>Feature</strong> work item type, hiding <em>Target Date</em>, <em>Priority</em>, <em>Time Criticality</em>, and <em>Value Area</em> fields ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess7.jpg" alt="ProScrumProcess7" width="180" height="430" />

I also hid the <em>Priority</em> and <em>Activity</em> fields from the <strong>Task</strong> WIT and <em>Priority</em> from the <strong>Impediment</strong> WIT. I then went to Backlog Levels and <a href="https://www.visualstudio.com/en-us/articles/news/2017/mar-08-team-services" target="_blank" rel="noopener noreferrer">renamed</a> the <em>Backlog items</em> level to <em>Stories</em> ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess8.jpg" alt="ProScrumProcess8" width="741" height="493" />

<span style="text-decoration: underline;">Note</span>: Although epics, features, and stories are <em>all</em> considered PBIs in Scrum, most teams I coach prefer to call the lowest level ("sprintable") backlog items as  stories. Ideally, all backlog levels would just use the Product Backlog Item WIT and then we could ditch or ignore <em>Epic</em> and <em>Feature</em> WITs altogether.

I then created a new team project based on the <em>Professional Scrum</em> template and beheld the awesomeness, such as "Stories" instead of "Backlog Items" and the Bug WIT being unavailable ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess9.jpg" alt="ProScrumProcess9" width="701" height="244" />

"Forecasted" instead of "Committed" and a minimal Details section ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess10.jpg" alt="ProScrumProcess10" width="833" height="410" />

So, let's revisit my checklist from my <a href="https://accentient.com/blog/microsoft-please-give-us-a-scrum-process-template/" target="_blank" rel="noopener noreferrer">earlier post</a> and see what's possible now ...

<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="ProScrumProcess11.jpg" alt="ProScrumProcess11" width="843" height="379" />

 Scrum on!

&nbsp;
