---
title: "Which AI-Code Risk Persona Is Your Organization?"
date: 2026-07-01T10:00:00Z
authors: ["Richard Hundhausen"]
slug: "ai-code-ownership-by-persona"
description: "AI-generated code is unownable under U.S. law, but what that costs you depends on who you are. Eighteen organizational personas, rated on inbound and outbound IP risk."
draft: false
tags: ["AI", "Development", "WhoOwnsTheCode"]
---

<p>By now the headline is familiar: pure AI output has no human author, so under U.S. law nobody owns it. I've made that case in the <a href="/blog/who-owns-ai-generated-code/">overview</a>, watched a federal appeals court <a href="/blog/ai-code-copyright-appeals-court-ruling/">confirm it</a>, and watched the Supreme Court <a href="/blog/ai-code-copyright-supreme-court-cert-denied/">leave that rule standing</a>. The law is the same for everyone. What is not the same is what that law costs you. A hobbyist giving code away and a startup vibe-coding an MVP to sell both produce unownable code, and for one of them it's a non-event while for the other it's the whole valuation. Your exposure depends on who you are and what you do with the code.</p>

<p><strong>Two kinds of risk, not one</strong></p>

<p>It helps to split the danger into the two directions code flows through you. <em>Inbound risk</em> is about what the model ingested to produce your code: training data of unknown provenance, scraped repositories, and the chance that infringing or copyleft fragments came out the other side and into your build. <em>Outbound risk</em> is about what you ship: whether you can actually own, license, warrant, and sell the result. Most teams only worry about one of these, but they're independent axes. The company with the scariest inbound problem (the one training the model) often has almost no outbound problem, and the company with catastrophic outbound exposure (the one signing a title warranty it can't honor) barely ingested anything itself. The table below plots eighteen common patterns on both axes, roughly ordered by how often you see them in the U.S. Hover or tap any risk bar to see why it lands where it does.</p>

<div class="risk-matrix">
<table>
<thead>
<tr>
<th>#</th>
<th>Persona</th>
<th>The pattern</th>
<th>Example</th>
<th>How they use AI</th>
<th class="rk-h has-tip" tabindex="0" data-tip="Risk from what the AI ingested: training data and scraped code.">Inbound risk</th>
<th class="rk-h has-tip" tabindex="0" data-tip="Risk from what you ship: whether you can own it, license it, and sell it.">Outbound risk</th>
</tr>
</thead>
<tbody>
<tr>
<td class="num" data-label="#">1</td>
<td class="who" data-label="Persona">The "Internal Tooler"</td>
<td data-label="Pattern">Builds it, runs it, never sells it</td>
<td data-label="Example">Large enterprise IT</td>
<td data-label="How they use AI">AI-assisted scripts and utilities for internal use</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="Code stays in-house, so infringement exposure from training data is minimal."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-1" tabindex="0" data-tip="Never sold or licensed, so unowned AI code rarely matters in practice."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">2</td>
<td class="who" data-label="Persona">The "Onshorer"</td>
<td data-label="Pattern">Hires a US shop that may quietly use AI</td>
<td data-label="Example">US systems integrator</td>
<td data-label="How they use AI">Contractor leans on AI, client never asks</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="The client isn't training models; the contractor's AI ingestion is upstream."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-3" tabindex="0" data-tip="The contractor warranted title it can't give; the ownership gap is now baked into the client's core asset."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">High</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">3</td>
<td class="who" data-label="Persona">The "Offshorer"</td>
<td data-label="Pattern">Hires an offshore shop that's hard to audit</td>
<td data-label="Example">Offshore dev firm</td>
<td data-label="How they use AI">Offshore team vibe-codes with low oversight</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="Same upstream ingestion as any contractor build."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-3" tabindex="0" data-tip="Same false title warranty as onshore, and you can't easily verify how much is AI-generated."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">High</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">4</td>
<td class="who" data-label="Persona">The "Host"</td>
<td data-label="Pattern">Pure SaaS, never distributes code</td>
<td data-label="Example">Cloud SaaS provider</td>
<td data-label="How they use AI">AI-assisted code that only ever runs on their servers</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="Code never leaves their servers, limiting downstream infringement claims."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-2" tabindex="0" data-tip="Copyright is a weak moat when nothing ships, but exit diligence still asks what they actually own."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">5</td>
<td class="who" data-label="Persona">The "Bootstrapper"</td>
<td data-label="Pattern">Paid app, no investors, not for sale</td>
<td data-label="Example">Solo app developer</td>
<td data-label="How they use AI">Builds a paid product with AI and runs it for recurring revenue</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Heavy AI use raises the odds of ingesting infringing or copyleft fragments into the shipped binary."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-3" tabindex="0" data-tip="No warranty or exit trigger, but the unowned code can be copied with impunity, so there's no lawful monopoly to protect the revenue."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">High</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">6</td>
<td class="who" data-label="Persona">The "Hired Gun"</td>
<td data-label="Pattern">Dev shop on the hook for the warranty it signs</td>
<td data-label="Example">Boutique software agency</td>
<td data-label="How they use AI">Builds client deliverables with AI assistance</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="The shop isn't training models; ingestion risk is the usual contractor-build exposure."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="It signs a human-authorship/title warranty it can't honor, bearing the breach-of-contract and misrepresentation exposure when AI code can't transfer title."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">7</td>
<td class="who" data-label="Persona">The "Renter"</td>
<td data-label="Pattern">Builds on a platform that indemnifies them</td>
<td data-label="Example">Enterprise on a major AI platform</td>
<td data-label="How they use AI">AI coding on a vendor that stands behind the output</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Same ingestion risk as any AI build, but a solvent vendor may indemnify infringement claims."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-2" tabindex="0" data-tip="The authorship gap remains, but the platform's IP commitment transfers much of the risk."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">8</td>
<td class="who" data-label="Persona">The "Giver"</td>
<td data-label="Pattern">Gives it away, never monetizes</td>
<td data-label="Example">Open-source hobbyist</td>
<td data-label="How they use AI">AI-generated code released freely</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="Some chance of ingesting infringing code, but nothing is being monetized."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-0" tabindex="0" data-tip="No monetization and no enforcement, so ownership of the output is moot by choice."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">None</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">9</td>
<td class="who" data-label="Persona">The "Licensor"</td>
<td data-label="Pattern">Ships licensed software, keeps the company</td>
<td data-label="Example">Commercial software vendor</td>
<td data-label="How they use AI">AI-assisted product code shipped to customers</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Shipped binaries can carry infringing or copyleft fragments from training data."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="Every customer license demands a warranty of title that unowned AI code can't support."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">10</td>
<td class="who" data-label="Persona">The "Regulated"</td>
<td data-label="Pattern">Pharma, finance, or health under audit</td>
<td data-label="Example">Health or finance software firm</td>
<td data-label="How they use AI">AI in the build triggers traceability duties</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Regulated audits probe data provenance, so ingested code draws scrutiny."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="Sector rules (HIPAA, SEC, FDA) demand auditability that vibe-coded code without provenance can't satisfy."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">11</td>
<td class="who" data-label="Persona">The "Exiter"</td>
<td data-label="Pattern">Vibe-codes an MVP to raise money and sell</td>
<td data-label="Example">Early-stage AI startup</td>
<td data-label="How they use AI">Founders generate most of the codebase with AI</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Heavy generation raises the odds of ingesting infringing or copyleft code."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="The acquisition warranty of title can't be made; a vibe-coded core has little the buyer can own."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">12</td>
<td class="who" data-label="Persona">The "Acquirer"</td>
<td data-label="Pattern">Buys companies, asks who owns the code</td>
<td data-label="Example">Strategic acquirer</td>
<td data-label="How they use AI">Uses AI-detection in diligence, not to build</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="They aren't building, so they ingest little themselves."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-2" tabindex="0" data-tip="They inherit the target's ownership gap if diligence misses it."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">13</td>
<td class="who" data-label="Persona">The "Civic Coder"</td>
<td data-label="Pattern">Government writes it; open, unownable by law</td>
<td data-label="Example">Federal agency (e.g. NASA)</td>
<td data-label="How they use AI">Federal devs use AI on public-domain code</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="They can still ingest infringing or copyleft code, though sovereign immunity and 28 USC 1498 mute the remedy."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-0" tabindex="0" data-tip="Federal-employee works are uncopyrightable by statute (17 USC 105), open by default, with nothing to own or sell."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">None</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">14</td>
<td class="who" data-label="Persona">The "Fed Supplier"</td>
<td data-label="Pattern">Delivers to the government under statute</td>
<td data-label="Example">Defense or gov contractor</td>
<td data-label="How they use AI">AI in the build must survive federal title and accuracy rules</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Federal work scrutinizes provenance, so ingested code raises flags."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="Federal contracts require title and functionality warranties; AI code can breach the contract and trigger debarment."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">15</td>
<td class="who" data-label="Persona">The "Inheritor"</td>
<td data-label="Pattern">Bought a codebase, gap shows up later</td>
<td data-label="Example">Post-acquisition operator</td>
<td data-label="How they use AI">Inherited AI-built code, often undisclosed</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="The ingestion happened under the prior owner; current exposure is downstream."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-3" tabindex="0" data-tip="They now hold unowned inherited code and must remediate or pursue the seller on the broken warranty."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">High</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">16</td>
<td class="who" data-label="Persona">The "Walled Garden"</td>
<td data-label="Pattern">Trains its own model on its own data</td>
<td data-label="Example">Large enterprise with internal LLM</td>
<td data-label="How they use AI">Internal LLM trained only on owned code</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-1" tabindex="0" data-tip="Training only on owned data sharply lowers infringement odds."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-1" tabindex="0" data-tip="Outputs are still unowned, but internal-only use makes that gap unlikely to ever be tested."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">17</td>
<td class="who" data-label="Persona">The "Two-Tier"</td>
<td data-label="Pattern">Open-source core plus a paid layer</td>
<td data-label="Example">Open-core software company</td>
<td data-label="How they use AI">AI mixed across free and proprietary tiers</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-2" tabindex="0" data-tip="Copyleft fragments can contaminate the proprietary layer through the open core."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Moderate</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-4" tabindex="0" data-tip="The paid tier needs per-line provenance; one unowned or copyleft module can force disclosure of proprietary code."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
</tr>
<tr>
<td class="num" data-label="#">18</td>
<td class="who" data-label="Persona">The "Model Maker"</td>
<td data-label="Pattern">Ships the AI itself</td>
<td data-label="Example">Foundation-model company</td>
<td data-label="How they use AI">Trains and sells the model others build on</td>
<td class="rk-cell" data-label="Inbound risk"><span class="rk rk-4" tabindex="0" data-tip="This is the scraping-to-train defendant; fair use for training data is still unresolved."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Critical</span></span></td>
<td class="rk-cell" data-label="Outbound risk"><span class="rk rk-1" tabindex="0" data-tip="Their own product code is largely human-authored; the exposure is on the inbound side."><span class="rk-bars"><i></i><i></i><i></i><i></i></span><span class="rk-word">Low</span></span></td>
</tr>
</tbody>
</table>
<p class="risk-legend">
<span><span class="swatch rk-1"><i></i><i></i><i></i><i></i></span>Low</span>
<span><span class="swatch rk-2"><i></i><i></i><i></i><i></i></span>Moderate</span>
<span><span class="swatch rk-3"><i></i><i></i><i></i><i></i></span>High</span>
<span><span class="swatch rk-4"><i></i><i></i><i></i><i></i></span>Critical</span>
</p>
</div>

<p><strong>The patterns worth staring at</strong></p>

<p>Read the two columns against each other and the story writes itself. Exactly one persona carries critical <em>inbound</em> risk, and it's the Model Maker, the company scraping the world to train a model while the fair-use question sits unresolved in court. Everyone else's inbound risk is a downstream echo of that one. The critical <em>outbound</em> risks cluster somewhere else entirely: the Hired Gun, the Licensor, the Exiter, the Fed Supplier, the Regulated firm, the Two-Tier vendor. What they share isn't heavy AI use, it's a promise. Each one signs or implies a warranty of title, to a customer, an acquirer, or the federal government, and unowned AI code makes that warranty a lie waiting to be discovered. At the calm end sit the Giver and the Civic Coder, whose outbound risk is genuinely zero because they never intended to own or sell anything. The Walled Garden earns low-low by training on its own data and keeping the output inside. The lesson isn't that AI is safe or dangerous in the abstract. It's that the same unownable code is a rounding error for one persona and an existential defect for another, and the deciding factor is what you promised about it.</p>

<p><strong>Find yourself on the list</strong></p>

<p>Most organizations are more than one of these at once, and that's the useful part. A commercial vendor with a government contract and a regulated customer is stacking three critical-outbound patterns on the same codebase. A startup that plans to raise, then sell, is an Exiter today and an Inheritor's problem tomorrow. The point of the table isn't the taxonomy for its own sake; it's a prompt to ask which rows describe you, because that dictates how much governance the moment actually demands. If your worst exposure is a shrug (Internal Tooler, Giver), a light-touch policy is proportionate. If you're anywhere in the critical-outbound cluster, the ownership question isn't a someday problem, it's a term in a contract you've already signed.</p>

<p><strong>The advice still doesn't change</strong></p>

<p>Wherever you land, the response is the same one I've given since the <a href="/blog/who-owns-ai-generated-code/">first post</a>, just weighted by your risk. Keep a human doing the expressive, creative work on anything you intend to own. Keep the record of who did what, in your prompts and your commits, because that's the evidence the day authorship is questioned. Don't apply an open-source license to code you don't own, and don't mistake revenue or a shipped product for a defensible asset. What the table adds is triage: the higher your outbound column, the sooner that discipline stops being good hygiene and starts being the thing standing between you and a broken warranty. I'm a developer, not your attorney, so none of this is legal advice. But you can find your row, and you can see what it's going to cost you to keep pretending the question doesn't apply.</p>

<p><em>Want to know exactly where your organization stands? Visit <a href="https://whoownsthecode.com/assessment/" target="_blank" rel="noopener">whoownsthecode.com</a> and take the assessment today.</em></p>