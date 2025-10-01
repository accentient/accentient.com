---
title: "Top 5 Reasons to use VS Database Projects"
date: 2010-12-10T19:00:00Z
author: "Simon Reindl"
slug: "top-5-reasons-to-use-vs-database-projects"
draft: false
tags: ["Development", "SQL Server", "Tools", "Visual Studio ALM"]
---

---

There is a traditional resistance to using database projects – the production system is the reference point, and I have a backup, so what is the problem, right?

Since the GDR2 was released, this traditional logic was rendered obsolete, and the database developers can come in from the cold. Given that most apps eventually store the data, it is important to make sure that the database is robust, well-written, performant, and does integrate with the rest of the application. In the spirit of <a href="http://en.wikipedia.org/wiki/Nick_Hornby" target="_blank" rel="noopener noreferrer">Nick Hornby</a>, I offer my top 5 reasons to use database projects in Visual Studio.
<h2>1. Continuous Integration</h2>
A database project is a first class citizen of Visual Studio. That means that the project file is an MSBuild file. You can set up Continuous Integration Builds on the project. This will alert you as soon as possible how well your database changes fit with the rest of your system. This is even more powerful if you enable the code analysis and unit tests. Prove that the code works as soon as possible. Automate as much as possible!
<h2>2. Database Scripts are code, and should be treated like code</h2>
If you are working in SQL Server Management Studio, and you have a partial script, it won’t save. In VS, you can save, but not build – just like other programming languages. You can also use shelve sets to park partially completed work, or share with other team members. You have all the richness of the source control system. So you get to associate with work items, have the full change set information, versioning, annotation. All of the features you would expect from the other .Net languages.
<h2>3. Refactoring</h2>
You need to change a field name in a table. How do you check that all the references to that field are updated? By using the refactoring tools you are prompted to go and update references in the other database objects. There is full logging for analysis and reference purposes (these should be checked in to TFS). To verify that the refactoring was successful, you should run the entire test suite.

<a href="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_2.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_thumb.png" alt="image" width="580" height="260" border="0" /></a>
<h2>4. Unit Testing</h2>
Wow – Database Unit Tests. Whether the test is written before or after the code, it should verify that the code performs as intended – Happy Path, Edge Cases, Failure Cases. The database unit tests can be written in SQL, or C#/VB. These can be automatically generated from the Schema View, and there are a number of different assertions that can be made for the unit tests – Data Checksum, Empty ResultSet, Execution Time, Expected Schema, Inconclusive (default – gives the yellow exclamation mark), Non Empty ResultSet, Row Count, Scalar Value. You can add as many of these conditions to the test as required. There is also pre and post test actions, to ensure that the database is returned to the starting state before the test was run. The tests can then be extended like all Visual Studio Tests, extending into Performance Tests, using Data to Drive the Tests, running the tests in a sequence (Ordered Tests)

<a href="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_4.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_thumb_1.png" alt="image" width="577" height="181" border="0" /></a>

<strong>Note: The tests must be run against a database instance, not in the Visual Studio environment.</strong>
<h2>5. Code Analysis</h2>
There are a lot less code analysis rules than in the other languages – all the more reason to turn them all on! This analysis will prevent the easily avoidable errors within the database. It is a low cost high return switch. On a legacy database, don’t turn on the <strong>Treat Warning As Error </strong>until you are sure that the build will not break.

<a href="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_8.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" src="https://accentient.com/blog/content/binary/5-Reasons-to-use-VS-Database-Projects_13E53/image_thumb_3.png" alt="image" width="581" height="364" border="0" /></a>
<h2>Other Reasons:</h2>
There is a lot more in the tool, these are my favourite 5! Some of the other features are: Data Generation Plans, Schema Comparison and Data Comparison.

As all of these features are part of Visual Studio, you can extend this by writing a custom Code Analysis rules, Data Generation Plans, check in policies and templates. That way you can tweak it all to suit your organisation.

Go on – get your databases integrated in with your other code!
