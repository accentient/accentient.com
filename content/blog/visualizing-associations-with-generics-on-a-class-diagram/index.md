---
title: "Visualizing associations with generics on a class diagram"
date: 2005-11-21T08:20:53Z
authors: ["Richard Hundhausen"]
slug: "visualizing-associations-with-generics-on-a-class-diagram"
draft: false
tags: ["Visual Studio"]
---

<p><br />Thanks to a student, Jim Munn, for originally asking the question "W<font size=2>hen adding a property to an object that uses System.Collections.Generic.List&lt;&gt; the designer doesn't show a relation to the class that the generic collection is typed to. Why not?"</font></p>
<p>So, let's assume you have two classes: <em>Customer</em> and <em>Order</em></p><img src="ClassDesigner1.jpg">
<p>Notice how, by default, the association is not displayed between the Customer and Order class. By right-clicking either the <em>mOrders</em> field or <em>Orders</em> property and selecting <em>Show as Collection Association</em>, the association will be visualized:</p><img src="ClassDesigner2.jpg">