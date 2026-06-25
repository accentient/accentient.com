---
title: "Write Acceptance Criteria You Can Actually Test"
date: 2025-04-28T16:26:14Z
authors: ["Richard Hundhausen"]
slug: "write-testable-acceptance-criteria"
draft: false
tags: ["Scrum", "Azure Test Plans", "Testing"]
---
<p>Acceptance criteria are the Product Owner's or stakeholders' definition of success for a given PBI. Most teams write them as prose, a few sentences describing what the feature should do, and then move on. That prose reads fine in a refinement session. It falls apart the moment you try to test it.</p>

<p>Here's the shift that changes everything: write your acceptance criteria knowing you'll generate Test Case work items from them. Once you internalize that, you stop writing paragraphs and start writing something a Developer, and a tool, can act on.</p>

<p><strong>The evolution</strong></p>

<p>Teams that commit to this tend to progress through three stages. They start by crafting wordy paragraphs. Then they move to simple bullets, one clear statement per line. Finally they arrive at given-when-then expressions with sample data. Each stage is more testable than the last.</p>

<p>Why does the format matter so much? Because the practical payoff is direct. When a PBI's criteria are enumerated as a clean list, you can paste them straight into the test case grid and get one Test Case work item per criterion. A rambling paragraph pastes as a single test case, which is almost never what you want. The format of your criteria literally determines whether the tooling helps you or fights you.</p>

<figure class="wp-block-image size-large has-custom-border"><img src="test-case-work-item.png" alt="A Test Case work item in Azure DevOps showing how an acceptance criterion becomes a testable item" style="border-width:1px"/></figure>

<p>A Test Case is just another work item type, and the criterion you wrote becomes its title and intent. If you can't turn a criterion into a clear test title that begins with "Verify," that's a signal the criterion is too vague to build against.</p>

<p><strong>Make it a Retrospective topic</strong></p>

<p>How a Scrum Team captures PBI details, including acceptance criteria, is perfect for discussion at a Sprint Retrospective. New approaches and experiments can be considered and planned there. Maybe you try given-when-then for one PBI next Sprint. Maybe you agree on sample data as a standard. The <a href="https://scrumguides.org/" target="_blank" rel="noopener">Retrospective</a> exists precisely so you can ratchet up practices like this one.</p>

<p>The best part is that better acceptance criteria don't just help your tests. They sharpen the shared understanding of what Done looks like before anyone writes a line of code. That's the real win.</p>

<p>Write criteria you can verify, not just criteria you can read. Your future self, mid-Sprint, will thank you.</p>
