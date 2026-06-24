---
title: "Database concordance generator - CodeSmith Style!"
date: 2005-11-21T07:10:06Z
authors: ["Richard Hundhausen"]
slug: "database-concordance-generator-codesmith-style"
draft: false
tags: ["Conferences", "Microsoft", "SQL Server"]
---

<p><br />Thanks to one of my favorite attendees, <a href="http://www.lnbogen.com" target="none" rel="noopener">Oren Ellenbogen</a>, who is a <a href="http://www.codesmithtools.com" target="none" rel="noopener">CodeSmith</a> guru, for providing a <a href="Concordance.zip" target="none" rel="noopener">CodeSmith solution</a> to my SQL Server concordance generator that I demonstrated at SQL Week in Israel.</p>
<p>A "concordance generator" is something I came up with, which scans through all of the columns, in all of the tables, in a database, and looks for anomalies, such as two columns with the same name, but with different data types, sizes, nullability, etc. It's good for people who like their database structures just so -- like Monk!<br /><br /></p>