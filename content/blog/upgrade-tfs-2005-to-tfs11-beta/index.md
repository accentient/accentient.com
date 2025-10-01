---
title: "Upgrade TFS 2005 to TFS11 Beta"
date: 2012-03-20T06:51:05Z
author: "Simon Reindl"
slug: "upgrade-tfs-2005-to-tfs11-beta"
draft: false
tags: ["Preferred Practice", "TFS", "Visual Studio"]
---

---

<p>This is one journey to upgrade TFS 2005 to TFS11</p> <h1>Key points if you are in a hurry</h1> <p>You only get one chance at the upgrade, on the initial install. You need to do this as two upgrades TFS2005 –&gt; TFS2008/2010 –&gt; TFS11.</p> <h2>Two Step Warning</h2> <p>TFS2005 to TFS 11 is not supported in the documentation. Upgrades from TFS 2008 and 2010 are supported. You need to migrate to TFS 2010 first, and then to TFS11.</p> <p>If you do try to go in one hop, you will see the following TF400101: Database cannot be upgraded.</p> <p>&nbsp;</p> <p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_26.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_12.png" width="585" height="435"></a></p> <h2>Learning Points</h2> <p>Make sure that your Temp location for SQL is twice as big as your largest database. There is a lot of heavy lifting done during the upgrade.</p> <p>One of the longest steps is usually copying the data around. Portable USB 3 hard drives are very fast. If you can, move the data that way.</p> <p>If you are using 2005, I strongly recommend migrating to a newer server. With any upgrade it is vital that you have a backup of the data.</p> <p>You should have three machines, one with your existing TFS2005, a transient TFS2010 server, and the final target TFS11 server.</p> <h2>Step Summary</h2> <ul> <li>Build the TFS2010 server, install and configure with out SharePoint  <li>Backup and Restore your TFS2005 databases to the TFS 2010 database instance  <li>Upgrade the TFS2005 to TFS2010  <li>Build the TFS11 server, install and configure ALL the prerequisites.  <ul> <li>SharePoint is optional. If you are using SharePoint, there will be a 10 GB RAM warning.</li></ul> <li>Backup and Restore your TFS2010 databases to the TFS11&nbsp; database instance  <li>Install TFS 11  <li>Configure TFS to be an upgrade  <li>Upgrade complete</li></ul> <h1>Detailed Steps</h1> <h2>Step Zero – Read the guide</h2> <p>or finish reading this post!</p> <h2>Step One – Server Build</h2> <p>Build the TFS2010 server (no SharePoint!), make sure it has at least double the drive space as your SQL databases. The upgrade is disk intensive.</p> <p>Configure TFFS 2010.</p> <p>Build the target TFS11 server, but don’t install TFS</p> <h2>Step Two – Backup and Move the databases</h2> <p>Take a backup of the TFS2005 databases</p> <div class="csharpcode"><pre class="alt"><span class="lnum">   1:  </span><span class="kwrd">DECLARE</span> @DBName <span class="kwrd">VARCHAR</span>(50) <span class="rem">-- database name </span></pre><pre><span class="lnum">   2:  </span><span class="kwrd">DECLARE</span> @<span class="kwrd">path</span> <span class="kwrd">VARCHAR</span>(256) <span class="rem">-- path for backup files </span></pre><pre class="alt"><span class="lnum">   3:  </span><span class="kwrd">DECLARE</span> @fileName <span class="kwrd">VARCHAR</span>(256) <span class="rem">-- filename for backup </span></pre><pre><span class="lnum">   4:  </span><span class="kwrd">DECLARE</span> @fileDate <span class="kwrd">VARCHAR</span>(20) <span class="rem">-- used for file name</span></pre><pre class="alt"><span class="lnum">   5:  </span>&nbsp;</pre><pre><span class="lnum">   6:  </span><span class="kwrd">SET</span> @<span class="kwrd">path</span> = <span class="str">'C:Backup'</span> </pre><pre class="alt"><span class="lnum">   7:  </span>&nbsp;</pre><pre><span class="lnum">   8:  </span><span class="kwrd">SELECT</span> @fileDate = <span class="kwrd">CONVERT</span>(<span class="kwrd">VARCHAR</span>(20),GETDATE(),112)</pre><pre class="alt"><span class="lnum">   9:  </span>&nbsp;</pre><pre><span class="lnum">  10:  </span><span class="kwrd">DECLARE</span> db_cursor <span class="kwrd">CURSOR</span> <span class="kwrd">FOR</span> </pre><pre class="alt"><span class="lnum">  11:  </span><span class="kwrd">SELECT</span> name </pre><pre><span class="lnum">  12:  </span><span class="kwrd">FROM</span> master.dbo.sysdatabases </pre><pre class="alt"><span class="lnum">  13:  </span><span class="kwrd">WHERE</span> name <span class="kwrd">LIKE</span> (<span class="str">'Tfs%</span><span class="str">'</span>) </pre><pre><span class="lnum">  14:  </span>&nbsp;</pre><pre class="alt"><span class="lnum">  15:  </span><span class="kwrd">OPEN</span> db_cursor  </pre><pre><span class="lnum">  16:  </span><span class="kwrd">FETCH</span> <span class="kwrd">NEXT</span> <span class="kwrd">FROM</span> db_cursor <span class="kwrd">INTO</span> @DBName  </pre><pre class="alt"><span class="lnum">  17:  </span>&nbsp;</pre><pre><span class="lnum">  18:  </span><span class="kwrd">WHILE</span> <span class="preproc">@@FETCH_STATUS</span> = 0   </pre><pre class="alt"><span class="lnum">  19:  </span><span class="kwrd">BEGIN</span>  </pre><pre><span class="lnum">  20:  </span>       <span class="kwrd">SET</span> @fileName = @<span class="kwrd">path</span> + @DBName + <span class="str">'_'</span> + @fileDate + <span class="str">'2013-08-28 13:36:15'.BAK'</span> </pre><pre class="alt"><span class="lnum">  21:  </span>       <span class="kwrd">BACKUP</span> <span class="kwrd">DATABASE</span> @DBName <span class="kwrd">TO</span> <span class="kwrd">DISK</span> = @fileName </pre><pre><span class="lnum">  22:  </span>            <span class="kwrd">WITH</span> NOFORMAT</pre><pre class="alt"><span class="lnum">  23:  </span>                , INIT</pre><pre><span class="lnum">  24:  </span>                , NAME = @DBName</pre><pre class="alt"><span class="lnum">  25:  </span>                , SKIP</pre><pre><span class="lnum">  26:  </span>                , NOREWIND</pre><pre class="alt"><span class="lnum">  27:  </span>                , NOUNLOAD</pre><pre><span class="lnum">  28:  </span>                , STATS = 100')</pre><pre class="alt"><span class="lnum">  29:  </span>&nbsp;</pre><pre><span class="lnum">  30:  </span>       <span class="kwrd">FETCH</span> <span class="kwrd">NEXT</span> <span class="kwrd">FROM</span> db_cursor <span class="kwrd">INTO</span> @DBName  </pre><pre class="alt"><span class="lnum">  31:  </span><span class="kwrd">END</span>  </pre><pre><span class="lnum">  32:  </span>&nbsp;</pre><pre class="alt"><span class="lnum">  33:  </span><span class="kwrd">CLOSE</span> db_cursor  </pre><pre><span class="lnum">  34:  </span><span class="kwrd">DEALLOCATE</span> db_cursor</pre></div>
<style type="text/css">.csharpcode, .csharpcode pre
{
	font-size: small;
	color: black;
	font-family: consolas, "Courier New", courier, monospace;
	background-color: #ffffff;
	/*white-space: pre;*/
}
.csharpcode pre { margin: 0em; }
.csharpcode .rem { color: #008000; }
.csharpcode .kwrd { color: #0000ff; }
.csharpcode .str { color: #006080; }
.csharpcode .op { color: #0000c0; }
.csharpcode .preproc { color: #cc6633; }
.csharpcode .asp { background-color: #ffff00; }
.csharpcode .html { color: #800000; }
.csharpcode .attr { color: #ff0000; }
.csharpcode .alt
{
	background-color: #f4f4f4;
	width: 100%;
	margin: 0em;
}
.csharpcode .lnum { color: #606060; }
</style>

<p>&nbsp;</p>
<p>move these databases to the TFS 2010 server, and restore them</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_2.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb.png" width="244" height="208"></a></p>
<h2>Step Three – Upgrade to TFS2010</h2>
<p>On the TFS2010 server, open a command prompt as an administrator (right click, run as administrator).</p>
<p>navigate to c:Program FilesMicrosoft Team Foundation Server 2010Tools</p>
<p>run <pre class="csharpcode">TFSConfig import /sqlinstance:"&lt;SQL Server Instance&gt;" /CollectionName:"&lt;the upgraded collection name&gt;" /confirmed</pre>
<style type="text/css">.csharpcode, .csharpcode pre
{
	font-size: small;
	color: black;
	font-family: consolas, "Courier New", courier, monospace;
	background-color: #ffffff;
	/*white-space: pre;*/
}
.csharpcode pre { margin: 0em; }
.csharpcode .rem { color: #008000; }
.csharpcode .kwrd { color: #0000ff; }
.csharpcode .str { color: #006080; }
.csharpcode .op { color: #0000c0; }
.csharpcode .preproc { color: #cc6633; }
.csharpcode .asp { background-color: #ffff00; }
.csharpcode .html { color: #800000; }
.csharpcode .attr { color: #ff0000; }
.csharpcode .alt
{
	background-color: #f4f4f4;
	width: 100%;
	margin: 0em;
}
.csharpcode .lnum { color: #606060; }
</style>

<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_28.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_13.png" width="668" height="192"></a></p>
<p>Wait a while .. 216 steps later</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_30.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_14.png" width="666" height="173"></a></p>
<p>You then need to take a backup of:</p>
<ul>
<li>tfs_configuration database
<li>tfs_Warehouse database
<li>Every Team project collection database that you have attached in the configuration</li></ul>
<p>Well worth while running the TFS 2010 Dogfood stats at this point (<a title="http://blogs.msdn.com/b/granth/archive/2009/10/23/tfs2010-sql-queries-for-tfs-statistics.aspx" href="http://blogs.msdn.com/b/granth/archive/2009/10/23/tfs2010-sql-queries-for-tfs-statistics.aspx">http://blogs.msdn.com/b/granth/archive/2009/10/23/tfs2010-sql-queries-for-tfs-statistics.aspx</a>)</p>
<p>Use the same script as above.</p>
<p>Copy them and restore them to the TFS 11 server.</p>
<p>&nbsp;</p>
<h2>Step Four - Install TFS11</h2>
<p>from the media, run tfs_server</p>
<p>At the splash screen, accept the License and click continue</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_4.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_1.png" width="521" height="381"></a></p>
<p>Enable Updates</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_6.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_2.png" width="518" height="377"></a></p>
<p>Accept the inevitable User Account Control</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_8.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_3.png" width="244" height="125"></a></p>
<p>Watch the Install</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_10.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_4.png" width="244" height="179"></a></p>
<p>Now – Don’t freak out that you haven’t done an upgrade. This is done in the configuration step. Since TFS2010 there is the two phase approach – Install and then Configure.</p>
<p>The upgrade happens in the configure step</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_12.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_5.png" width="244" height="176"></a></p>
<p>OK – Install phase complete, click close. The error message is because i was not connected to the interweb when the install was running.</p>
<h2>Step Four – Upgrade and Configure</h2>
<h2></h2>
<p>The configure screen will be shown. If you have closed the screen for any reason, then you can get to it from the start menu.</p>
<p>Open the Team Foundation Administration Console</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_20.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_9.png" width="234" height="244"></a></p>
<p>From there, click on the Application Tier, and then Configure Installed Features</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_22.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_10.png" width="244" height="101"></a></p>
<p>&nbsp;</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_14.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_6.png" width="595" height="447"></a></p>
<p>Click on Configure and Start Wizard</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_16.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_7.png" width="595" height="445"></a></p>
<p>Then Click Next</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_32.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_15.png" width="599" height="447"></a></p>
<p>OK – after this point it is a fairly vanilla install of TFS, sort out your accounts first, make sure you have space on the hard drive and crack on.</p>
<p>I will not put in lots of screen shots, as it is not any different to a standard install, and you are smart enough to do all that stuff anyway.</p>
<p>It will prompt for an existing TFS_Warehouse, and if any TPC database is not there the upgrade will fail.</p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_34.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_16.png" width="601" height="454"></a></p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_36.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_17.png" width="408" height="309"></a><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_38.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_18.png" width="407" height="304"></a></p>
<p><a href="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_40.png"><img style="display: block; max-width: 100%; height: auto; margin-bottom: 1rem; border: 1px solid black; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);" title="image" border="0" alt="image" src="https://accentient.com/blog/content/binary/Upgrade-TFS-2005-to-TFS11-Beta_76AE/image_thumb_19.png" width="594" height="277"></a></p>
<p>&nbsp;</p>
<p>And you now have the completed upgrade in TFS11.</p>
