# truthaccess.org

Three pages: home, guide, FAQ. Free to host. Text is edited through a browser
editor, with no code involved after setup.

---

## Part one — get it online (about 30 minutes, once)

### 1. Make a GitHub account

Go to **github.com** and sign up. Free. You need an email address and a password.
This account is the key to the editor later — you will not have to browse GitHub
or look at any code.

### 2. Put these files in a repository

On GitHub, click the **+** at the top right, then **New repository**. Name it
`truthaccess`. Leave it Public or set it Private, either works. Click
**Create repository**.

On the next screen click **uploading an existing file**. Drag in everything from
this folder except the `_site` and `node_modules` folders. Click
**Commit changes**.

### 3. Connect Cloudflare

Go to **dash.cloudflare.com** and sign up. Free.

In the left menu choose **Workers & Pages**, then **Create**, then the **Pages**
tab, then **Connect to Git**. Authorise GitHub and pick the `truthaccess`
repository.

On the build settings screen enter exactly:

| Field | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `_site` |

Click **Save and Deploy**. After a minute or two you get a working address
ending in `.pages.dev`. Open it and check the site is there.

### 4. Point your domain at it

Still in Cloudflare Pages, open your project, go to **Custom domains**, click
**Set up a custom domain**, and type `truthaccess.org`.

Cloudflare will show you two nameservers. Log in to wherever you bought the
domain, find the nameserver or DNS settings, and replace what is there with the
two Cloudflare gave you. This can take a few hours to take effect. Nothing else
is needed — the certificate and `www` handling are automatic.

### 5. Turn on the editor

Go to **app.pagescms.org** and click **Sign in with GitHub**. Grant it access to
the `truthaccess` repository only. It reads the `.pages.yml` file already in this
folder and builds the editing screens from it.

Bookmark that address. It is where you write from now on.

---

## Part two — editing

Everything below happens at **app.pagescms.org**. Changes go live roughly a
minute after you press Save.

**FAQ questions.** One entry per question. Each has the question, the answer, a
position number, and a tick box for whether it shows on the home page. To add a
question, click **Add an entry**. To reorder, change the position numbers.

**Guide chapters.** Same shape. Each has a heading, the chapter text, a position
number, a tick box for the home page box, and a shorter label to use there. The
`01` `02` `03` numbers on the page follow the position numbers on their own.

**Site settings.** One screen holding the page headings, the wordmark, the two
video links and the three social links. This is where you paste the YouTube,
Instagram and TikTok addresses when you have them.

### Two things to be careful with

The **Link name** field on each entry is what other parts of the site point at.
`what-is-ego` and `ego` are both currently linked to from elsewhere. Renaming
one breaks the link that points to it.

Links between pages are written as `/guide/#ego` and `/faq/#what-is-ego`.
Keep that form if you add more.

---

## Working on it locally (optional)

```
npm install
npm start
```

Then open `http://localhost:8080`.
