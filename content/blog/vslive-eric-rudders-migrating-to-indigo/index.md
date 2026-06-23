---
title: "(VSLive) Eric Rudder'2013-08-28 18:38:03's - Migrating to Indigo"
date: 2005-02-08T17:54:58Z
authors: ["Richard Hundhausen"]
slug: "vslive-eric-rudders-migrating-to-indigo"
draft: false
tags: ["Life"]
---

<p><strong>ASMX to Indigo</strong></p>
<p>Good news is that your old ASMX&nbsp;code will continue to work. Same with MSMQ. No imperative that you must move to Indigo. Save code, run faster, smoother, better management tools - great reasons to change, however.</p>
<p>&#8220;First generation Web services are legacy&#8220; - sounds weird, doesn't it?</p>
<p>using System.ServiceModel;</p>
<p><strong>Enterprise Services to Indigo</strong></p>
<p>Enhanced the transaction support, setting Tx and security semantics on a per method basis.</p>
<p><strong>WSE to Indigo</strong></p>
<p>Interoperate with WSE? Yes. Even better, because 4 lines of code became 1 attribute, for example.</p>
<p><strong>System.Messaging to Indigo</strong></p>
<p>Change to namespace System.ServiceModel, but then Indigo does the messaging for you. Your business logic will be the same, but the reading/writing code with be done in Indigo</p>
<p><strong>Remoting to Indigo</strong></p>
<p>They were used only when you know you are going to control both ends of the conversation. You can force server upgrades, or client upgrades, for example. Eric doesn't expect most people to move from Remoting to Indigo, because it was for a different pupose, perhaps. Any custom adapters or formatters, would have to upgraded manually. Support for the serializable attribute, but that's about it. So, there will be prescriptive guidance support, but that's about it.</p>
<p><strong>BizTalk Server 2004</strong></p>
<p>Can connect multiple services built with Indigo. The need for BizTalk won't go away. It will be the orchestrator for everything. The protocols will updated thought. There is a WSE adapter now. When Indigo ships, there will be an Indigo adapter (BizTalk Server 2006). BizTalk Server vNext will be built natively on Indigo stack.</p>
<p><strong>SQL Server 2005 (Service Broker)</strong></p>
<p>Queues for the database, for hanging queries and resultsets. The service broker is a slightly different protocol. This implementation will be based on Indigo in 2006 (service pack?). SQL Server version vNext will use Indigo transports for WS-* interoperability.</p>
<p><strong>Windows Server System</strong></p>
<p>Web service protocols everywhere. Classic protocols as well. Increasilngly the identity, etc. will be done with Web services. The roadmap will move to have a consistent Web service API down the road. Model and build in Visual Studio and monitor with Indigo tools. Great foundation to reduce complexity and reduce the number of paradigms.</p>
<p><strong>VSIP Program</strong></p>
<p>Doubled the number of partners since last year. 225 premier and alliance partners with nearly 20,000 affiliates.</p>
<p><strong>Critical Dates and Getting Started</strong></p>
<ul>
<li>Avalon CTP was in November</li>
<li>Indigo CTP and Avalon CTP 2 in March (brings them together and will include a version of VS2005)</li>
<li>Broadly available on MSDN</li>
<li>Will take some of the biggest samples (PAG) and publish on Indigo</li></ul>