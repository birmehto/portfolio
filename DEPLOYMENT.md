# Deployment Guide

This Next.js portfolio can be deployed to multiple platforms. Choose the one that fits your needs.

## 🚀 Vercel (Recommended)

Vercel is the easiest option for Next.js apps (made by the Next.js team).

### Option 1: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## 🌐 Netlify

### Via GitHub

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build your app
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 📦 Static Export (GitHub Pages, AWS S3, etc.)

If you want a fully static site:

1. Update `next.config.mjs`:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out/` folder to:
   - **GitHub Pages**: Use `gh-pages` package
   - **AWS S3**: Upload to S3 bucket with static hosting
   - **Cloudflare Pages**: Connect repo or upload folder

### GitHub Pages Example

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"

# Deploy
npm run deploy
```

---

## 🐳 Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

Update `next.config.mjs`:
```js
const nextConfig = {
  output: 'standalone',
};
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔧 Environment Variables

If you add environment variables later:

1. Create `.env.local` (already in `.gitignore`)
2. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

3. In deployment platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Docker**: Use `-e` flag or `.env` file

---

## ✅ Pre-Deployment Checklist

- [ ] Update personal info in `src/lib/constants/profile.js`
- [ ] Update projects in `src/lib/constants/projects.js`
- [ ] Update skills in `src/lib/constants/skills.js`
- [ ] Test build locally: `npm run build && npm start`
- [ ] Check all links work
- [ ] Verify responsive design
- [ ] Test dark/light theme toggle
- [ ] Update `package.json` metadata
- [ ] Add custom domain (optional)

---

## 🎯 Quick Start Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📊 Performance Tips

After deployment:
- Use [PageSpeed Insights](https://pagespeed.web.dev/) to test performance
- Enable Vercel Analytics (free tier available)
- Consider adding a CDN for assets
- Optimize images if you add real project screenshots

---

## 🆘 Troubleshooting

**Build fails:**
- Run `npm run build` locally first
- Check Node.js version (use v18+)
- Clear cache: `rm -rf .next node_modules && npm install`

**Styles not loading:**
- Ensure CSS modules are imported correctly
- Check build output for errors

**404 on refresh:**
- Vercel/Netlify handle this automatically
- For static hosting, configure redirects to `index.html`
