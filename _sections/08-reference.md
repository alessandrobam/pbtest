---
title: Reference
slug: reference
number: "06"
order: 80
nav_group: Reference
collapsible: false
chapter: Reference
chapter_slug: reference-chapter
---

## Distribution lists

| Distribution list | Purpose | Owner |
|---|---|---|
{% for item in site.data.distribution_lists %}| {{ item.name }} | {{ item.purpose }} | {{ item.owner }} |
{% endfor %}

## Organization

| Name | Role | Email | Organization | Team | Location |
|---|---|---|---|---|---|
{% for item in site.data.organization %}| {{ item.name }} | {{ item.role }} | [{{ item.email }}](mailto:{{ item.email }}) | {{ item.organization }} | {{ item.team }} | {{ item.location }} |
{% endfor %}

## Team model

| Tier | Definition |
|---|---|
| **T1** | Strategically important projects that strengthen client confidence and future opportunity. |
| **T2** | Projects requiring additional care because of elevated delivery, stakeholder, schedule, skill, or technical risk. |
| **T3** | Familiar, repeatable, lower-risk work the team has delivered consistently. |
