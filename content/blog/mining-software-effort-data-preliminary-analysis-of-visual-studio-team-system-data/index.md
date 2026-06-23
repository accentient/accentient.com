---
title: "Mining Software Effort Data: Preliminary Analysis of Visual Studio Team System Data"
date: 2009-05-19T21:50:58Z
authors: ["Richard Hundhausen"]
slug: "mining-software-effort-data-preliminary-analysis-of-visual-studio-team-system-data"
draft: false
tags: ["TFS", "Development", "Visual Studio", "ALM"]
---

Ok, I’m on a <a href="http://research.microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft Research</a> kick today. I admit it. Some of you know what I’m talking about – you find one cool project and that leads to another one, and another one and before you know it you’re finding and reading a paper titled "<a href="http://research.microsoft.com/en-us/um/people/abegel/papers/effort-estimation.pdf" target="_blank" rel="noopener noreferrer">Mining Software Effort Data: Preliminary Analysis of Visual Studio Team System Data</a>".



It seems that some really smart people on the VSTS product team got together to analyze actual VSTS data and prove that (in software development) smaller features can be estimated more accurately than larger ones. In other words, there is a positive correlation between actual estimation error with feature size.



Hmm. Now I could insert a wise crack here, but I won’t. Think about it. This is empirical evidence based on actual data. This rocks! I see this as the beginning of many successful data mining adventures of the TFS warehouse.



Basically the research focused on the actual development of VSTS 2008 and the product group’s predicted effort estimates for 55 specific features. They then updated the actual and remaining effort tallies throughout the development process and then collected the data directly from TFS, performing statistical analyses to identify estimation error and relationships between error and effort metrics.