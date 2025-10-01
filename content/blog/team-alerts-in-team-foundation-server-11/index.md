---
title: "Team Alerts in Team Foundation Server 11"
date: 2012-02-10T11:01:16Z
author: "Richard Hundhausen"
slug: "team-alerts-in-team-foundation-server-11"
draft: false
tags: ["Azure DevOps", "TFS"]
---

---

<p>Team Alerts are just one of the many new features coming in the next version of Team Foundation Server. They simplify the creation and management of alerts that impact that entire team.</p> <p>For example, take the situation where you want the team member who requested a build to be notified if that build failed – and nobody else. In Team Foundation Server 2010, this was only possible by having each team member create the appropriate build alert with criteria filtering out on those events where they requested the build, or by creating a custom web service that did the filtration work.</p> <p>In Team Foundation Server 11’s web UI (see below) you can create a Team Alert with the criteria <em>RequestedFor = </em>. This alert will send an email to <em>only </em>the person who requested the build. In fact, the <em>Me</em> macro will be available for all types of alerts. For example, you could create a single "Work Item Assigned to Me" subscription for the entire Team and this would cause each team member to only get the alerts when a work item is assigned to him/her. #Simplicity</p> <p><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="AlertsForMe" border="0" alt="AlertsForMe" src="https://accentient.com/blog/content/binary/Team-Foundation-Server-11-makes-it-easie_981C/AlertsForMe_3.jpg" width="707" height="422"></p>
