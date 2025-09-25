# The Trendy House — Static Website

A fast, mobile-friendly one-page site for interior, exterior, and civil works.

## Quick Start
1. Download the ZIP and extract it.
2. Open `index.html` in your browser to preview.

## Publish for Free — GitHub Pages
1. Create a GitHub account (if needed) at https://github.com.
2. Create a new repository (e.g., `the-trendy-house`).
3. Upload all files/folders from this project to the repo root.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then **Save**.
7. Wait ~1–2 minutes. Your site will be live at `https://<your-username>.github.io/the-trendy-house/`.

## Alternative — Netlify (Drag & Drop)
1. Go to https://app.netlify.com/ and sign in.
2. Click **Add new site → Deploy manually**.
3. Drag & drop the extracted folder. Netlify will give you a free URL.

## Customize
- Replace the logo image URL in `index.html` (currently using your Google image link). Or provide a `logo.png` in `assets/img/` and change the `<img src>` path.
- Update your contact email/phone/WhatsApp in the **Quote** and **Contact** sections.
- Add your project photos to `assets/img/portfolio` and replace the placeholders in the **Projects** section.
- Change brand color in `assets/css/styles.css` by editing `--primary` and `--accent`.

## Notes
- The contact form uses `mailto:` which opens the visitor’s email app. For a form backend (Netlify Forms, Formspree), ask me and I’ll wire it up.
- All assets are static (HTML/CSS/JS). No server needed.
