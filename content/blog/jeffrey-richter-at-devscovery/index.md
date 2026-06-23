---
title: "Jeffrey Richter at Devscovery"
date: 2005-08-30T23:16:48Z
authors: ["Richard Hundhausen"]
slug: "jeffrey-richter-at-devscovery"
draft: false
tags: ["Misc"]
---

<p>Listening to Jeff Richter talk about Application Domain and Remoting.&nbsp; He's a good presenter, and very fun to listen to!&nbsp; Lot's of energy, but more importantly, very knowledgeable!&nbsp; I have a weakness for low level computer details (compiler details, behind the scenes optimizations, etc), and Jeff has tons of great nuggets!&nbsp; For instance, the ThreadAbortException is rethrown by the runtime, even if it is caught!&nbsp; In order to stop this, you need to call the ResetAbort() method, which requires certain permissions.&nbsp; Great use!&nbsp; This allows us to load possibly malicious code into an app domain with restricted permission, then any malicious code can't swallow an aborted thread, and continue to consume resources.&nbsp; Cool.&nbsp; See?&nbsp; Neat stuff!&nbsp; If you haven't seen Richter speak, or read one of his books, I recommend it!</p>