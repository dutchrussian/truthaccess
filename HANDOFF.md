# Handoff — set this site up

Paste the block below to Claude Code, in the folder where this file lives.

---

## The prompt

> This folder is an Eleventy static site for truthaccess.org. Please set it up
> end to end and don't ask me to touch a dashboard unless you truly can't do it
> yourself.
>
> 1. Check it builds: `npm install` then `npm run build`. Output goes to `_site`.
>    Fix anything that fails before going further.
> 2. Create a GitHub repo called `truthaccess` under my account and push this
>    folder to it, with the files at the top level of the repo — NOT nested
>    inside a subfolder. Structure must be preserved exactly, including the
>    `src/_includes`, `src/_data`, `src/faq`, `src/guide`, `src/assets` folders
>    and the dotfiles `.pages.yml`, `.gitignore`, `.eleventy.js`.
>    Verify after pushing that `package.json` is at the repo root and that
>    `src/_includes/base.njk` exists in the pushed tree.
> 3. Deploy it to Netlify from that repo. Build command `npm run build`,
>    publish directory `_site`. Use the Netlify CLI. Tell me when I need to
>    authenticate in the browser.
> 4. Confirm the live URL works and that all three pages load: `/`, `/guide/`,
>    `/faq/`.
> 5. Then tell me exactly what to do about the domain truthaccess.org, which I
>    bought elsewhere — give me the DNS records or nameservers to enter, one
>    step at a time.
>
> Notes:
> - `wrangler.jsonc` is left over from a Cloudflare attempt. Delete it.
> - Don't restructure the site or rewrite the content. The text is final.
> - If a build fails, read the error and fix it rather than asking me to paste it.

---

## What this folder is

An Eleventy site. Three pages, all content in Markdown so it can be edited
through a browser editor afterwards.

```
package.json          dependencies and the build script
.eleventy.js          build config
.pages.yml            config for the Pages CMS editor
netlify.toml          tells Netlify how to build
src/
  index.njk           home page
  guide.njk           guide page
  faq.njk             FAQ page
  _includes/base.njk  the shared page shell — REQUIRED, build fails without it
  _data/site.json     wordmark, headings, video links, social links
  faq/*.md            one file per question
  guide/*.md          one file per chapter
  assets/style.css    all styling
_site/                pre-built output (see fallback below)
```

## Editing, once it's live

Go to **app.pagescms.org**, sign in with GitHub, pick the `truthaccess` repo.
It reads `.pages.yml` and gives you edit screens for the questions, the guide
chapters, and the site settings. Save publishes in about a minute.

## Fallback if anything goes wrong

The `_site` folder is the finished site with no build step involved. Go to
**app.netlify.com/drop** and drag the `_site` folder onto the page. It goes
live immediately. Editing then means editing HTML by hand, so this is a
last resort, but it is a working site in thirty seconds.
