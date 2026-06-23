---
title: "ADO.NET changes in Whidbey (May 2004 CTP)"
date: 2004-06-05T21:13:37Z
authors: ["Richard Hundhausen"]
slug: "ado-net-changes-in-whidbey-may-2004-ctp"
draft: false
tags: ["Life"]
---

<p><a href="http://danagonistes.blogspot.com" target="none" rel="noopener">Dan Fox</a> of <a href="http://www.quilogy.com" target="nont" rel="noopener">Quilogy</a> presented this topic</p>
<p>First, What's not going to be in ADO.NET 2.0 :-(</p>
<ul>
<li>ObjectSpaces moved to the Longhorn wave
<li>Data Paging - (DbCommand.ExecutePageReader method)
<li>Stand-alone table objects (DbTable and its descendants)
<li>Server cursors&nbsp;- SqlResultSet
<li>Asynchronous connection objects</li></ul>
<p>ObjectSpaces are out (too bad)</p>
<ul>
<li>Microsoft is building the Microsoft Business Framework (MBF) for Longhorn, using WinFS so it's off until then
<li>Dan is going to demo the ObjectSpaces and the Entitity-to-Database Mapper
<li>OPath is similar to XPath, but is an object way of retrieving subsets of objects
<li>Demo ObjectSpaces and mapper - too bad it's out! :-(</li></ul>
<p>New: XmlAdapter</p>
<ul>
<li>XQueryCommand - a command that you can populate from a file or text
<li>XmlDataSourceResolver(&#8220;friendlyname&#8220;, conn) - is this SqlClient only?
<li>XmlAdapter - has a fill method which runs the XQuery from the .xml file against the resolved name above</li></ul>
<p>Improved: Enhancing ADO.NET</p>
<ul>
<li>Provider Factories - abstract classes, implementing the class factory pattern
<li>DbConnection - each of the various connected layer classes now have abstract base classes
<li>SqlClientFactory (inherits from DbProviderFactory) instantiates and returns a SqlConnection
<li>My&nbsp;code will call DbProviderFactories - configurable in machine.config (in System.Data) section
<li>Demo - very cool</li></ul>
<p>New: Bulk Copy from the client</p>
<ul>
<li>Programmatically invoke BCP - very simple interface
<li>System.Data.SqlClient.SqlBulkCopy - SqlBulkCopyColumnMapping objects need to be defined
<li>Method is WritetoServer()
<li>Demo - works great</li></ul>
<p>New: Asynchronous Data Access</p>
<ul>
<li>BeginExecuteNonQuery, BeginExecuteReader, BeginExecuteXmlReader - the same pattern .NET has had
<li>AsyncCallback object is passed to the callback method
<li>Background threads are being used and Windows Forms controls are only updated on the thread they were created - this was the problem I had in my MSDN article; this is done through a delegate; Me.Invoke(ui)
<li>Demo - similar to what I'll be showing tomorrow :-|</li></ul>
<p>New: DataSet Changes</p>
<ul>
<li>Loading DataSet from a DataReader
<li>Reading the contents of a DataTable as a DataReader - Dim DRT as DataTableReader = DS.GetDataReader()
<li>DataTable - can be serialized (WriteXml, WriteXmlSchema, ReadXml, ReadXmlSchema)
<li>DataSets can be serialized in a Binary fashion, to boost .NET Remoting performance</li></ul>
<p>Performance Improvements</p>
<ul>
<li>Index engine enhancements
<li>DataAdapter Batch Updates
<li>Single row return - Dim R as SqlRecord = myCmd.ExecuteRow()</li></ul>
<p>Features of Yukon (SQL Server 2005)</p>
<ul>
<li>MARS
<li>SqlDependency
<li>SqlNotificationRequest&nbsp;- more detailed than SqlDependency, queues, etc.
<li>OutputCache in ASP.NET - @Page parameter SqlDependency=&#8220;CommandNotification&#8220;
<li>Yukon Types UDTs - classes in .NET, instantiate them and store them directly in Yukon, and then read them out as well
<li>Snapshot Isolation - essentially readers don't block writers; this is supported via MDAC, but will also be visible in SqlClient as another IsolationLevel setting (IsolationLevel.Snapshot) on the SqlTransaction class</li></ul>