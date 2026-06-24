---
title: "TFS Global Lists Cannot Be Deleted"
date: 2008-03-26T21:18:31Z
authors: ["David Starr"]
slug: "tfs-global-lists-cant-be-deleted"
draft: false
tags: ["Visual Studio", "ALM", "Azure Boards"]
---

Seriously. They can't.
<blockquote><a title="http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=259259&amp;SiteID=1" href="http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=259259&amp;SiteID=1">http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=259259&amp;SiteID=1</a></blockquote>
You may delete specific values, but not the list itself. This means you can effectively "zero out" a list by deleting all of it's items.

I don't quite understand why this would be a good feature, as it doesn't really stand up for a test of trace-ability. I just deleted a Team Project whose work items referenced a global list, so there are no references to the list in the system anymore.

Perhaps one way to mitigate this would be to use abstract list names? List A, List B, etc. Then you could re-purpose a list later by giving it new values. Nah.

So, what's the take away? Be very careful about the Global Lists you create in your Team Foundation Server. They will be with you a long time.