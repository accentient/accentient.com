---
title: "Acceptance Is Not Acceptance Testing"
date: 2025-06-16T12:09:13Z
authors: ["Richard Hundhausen"]
slug: "acceptance-is-not-acceptance-testing"
draft: false
tags: ["Scrum", "Azure Test Plans", "Testing"]
---
<p>As I visit with software development teams, I keep running into the same confusion about the word "acceptance." Two ideas get jammed together that really shouldn't be. Let me pull them apart, because the distinction matters more than it sounds.</p>

<p>Acceptance criteria are the Product Owner's or stakeholders' definition of success for a given PBI. They define Done. Acceptance testing is the activity of verifying that those criteria are satisfied. One is the standard. The other is the act of checking against it. Conflating the two leads to sloppy thinking and, worse, sloppy claims about what's actually finished.</p>

<p><strong>The misconceptions I hear most</strong></p>

<p>The first is that acceptance is performed by the users, often called user acceptance testing. In Scrum, this is never true. Only the Developers do the work, and that means all the work, including testing. If stakeholders want to give feedback, the Sprint Review is the place for it. They don't get access to the red button that declares a PBI not Done.</p>

<p>The second misconception is the dangerous one: that having passing acceptance tests is equivalent to the PBI being Done. It isn't. Passing acceptance tests only prove that the acceptance criteria have been satisfied. They do not prove that every aspect of the <a href="https://scrumguides.org/" target="_blank" rel="noopener">Definition of Done</a> has been met. You might still owe documentation, a release note, or other quality work before that PBI is truly Done.</p>

<p><strong>When acceptance is its own activity</strong></p>

<p>Here's where it gets sharper. If your Definition of Done includes the Product Owner "accepting," "liking," or "loving" the work, then acceptance testing and Product Owner acceptance become two distinct activities. Any Developer can run and pass an acceptance test. Only the Product Owner can accept the PBI. Those are not the same event, and pretending they are will eventually burn you.</p>

<p>This kind of subjective acceptance is hard to capture in an executable specification and impossible to automate. It will always be a carbon-based test, meaning the Product Owner has to put their own eyes and fingers on the work. So don't wait for the Sprint Review to discover whether they like it. It's a smell when a Product Owner is inspecting PBIs for the first time at the Review. Get that feedback earlier, while there's still time to act on it.</p>

<p>So sharpen your language. Criteria define Done. Testing verifies the criteria. Acceptance, when your Definition of Done calls for it, is the Product Owner's separate nod. Three distinct things.</p>

<p>Stop saying "acceptance" when you mean "acceptance testing." The teams that keep them straight ship with fewer surprises.</p>
