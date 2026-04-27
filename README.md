# Decap CMS Portfolio Template

A fully static, reusable portfolio website template built with Next.js (App Router), Tailwind CSS, and Decap CMS. Designed for developers and non-technical users alike.

## Features

- **No Code Editing Required**: Manage all content via a beautiful CMS admin panel.
- **Dynamic Themes**: Switch between Minimal, Modern, and Developer themes instantly.
- **Fully Static & Fast**: Pre-rendered at build time (SSG) for maximum performance and SEO.
- **Git-Based Storage**: No database required. Content is stored as JSON and Markdown right in your repository.
- **Free Hosting**: Perfect for Netlify's free tier.

---

## 🚀 Getting Started (For Non-Developers)

1. **Clone this Template**: Click the green "Use this template" button at the top of the GitHub repository to create your own copy.
2. **Deploy to Netlify**: 
   - Go to [Netlify](https://app.netlify.com/) and sign in.
   - Click "Add new site" -> "Import an existing project".
   - Connect your GitHub and select your new repository.
   - Leave the build settings as default (`npm run build` and `out` directory) and click "Deploy site".
3. **Enable Identity & Git Gateway (Crucial for CMS)**:
   - In your Netlify dashboard, go to **Site configuration > Identity**.
   - Click **Enable Identity**.
   - Scroll down to **Services > Git Gateway** and click **Enable Git Gateway**.
   - In **Identity > Registration**, set it to **Invite only** (so others can't edit your site).
   - Invite yourself via email.
4. **Edit Your Site**:
   - Visit `your-site-url.com/admin`
   - Log in and start editing your portfolio visually!

---

## 💻 Development (For Developers)

### Setup Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. 
Note: The CMS admin panel (`/admin`) will only work locally if you run a local Git Gateway proxy, but you can edit the JSON and Markdown files in `/content` directly while developing.

### Adding a New Theme

1. Create a new component in `components/themes/YourTheme.tsx` implementing `ThemeProps`.
2. Open `components/themes/ThemeResolver.tsx` and add your theme to the `themes` object.
3. Open `public/admin/config.yml` and add your theme's key to the `theme` field's `options` array.

### Extending Content Models

To add new fields (e.g., an Awards section):
1. Add the field to the schema in `public/admin/config.yml`.
2. Add the field to the TypeScript interfaces in `types/index.ts`.
3. Update your theme components to render the new data.

---

## Directory Structure

- `/app`: Next.js App Router pages and layout.
- `/components/themes`: The theme engine and individual theme components.
- `/content`: Where all your data lives (JSON and Markdown).
- `/lib`: API functions to parse local files.
- `/public/admin`: Decap CMS configuration and entry point.
- `/types`: TypeScript definitions.

Built with ❤️ using Next.js & Decap CMS.
