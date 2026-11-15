# Portfolio site — milehighwebplug.github.io

Single-page static site. No build step, no invented clients.

## Contents
- `index.html` — the site. Title, overview, 3 service lines, 15 skills, HN demo
  (30 rows, 6/6 pytest, selector-fix story), How I Work (35/40/25, IP on final
  payment, $300/mo retainer), contact via Upwork / GitHub gulp7096.
- `hn_top30.csv` — the verified HN demo output (30 rows, copied 2026-11-12).
- `scraper.py` — the HN scraper as run (includes the `a[href^="user?id="]` fix).
- `verify_deliverable.py` — the 6-test pytest suite.
- `Proposal-HN-Frontpage-QA.md` — the HN client proposal.

## Deploy (org site, moved 2026-11-14)
The portfolio now lives on the Mile High Web Plug org site at
https://milehighwebplug.github.io/ — the org repo
`milehighwebplug/milehighwebplug.github.io` (main branch). It replaced the
MHWP website mirror there. The old personal site at gulp7096.github.io still
exists but is no longer the canonical portfolio.

1. Push this folder's contents to the org repo `milehighwebplug.github.io`,
   root (main branch).
2. Settings → Pages → Source: Deploy from a branch, branch `main`, folder `/ (root)`.
3. Visit https://milehighwebplug.github.io/ and check: title, HN table (top 5 rows),
   and the four file links (hn_top30.csv, scraper.py, verify_deliverable.py,
   Proposal-HN-Frontpage-QA.md) all open.

## What NOT to add yet
- No last name, email, or phone on the page — James's resume header still says
  only "James" and those fields were left blank there too. Add them only when
  he supplies them.
- No Upwork profile URL — the profile title is on the page, but no URL was on
  file. Add the real profile link when known; do not guess it.
- No second demo yet — a middleware / OpenAPI demo was offered 2026-11-12 and
  James picked "find a first real job" instead. Add a second case study only
  when one is built and verified the same way.

## Local check
Open `index.html` in a browser, or: `python3 -m http.server 8000` in this
folder, then http://localhost:8000/
