---
title: "Is your test project missing its \"test run configuration\"?"
date: 2005-05-16T21:02:46Z
authors: ["Richard Hundhausen"]
slug: "is-your-test-project-missing-its-test-run-configuration"
draft: false
tags: ["Visual Studio", "ALM"]
---

<p>This has happened to us a few times, so I'm sure we're not alone ...</p>
<p>You go to configure your Unit Test project for Code Coverage, but your test run configuration is missing. In other words, you&nbsp;click Test - Edit Test Run Configurations - and see&nbsp;"No Test Run Configurations Available".</p>
<p>Solution: Add a new item at the solution level (not to the test project!) and select a Test Run Configuration as the template</p>
<p>&nbsp;</p>