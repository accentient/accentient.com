---
title: "Can You Automate Copyright Registration From an Azure Pipeline?"
date: 2026-06-26T10:00:00Z
authors: ["Richard Hundhausen"]
slug: "automate-copyright-registration-azure-pipeline"
draft: false
tags: ["Azure DevOps", "Development", "Tools", "WhoOwnsTheCode"]
---

<p>Short answer: not the whole thing, and you shouldn't want to. You can automate the tedious, deterministic part of registering your source code with the U.S. Copyright Office, but the filing itself still needs a human. Here's where the line is, and how to build a pipeline that respects it.</p>

<p><strong>There's no registration API to call</strong></p>

<p>You can't POST a registration. Filing runs through <a href="https://eco.copyright.gov" target="_blank" rel="noopener">eCO</a> (soon to be ECS), and it's interactive by design: you complete the application, pay through Pay.gov, and upload the deposit copy. ECS has so far shipped public records (CPRS) and recordation, not a registration submission endpoint. The 2018 modernization notice floated the idea of public APIs, but as of the February 2026 ECS updates that's still aspirational. So any tool promising end-to-end automated filing today is either wrapping a browser or making something up.</p>

<p><strong>The certification wall is the real blocker</strong></p>

<p>Even if an API existed, you'd still want a person in the loop. When you register, the applicant certifies that the information in the application is correct. That's a legal attestation, not a checkbox. A build agent has no standing to certify anything, and you don't want your CI service account on the hook for a federal filing. The interactivity is annoying. The certification is load-bearing. Keep that distinction in mind, because it tells you exactly which part to automate and which part to leave alone.</p>

<p><strong>What you can automate: preparing the deposit</strong></p>

<p>The deposit material is pure, deterministic transformation, and that's where a pipeline earns its keep. For a computer program, the standard deposit is the first 25 and last 25 pages of source code, or the entire thing if it's under 50 pages. The Office's rule of thumb is roughly 40 lines per page, so the first 1,000 and last 1,000 lines of your source is an acceptable deposit. That's a transform you can run identically on every release tag: concatenate the source in a stable order, slice the head and tail, and render a PDF. No judgment required, which is precisely why a machine should do it.</p>

<p>A few things the prep step should get right. Order the files deterministically so the same commit always produces the same deposit. Exclude open source, vendored, and generated code, because you're registering what you authored. Include your copyright notice block. And if the code contains trade secrets, redact them, keeping in mind that the redacted portion must be proportionately less than what remains visible.</p>

<p><strong>The pragmatic build</strong></p>

<p>The shape that works: a stage triggered on release tags that does two things. First, a normal job generates the deposit PDF. Second, an agentless job parks on a <em>ManualValidation</em> gate while a human does the eCO clicks, then pastes the eCO service request number back in before resuming. That number is your audit trail, tying the registration to the release to the commit SHA.</p>

<pre><code>trigger:
  tags:
    include:
      - 'v*'

stages:
  - stage: CopyrightRegistration
    displayName: 'Copyright Registration'
    jobs:
      - job: PrepareDeposit
        displayName: 'Prepare deposit material'
        pool:
          vmImage: 'ubuntu-latest'
        steps:
          - script: |
              python tools/build_deposit.py \
                --source ./src \
                --exclude ./src/vendor ./src/generated \
                --notice ./COPYRIGHT.txt \
                --first 1000 \
                --last 1000 \
                --out $(Build.ArtifactStagingDirectory)/deposit.pdf
            displayName: 'Generate deposit PDF'
          - publish: $(Build.ArtifactStagingDirectory)/deposit.pdf
            artifact: copyright-deposit

      - job: FileRegistration
        displayName: 'Human filing and certification'
        dependsOn: PrepareDeposit
        pool: server
        steps:
          - task: ManualValidation@0
            timeoutInMinutes: 10080
            inputs:
              instructions: |
                Download the copyright-deposit artifact.
                File the registration in eCO, pay via Pay.gov, and upload the deposit copy.
                Paste the eCO service request number into the comments before resuming.
              onTimeout: 'reject'
</code></pre>

<p>The <em>pool: server</em> job runs without an agent, so the gate costs you nothing while it waits, and the timeout gives your applicant a generous week to file.</p>

<p><strong>A few design decisions worth making on purpose</strong></p>

<p>Treat each release as a separate work. A new version is a new registration, so use the derivative-work flow and reference the prior registration number rather than pretending it's all one filing. Register meaningful releases, not every CI build; copyright registration has a fee and a human cost, and your nightly builds don't need certificates. Never auto-certify, for the reasons above. And notice that this design ages well: if ECS ever does ship a registration API, only the gate job changes. The deposit-prep job you build today is not throwaway work, which is the best kind of automation to invest in.</p>

<p>So no, you can't fully automate it, and the part you can't automate is the part that should stay human anyway. Prepare the deposit deterministically, gate the filing on a person, and capture the service request number for the record. Automate the toil, keep the judgment.</p>
