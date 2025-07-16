---
title: "Which tests are my regression tests?"
date: 2017-09-28T20:16:49Z
author: "Richard Hundhausen"
slug: "which-tests-are-my-regression-tests"
draft: false
tags: ["Azure DevOps", "Scrum", "TFS"]
---

---

Although we can't help you decide <em>which</em> tests should be part of your regression suite, we can help you easily identify them by using tags.

Over the years, we've seen teams using Team Foundation Server and Visual Studio Team Services to create a separate static test suite or even a test plan. Those approaches are way too much work. Let's look at a much easier approach.

First, we'll create a simple test plan for Sprint 2 ...
<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="CreateTestPlan.jpg" width="470" height="161"  alt="Create Test Plan" />

Next, we'll create a requirement-based suite for each PBI in our Sprint 2 backlog ...
<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="RequirementBasedSuite.jpg" width="329" height="143"  alt="Requirement Based Suite" />

BTW, to get the above list of requirements, just change the criteria to the following ...
<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="Sprint2PlanCriteria.jpg" width="707" height="163"  alt="Sprint2plan Criteria" />

Next, we'll create test cases for each PBI (preferably associated to automated tests) ...<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="TestCases.jpg" width="770" height="276"  alt="Test Cases" />
<span style="text-decoration: underline;">Tip</span>: A good rule of thumb is to create at least one test case per acceptance criterion, which is exactly what Anna Russo's auto-create test tool does. Now if only it were a VSTS extension, integrated into the Test hub!

Let's assume that Sprint 2 is winding down, and your tests show that you'll probably be done in time for tomorrow's Sprint Review ...<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="TestResults.jpg" width="555" height="488"  alt="Test Results" />

One of the last things in our team's definition of "done" is to identify those test cases which should be added to their regression suite. These are the test cases that the team decides should be run in future sprints to ensure that new work does not cause unintended effects in previously working software. Test cases that cover brittle areas, high technical debt areas, and areas of core/critical functionality are good candidates for regression testing.

Once we've logically identified those test cases, just edit each one (they are just work items) and add a <em>Regression</em> tag ...<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="RegressionTag.jpg" width="581" height="172"  alt="Regression Tag" />

Finally, just create a query-based suite showing all test cases with the <em>Regression</em> tag ...<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="TagQueryBased.jpg" width="708" height="191"  alt="Tag Query Based" />

Voilà, a suite that always shows an updated list of those test cases marked for regression. All we have to do is add or remove tags from those test cases that we want to add or remove from the regression suite ...
<img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" src="RegressionTests.jpg" width="870" height="418"  alt="Regression Tests" />
<span style="text-decoration: underline;">Tip</span>: You may want to adopt a test case naming convention that prefixes the test case name with the PBI name or abbreviation.

&nbsp;
