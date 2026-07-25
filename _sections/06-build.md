---
title: Build a Proposal
slug: build-a-proposal
number: "04"
order: 60
nav_group: Build a Proposal
collapsible: false
chapter: Build a Proposal
chapter_slug: build-a-proposal-chapter
---

## Contract templates

Start from the current approved template and confirm the contract path with the Proposal Lead.

| Type | Use when | Template |
|---|---|---|
{% for item in site.data.contract_templates %}| **{{ item.type }}** | {{ item.use_when }} | [{{ item.link_label }}]({{ item.url }}) |
{% endfor %}

## Tools

| Tool | Purpose | Access |
|---|---|---|
{% for item in site.data.tools %}| **{{ item.name }}** | {{ item.purpose }} | [{{ item.link_label }}]({{ item.url }}) |
{% endfor %}

## Pricing methodology

| Method | Applies when | New revenue | New signings | Work numbers | Registration |
|---|---|---|---|---|---|
{% for item in site.data.pricing_methods %}| **{{ item.method }}** | {{ item.applies_when }} | {{ item.new_revenue }} | {{ item.new_signings }} | {{ item.work_numbers }} | [Process]({{ item.registration_url }}) |
{% endfor %}

### Proposal completion gate

Before handoff, confirm that scope, assumptions, deliverables, acceptance, price, billing, staffing, dependencies, client obligations, risks, approvals, and applicable Life Sciences controls are explicit.
