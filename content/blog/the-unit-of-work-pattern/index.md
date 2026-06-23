---
title: "The \"Unit of Work\" Pattern"
date: 2004-06-15T08:53:47Z
authors: ["Richard Hundhausen"]
slug: "the-unit-of-work-pattern"
draft: false
tags: ["Life"]
---

<p>Had a student ask me about this one today, so I investigated further. It seems that this is the design pattern which keeps a list of objects (or records) affected by a business transaction and coordinates the writing of the changes and the reporting of concurrency problems.</p>
<p>Sounds like a DataSet to me. Here's Fowler's <a href="http://www.martinfowler.com/eaaCatalog/unitOfWork.html" target="none" rel="noopener">article</a>.</p>