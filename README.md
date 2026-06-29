# yurimalina.com

Static personal website for Yuri Malina, hosted on **GitHub Pages** with the custom domain
`yurimalina.com`. Migrated from Cargo Collective (June 2026), preserving the original
"Callisto" content, layout, and URLs.

## Structure

```
index.html              About (homepage)
About/                  redirect → / (preserves the old /About URL)
Publications/           Publications page
Press/                  Press page
404.html                not-found page
CNAME                   custom domain (yurimalina.com)
sitemap.xml, robots.txt
assets/css/style.css    cleaned Callisto theme styles
assets/js/views.js      view counter (GoatCounter live count + historical baseline)
assets/img/             header.jpg, favicon.ico
```

It's plain HTML/CSS — no build step. Edit a file, commit, push; GitHub Pages redeploys.

## Analytics

Two trackers run on every page:

1. **Google Analytics 4** — measurement ID `G-44FXMNKK89` (in each page's `<head>`).
2. **GoatCounter** — set up at `https://<CODE>.goatcounter.com`.

The visible `(N views)` counter (`assets/js/views.js`) shows the **live GoatCounter count plus a
per-page baseline** carried over from Cargo so the numbers continue where the old site left off:

| Page          | Path             | Baseline |
|---------------|------------------|----------|
| About / home  | `/`              | 4,336    |
| Publications  | `/Publications/` | 3,835    |
| Press         | `/Press/`        | 5,475    |

### GoatCounter setup (one time)
1. Sign up at https://www.goatcounter.com/ and create a site. The code you pick becomes your
   subdomain, e.g. `yurimalina` → `https://yurimalina.goatcounter.com`.
2. If you pick a code other than `yurimalina`, update it in **both**:
   - the `data-goatcounter="https://<CODE>.goatcounter.com/count"` script tag in each `*.html`
   - `GC_CODE` at the top of `assets/js/views.js`

## Custom domain / DNS (GoDaddy)

Point `yurimalina.com` at GitHub Pages. In GoDaddy's DNS manager:

| Type  | Name | Value                                         |
|-------|------|-----------------------------------------------|
| A     | @    | 185.199.108.153                               |
| A     | @    | 185.199.109.153                               |
| A     | @    | 185.199.110.153                               |
| A     | @    | 185.199.111.153                               |
| AAAA  | @    | 2606:50c0:8000::153                           |
| AAAA  | @    | 2606:50c0:8001::153                           |
| AAAA  | @    | 2606:50c0:8002::153                           |
| AAAA  | @    | 2606:50c0:8003::153                           |
| CNAME | www  | frnkmxwll.github.io                           |

Delete the old Cargo Collective A/CNAME records. After DNS propagates, enable **Enforce HTTPS** in
the repo's Settings → Pages. GitHub auto-redirects `www.yurimalina.com` → `yurimalina.com`.

## Local preview

```bash
cd ~/person_website
python3 -m http.server 8000
# open http://localhost:8000
```
