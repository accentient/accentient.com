---
title: "Bulk-Loading User Avatars in Azure DevOps Server"
date: 2026-09-09T14:00:00Z
authors: ["Richard Hundhausen"]
slug: "azure-devops-avatar-loader"
description: "Azure DevOps Server has no way to set another user's profile picture, which makes seeding a classroom or demo collection tedious. A small PowerShell script fixes that. Now MIT licensed on GitHub. On-prem only."
draft: false
tags: ["Azure DevOps", "Tools", "MVP"]
---

<p>When we teach an Azure DevOps Server course, it runs against a VM with a dozen or so fake users: Alice, Andy, Anna, and friends. When those users have real faces on their boards, pull requests, and work item history, the environment looks like a team. When they don't, it looks like a wall of identical initials, and students notice.</p>

<p>The problem is that Azure DevOps Server has no UI for setting <em>another</em> user's avatar. Each user has to sign in and upload their own. For years we got around that with a compiled tool that stored a password and drove Internet Explorer (ya, seriously) through the profile page. It worked, until it didn't. So we replaced it with a script and put it on GitHub.</p>

<p><a href="https://github.com/accentient/azure-devops-avatar-loader" target="_blank" rel="noopener noreferrer"><strong>github.com/accentient/azure-devops-avatar-loader</strong></a> &middot; MIT licensed &middot; Windows PowerShell 5.1</p>

<p><strong>How it works</strong></p>

<p>There is no mapping file. The image file names are the mapping: <code>Alice.jpg</code> becomes the avatar for the user whose account name or display name is Alice. Point the config at your collection URL and a folder of photos, run the script as a collection administrator, and it resolves each identity through the REST API, writes the image, and then reads the identity store back to confirm the avatar actually landed. It warns and keeps going on anything it can't match, ends with a summary, and is safe to re-run.</p>

<p>Most server builds do not host the graph avatars REST endpoint, so the script falls back to the Team Foundation client object model and writes the image into the identity's extended properties, which is where on-prem avatars live anyway. The assemblies it needs are already in the Azure DevOps Server <code>Tools</code> folder, so there is nothing to install. Add <code>-WhatIf</code> to preview, <code>-Status</code> to see who already has a stored avatar, and <code>-Reset</code> to clear them all back to initials. After a reset, or if old images stick around, recycle the application pool or run <code>iisreset</code>; the web UI caches avatars aggressively.</p>

<p><strong>On-prem only</strong></p>

<p>This is for <strong>Azure DevOps Server</strong>, not Azure DevOps Services. It targets 2022 and should work on 2019 and later. Everything about it assumes a server you own: Windows integrated authentication with no PATs, the identity store's extended properties, DLLs from the server's install folder, and an IIS application pool you can recycle. In the cloud, a user's profile picture belongs to their Microsoft account and nobody gets to set it for them, which is fine, because the cloud isn't where classroom VMs live.</p>

<p>If you run training, demos, or a lab collection on Azure DevOps Server, clone it and give your users faces. Issues and pull requests are welcome.</p>
