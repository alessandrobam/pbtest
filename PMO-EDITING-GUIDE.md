---
layout: guide
title: PMO Editing Guide
---

# PMO editing guide

You do not need to edit HTML, CSS, or JavaScript.

## Update a written section

1. Open the published SOP and select **Edit this section on GitHub**.
2. Select the pencil icon if GitHub asks you to enter edit mode.
3. Change only the text below the `---` settings block.
4. Select **Preview** to review headings, lists, links, and tables.
5. Select **Commit changes**.
6. Choose **Create a new branch and start a pull request**.
7. Describe the reason for the update and request review from the SOP owner.

## Update a table

The files under `_data` are CSV files that can be edited in Excel.

1. Download the relevant CSV file.
2. Open it in Excel and update rows without changing the column names.
3. Save it as CSV.
4. Upload it to the same `_data` folder, replacing the old file.
5. Create a pull request for review.

## Content ownership rules

- Include a source or authorized owner for procedural changes.
- Never publish credentials, personal health information, confidential product data, or client-restricted material.
- Confirm Abbott-specific procedures with the authorized Abbott owner.
- Use meaningful pull-request descriptions.
- Require at least one PMO or process-owner approval before merging.

## Files PMO members should not edit

- `_layouts/default.html`
- `assets/styles.css`
- `assets/app.js`
- `_config.yml`
- `.github/workflows/pages.yml`
