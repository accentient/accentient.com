---
title: "ATDD vs. TDD"
date: 2025-10-01T13:36:12Z
authors: ["Richard Hundhausen"]
slug: "atdd-vs-tdd"
draft: false
tags: ["Scrum", "Development", "Testing"]
---
<p>ATDD can sometimes be confused with TDD. It's akin to confusing ADHD with ADD, but I digress. The two practices share a family resemblance, and people who've only heard of one tend to assume it covers the other. It doesn't. They operate at different altitudes, and the best teams run both.</p>

<p><strong>Same instinct, different altitude</strong></p>

<p>Both are test-first. In both, you write a failing test before you write the thing that makes it pass. That shared instinct is why they get lumped together. But what each test is about could not be more different.</p>

<p>Test-driven development is from the Developer's perspective. TDD drives the design of the code. You write a failing unit test that specifies a small unit of desired functionality, add the minimum code required to make it pass, then refactor. The cycle repeats for the next unit. One of its tenets is that you don't write a single line of application code until you've written a test that fails in the absence of that code. The payoff is clearer requirements, more testable designs, and a safety net of fast unit tests that lets Developers refactor and take risks with confidence.</p>

<p>Acceptance test-driven development is from a stakeholder's or user's perspective. ATDD drives the team's agreement on what the PBI actually needs to do. The Developers discuss the acceptance criteria collaboratively, compose failing acceptance tests, and use those tests as a guide while developing the PBI. The whole point is a shared understanding of what they're building and what Done looks like.</p>

<p><strong>The line that makes it stick</strong></p>

<p>Here's the way I keep them sorted in my head. Unit tests, the TDD kind, ensure that the Developers build the thing right. Acceptance tests, the ATDD kind, ensure that the Developers build the right thing.</p>

<p>That's why they complement rather than compete. ATDD aligns the team on the acceptance of a PBI before coding starts. Inside that outer loop, TDD is the most popular inner-loop practice for driving the design of the code that makes those acceptance tests pass. One sets the destination. The other navigates the streets.</p>

<p>You don't choose between them. On a healthy <a href="https://scrumguides.org/" target="_blank" rel="noopener">Scrum</a> Team, ATDD frames the work and TDD shapes the code inside it. Build the right thing, and build it right.</p>
