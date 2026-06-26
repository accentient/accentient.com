---
title: "Who Owns the Code Your AI Just Wrote?"
date: 2025-01-14T10:00:00Z
authors: ["Richard Hundhausen"]
slug: "who-owns-ai-generated-code"
draft: false
tags: ["AI", "Development", "WhoOwnsTheCode"]
---

<p>Here's an uncomfortable question for every team leaning on AI to ship faster: if an AI wrote your code, who owns it? Under current U.S. law the honest answer is probably nobody, and that should bother you a lot more than it seems to. It bothered me enough that I put together <a href="https://whoownsthecode.com" target="_blank" rel="noopener">whoownsthecode.com</a> with IP attorney Brad Frazer to lay the problem out plainly. The short version fits on a bumper sticker: AI code means no author, which means no copyright.</p>

<p><strong>No author, no copyright</strong></p>

<p>Copyright protects original works of human authorship. Source code earns protection because the law treats it as a literary work, the same category as a novel or a screenplay. That protection is what lets you control how your software is used, license it, and stop someone from copying it. Take the human author out of the equation and the protection goes with them. Output from a purely generative AI tool lacks a human author and therefore cannot be copyrighted. This isn't a fringe reading. The U.S. Copyright Office's 2023 report on AI reaffirmed that copyright requires human authorship, and in Thaler v. Perlmutter a federal district court held that a work created entirely by AI isn't eligible for copyright at all, a ruling that is now up on appeal. The principle was about AI art, but it lands squarely on AI-generated code.</p>

<p><strong>Your prompts are not authorship</strong></p>

<p>The natural objection is "but I wrote the prompts." Prompts guide the system, but they typically lack the determinism and creative specificity the law looks for in a human author. The cleanest way I've found to explain this is to compare it to a compiler. A compiler is deterministic: you write the source, it transforms that exact expression into another form, and your authorship is preserved one to one all the way down. A generative model is the opposite. It's non-deterministic, it produces new expression that you didn't write, and that severs the one to one link copyright depends on. Which is exactly why "vibe coding," prompting an AI to crank out large amounts of functional code with minimal human design or revision, is the riskiest pattern of all. The AI is doing the expressive work, so the result is not human-authored, and not a protectable asset.</p>

<p><strong>This is a business problem, not a lawyer problem</strong></p>

<p>You can still ship AI-generated code, sell it, and make money. The trap is that you can do all of that while owning nothing. Without clear ownership you can't create or defend a lawful monopoly over your software, which means a competitor can copy it with impunity, and you're left with revenue but no defensible asset to protect or sell. That bill comes due at the worst possible moments: licensing negotiations, fundraising, enforcement, and especially an acquisition, where due diligence asks exactly one question and you don't have a good answer. It gets worse if you assumed an open source license would save you. Applying MIT or GPL to code you don't own is legally ineffective, because you can't license rights you never held. And if the model emitted something that looks a lot like existing open source, you can inherit infringement or copyleft obligations you never agreed to, turning what you thought was proprietary software into a duty to share it.</p>

<p><strong>The gray area, and who actually decides</strong></p>

<p>It isn't all doom. You own what you create, and meaningful human revision, selection, restructuring, or genuine creative judgment over AI output may establish authorship in the parts you touched that way. The catch is that there's no bright-line rule for how much is enough. Courts decide this, not the Copyright Office, and they decide it by looking for creative contribution, not the raw volume of your edits. In practice the question only gets answered if authorship is tested in litigation, where your prompt history, revision records, and other AI usage artifacts can be examined or compelled through discovery. Until a binding federal decision or an act of Congress settles it, most of what we believe about ownership of AI-generated code is still speculation, and you're operating in that gray area whether you've thought about it or not.</p>

<p><strong>What to do while the law catches up</strong></p>

<p>Treat this as governance, not paperwork. Have a policy for how your teams prompt and how they use what comes back. Review AI-generated code instead of pushing it straight to production. Label it, note it in your commits, and keep your prompts in version control, because the day authorship is questioned, that record is the evidence. Most of all, make sure humans are still doing the expressive, creative work on anything you intend to own. I'm a developer, not your attorney, so none of this is legal advice. But you don't need a law degree to see the shape of the risk. Know what your AI is writing, know which parts a human truly authored, and know what you actually own before someone else asks. That's the difference between a defensible product and a pile of code nobody can claim.</p>

<p><em>This is the overview in a short series. See also the follow-ups on the <a href="/blog/ai-code-copyright-appeals-court-ruling/">appeals court decision</a> and the <a href="/blog/ai-code-copyright-supreme-court-cert-denied/">Supreme Court's decision</a>.</em></p>
