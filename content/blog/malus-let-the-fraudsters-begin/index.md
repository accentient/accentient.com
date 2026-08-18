---
title: "Let the Fraudsters Begin: Malus and the License-Washing Machine"
date: 2026-08-18T10:00:00Z
authors: ["Richard Hundhausen"]
slug: "malus-let-the-fraudsters-begin"
description: "Malus.sh sells AI clean-room clones of open source projects, promising code you own outright with no attribution and no copyleft. The satire works, the service works, and the one thing it cannot deliver is the ownership."
draft: false
tags: ["AI", "Development", "WhoOwnsTheCode"]
---

<p>In March 2026 a site called <a href="https://malus.sh/" target="_blank" rel="noopener noreferrer">malus.sh</a> started making the rounds. The pitch is "Clean Room as a Service": proprietary AI robots read only the public documentation of any open source project, a second set of robots that never saw the original recreates it from scratch, and you receive functionally equivalent code under the MalusCorp-0 license. Zero attribution requirements. Zero copyleft. Zero obligations. The tagline says it plainly: "Finally, liberation from open source license obligations."</p>

<p>It reads like a parody of every SaaS landing page you've ever scrolled past, complete with redacted testimonials and full legal indemnification, asterisk, "through our offshore subsidiary in a jurisdiction that doesn't recognize software copyright." The name is Latin for bad. It grew out of a FOSDEM 2026 talk in Brussels titled "Let's end open source together with this one simple trick," which <a href="https://gigazine.net/gsc_news/en/20260313-malus-open-source/" target="_blank" rel="noopener noreferrer">GIGAZINE traced</a> when the story broke. This is satire, and nobody involved is hiding that.</p>

<p>The problem is that it also works. <a href="https://www.404media.co/this-ai-tool-rips-off-open-source-software-without-violating-copyright/" target="_blank" rel="noopener noreferrer">404 Media reported</a> that Malus is a real LLC, taking real money, producing real clean-room clones. <a href="https://futurism.com/artificial-intelligence/malus-clones-software-copyright" target="_blank" rel="noopener noreferrer">Futurism talked to co-founder Mike Nolan</a>, a researcher on the political economy of open source, who pushed back on anyone dismissing it as just a joke. <a href="https://simonwillison.net/2026/Mar/12/malus/" target="_blank" rel="noopener noreferrer">Simon Willison</a> called it brutal satire and admitted he had to check whether it was satire at all. The Hacker News threads landed on the same nervous note: I almost went crazy until I realized it was satire, followed by, in six months it might not be so far from reality. Open source licensing attorney Heather Meeker was <a href="https://heathermeeker.com/2026/03/16/malus-is-copyleft-dead/" target="_blank" rel="noopener noreferrer">asking within days</a> whether copyleft is dead.</p>

<p><strong>The clean room used to be expensive, and that was the point</strong></p>

<p>Clean-room engineering is old and legitimate. It's how Compaq and others cloned the IBM PC BIOS in the 1980s: one team studies the original and writes a specification, a second team that has never seen the original implements from the spec. Courts have blessed the technique because copyright protects expression, not function. Ideas, interfaces, and behavior are free to reimplement; the particular code that expresses them is not.</p>

<p>What kept the clean room from swallowing the software industry was cost. You needed two teams, lawyers supervising the wall between them, and months of work. It was reserved for prizes worth the trouble, like a BIOS that unlocked an entire compatible-PC market. Nobody was going to clean-room a logging library.</p>

<p>AI collapses that cost to nearly nothing. One agent reads the docs and writes the spec, another agent implements it, and the wall between them is a system prompt. The chardet maintainer Dan Blanchard watched an AI rewrite of his own Python library spark exactly this debate, and his reaction to Malus was resignation: someone will build this for real eventually, and there's no putting the genie back in the bottle. What was a rare, expensive legal safeguard is now a vending machine.</p>

<p><strong>So, let the fraudsters begin</strong></p>

<p>That's the invitation the site is satirizing, and it deserves to be said out loud. If a clean-room clone from documentation is legal, and the marginal cost is a few API calls, then every obligation that open source licensing imposes becomes optional for anyone willing to launder. Don't want to reproduce the Apache NOTICE file? Launder it. AGPL making your SaaS lawyers nervous? Launder it. The maintainers, as the Malus copy sneers, worked for free, so why should they get credit?</p>

<p>The uncomfortable truth is that the fraud here mostly isn't fraud in the legal sense. Reimplementing published functionality without copying expression has been lawful for forty years. The satire lands because the scheme is plausible, and the FOSDEM crowd built it precisely to force the question: if the only thing protecting the open source social contract was that violating it used to be expensive, what happens when it's a penny transaction? Their own <a href="https://malus.sh/blog.html" target="_blank" rel="noopener noreferrer">in-character blog post</a> says it with a straight face: "The social contract was already broken; we are merely providing a commercial alternative to pretending it wasn't."</p>

<p><strong>What the pitch conveniently forgets</strong></p>

<p>This is where the story connects to the rest of this series: the <a href="/blog/who-owns-ai-generated-code/">overview</a>, the <a href="/blog/ai-code-copyright-supreme-court-cert-denied/">Supreme Court's cert denial</a>, and the <a href="/blog/from-monkey-selfies-to-machine-code/">monkey selfie</a>. Malus promises "legally distinct code that you own outright." Read that promise next to settled U.S. law and it falls apart.</p>

<p>The whole sales pitch is 100% robot-written code. Zero human exposure to the original is the feature. But under <em>Thaler v. Perlmutter</em>, which the Supreme Court left standing on March 2, 2026, a work generated entirely by AI has no human author, and with no human author there is no copyright. The clone doesn't arrive as your proprietary asset. It arrives as nobody's asset. The MalusCorp-0 license grants you nothing for the same reason a license on the monkey selfie grants you nothing: there is no copyright behind it to grant.</p>

<blockquote class="quote">The license-washing machine doesn't transfer ownership to you. It launders the code straight into the public domain.</blockquote>

<p>Notice the symmetry. The original maintainers lose their attribution and their copyleft leverage. The buyer, who paid specifically to own the result, receives code they cannot copyright and cannot meaningfully license. Try representing it as proprietary IP in a funding round or an acquisition, and that claim gets tested against the vendor's own marketing, which proudly states that no human wrote it. Everyone's exclusivity is destroyed. The fraudsters, if we're calling them that, aren't stealing ownership. They're eliminating it, and charging a fee to do it.</p>

<p><strong>What to actually do</strong></p>

<p>If you maintain open source: your license was never the only thing protecting your project, and this is the year that becomes visible. Attribution norms, community, funding, and trademark are the parts a clean room can't clone. A robot can reimplement your code; it can't reimplement your judgment about what to build next, and it can't launder your name.</p>

<p>If you're tempted by the buying side: know what you're actually purchasing. A functionally equivalent clone with no license obligations is also a clone with no owner, no warranty of title you can rely on, and a paper trail that says so. If the goal was avoiding an attribution file, you will have traded a NOTICE file for an unownable codebase. That's a bad trade, and your diligence counsel will say so less politely.</p>

<p>And for everyone building with AI, the advice from this series hasn't moved: keep a human doing the expressive work on anything you intend to own, keep the record of who did what, and treat purely AI-generated code as the public-domain material it is. If you want to know where you stand today, start with the <a href="https://whoownsthecode.com/assessment" target="_blank" rel="noopener noreferrer">risk assessment</a> at https://whoownsthecode.com or the <a href="https://whoownsthecode.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a>.</p>

<p>Malus set out to end open source with one simple trick. What it actually demonstrated is the thesis of this whole series: when nobody human writes the code, nobody owns the code. Let the fraudsters begin. At the end of the laundering cycle they'll find code that belongs to everyone. That's where open source started.</p>

<p><em>This post is provided for educational purposes and does not constitute legal advice. Talk to a qualified IP attorney about your specific situation.</em></p>