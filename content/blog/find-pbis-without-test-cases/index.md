---
title: "Find PBIs Without Test Cases"
date: 2019-10-08T16:33:37Z
author: "Richard Hundhausen"
slug: "find-pbis-without-test-cases"
draft: false
tags: ["Azure Boards", "Azure Test Plans"]
---

---


<p>I'm feeling encouraged. It seems that more and more teams, whether they are using automated or manual tests, are using Azure Test Plans to create and track their acceptance testing efforts. I was teaching a pre-conference workshop at STARWEST last week, and a student asked how to find all the Product Backlog Items (PBIs) in the current Sprint that *didn't* have any associated Test Cases. If a team is using Bug work items, they could be included as well.</p>



<p>I decided to go old school with a solution. I created a work items and direct links query, returning all RequirementCategory (PBI) work items found in the current Sprint, that do not have a matching <em>Tested By</em> link.</p>



<img src="PBIsWithoutTestCases-1024x563.jpg" style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" alt="PB Is Without Test Cases-1024x563" />



<p></p>



<p></p>

