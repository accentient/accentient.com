---
title: "Cool DBA Automation Jobs"
date: 2007-06-18T22:16:54Z
authors: ["Richard Hundhausen"]
slug: "cool-dba-automation-jobs"
draft: false
tags: ["SQL Server"]
---

<p>I saw a demo of these at Tech-Ed, and thought I would share with my friends.</p> <p>Essentially, the Database Operations team at Microsoft uses a suite of jobs on all their&nbsp;servers&nbsp;for performing backups, automated database maintenance, improve performance , and&nbsp;improving disaster recovery. I'm sure every SQL Server expert/consultant out there has his or her&nbsp;own bag of tricks, but Microsoft is finally sharing theirs.  <p>&nbsp;  <p>These SQL maintenance jobs provide automated tasks such as database or transaction logs backup, performing database optimization like Index defrag&nbsp;or update statistics, cleaning MSDB backup history and recycling the SQL error log. Each of these jobs runs stored procedures that are installed when the jobs are created.  <p>&nbsp;  <p>The following are the jobs get installed with this package.  <ul> <li>SQLBackupAll  <li>SQLBackupDiffAll  <li>SQLBackupTranAll  <li>SQLBackupChecker  <li>SQLDBCCAll  <li>SQLIndexDefragAll  <li>SQLUpdateStatistics  <li>SQLCleanupMsdbBackupHistory  <li>SQLCycleErrorLog</li></ul> <p>Download the automation jobs <a href="http://download.microsoft.com/download/4/0/C/40CBAD9A-D990-450B-8785-F288CEBFB448/AITScripts.zip" target="_blank" rel="noopener">here</a>, and then refer to the Word document inside.</p>