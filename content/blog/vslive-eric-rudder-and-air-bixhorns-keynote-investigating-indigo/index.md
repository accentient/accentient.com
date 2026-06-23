---
title: "(VSLive) Eric Rudder and Air Bixhorn's keynote \"Investigating Indigo\""
date: 2005-02-08T17:39:27Z
authors: ["Richard Hundhausen"]
slug: "vslive-eric-rudder-and-air-bixhorns-keynote-investigating-indigo"
draft: false
tags: ["Life"]
---

<p>Focus is on a walk through Web services, from ASMX to WSE to Indigo, and how Indigo will plug and play into Visual Studio.</p>
<p>Ari just came onstage wearing a heartrate monitor on his head. This should be interesting.</p>
<p>His hospital system, demonstrated inside whitehorse, shows the connection to a BEA Web service. The demo starts, tracing Air's heartrate and brainwave activity! Then a call is made to the Web service, from within the client applicaiton.</p>
<p>Digging into the code, we look at app.config files, and based on the values, TCP or HTTP, endpionts are created to the services. The bindings are also defined, one each for TCP and HTTP. Indigo exposes the endpoints very naturally.</p>
<p>The gaps in the brainwave activity demonstrates the need for reliable messaging. Stop the client. Stop the server. Drag and drop one attribute (ReliabilityBinding) onto the class, to specify that each packet is received (a) once and only once, and (b) in order. One line of code! What about security? Mutual X509 certificate attributes. Restart server. Reliable messaging and security in two lines of code.</p>
<p>Indigo 1.0 will ship with a message tracing application. First few batches of messages are clear text. Scrolling down in the tracing utility, you see the cipher information and a blob of encrypted bytes. Very cool.</p>
<p>Alternate authentications, such as a fingerprint scan, can be plugged-in to extend Indigo's security model.</p>
<p>All of these features in Indigo version 1.0. More information in Room #2008 today.</p>