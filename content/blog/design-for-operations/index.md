---
title: "Design for Operations"
date: 2008-03-17T22:38:13Z
authors: ["Martin Danner"]
slug: "design-for-operations"
draft: false
tags: ["Development", "Visual Studio", "ALM", "Testing"]
---

Have you ever had a production application in the data center act up, and you spend countless hours hunting down the source of the problem? If so, then then you might be interested in a new project on CodePlex called <a href="http://www.codeplex.com/dfo" target="_blank" rel="noopener noreferrer">Design for Operations</a> (DFO).



For years now engineers have been designing physical products with ease of manufacturing in mind. Called <a href="http://en.wikipedia.org/wiki/Design_for_manufacturability" target="_blank" rel="noopener noreferrer">Design for Manufacturability</a> (DFM), this technique takes fabrication and assembly into consideration early in the design process. DFM has a significant impact by improving the cost and quality of a product. Well, a variant of the technique has finally found its way to the world of software. Called <a href="http://www.codeplex.com/dfo" target="_blank" rel="noopener noreferrer">Design for Operations</a>, this technique allows software architects and developers to design their applications with built-in, real-time health monitoring, giving the operations staff much better operational information and improving the quality of service. According to William Loeffler, a Microsoft program manager:

<blockquote><em>It’s a recent effort from patterns &amp; practices to provide tooling for architects and developers with a means to model their application in terms meaningful to operations. Once modeled the tool can be used to create a Health Model for the application and once the Health Model has been completed at the architect and development roles the tool can be used to generate platform instrumentation as defined in the model. All that’s necessary for the developer is to call the generated API within their solution for each instance of instrumentation. The tool will also generate a Management Pack for System Center OpsMgr 2008 from the model that matches the generated instrumentation.</em></blockquote>

For more information see:



<a title="http://www.codeplex.com/dfo" href="http://www.codeplex.com/dfo" target="_blank" rel="noopener noreferrer">http://www.codeplex.com/dfo</a>



Hopefully DFO will become mainstream in the software development discipline, in the same way that unit testing has become popular.