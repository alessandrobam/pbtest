# PlanBuild SOP

GitHub Pages site for the PlanBuild Standard Operating Procedure.

## For PMO editors

Read [PMO-EDITING-GUIDE.md](PMO-EDITING-GUIDE.md). Written content is stored in `_sections`; tables are stored as CSV files in `_data`.

## Publishing

Merging to `main` runs the GitHub Pages workflow. In repository settings, set **Pages â†’ Source** to **GitHub Actions**.

## Structure

- `_sections/`: editable SOP content
- `_data/`: editable CSV tables
- `_layouts/`: protected site template
- `assets/`: protected design and search behavior
- `.github/workflows/pages.yml`: automated deployment

