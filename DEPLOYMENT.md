# GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## How it works

The deployment workflow is defined in `.github/workflows/deploy.yml` and performs the following steps:

1. **Build the Application**
   - Checks out the repository
   - Sets up Node.js 20 with npm caching
   - Installs dependencies with `npm ci`
   - Builds the Vite application with `npm run build`
   - Uploads the `dist` folder as a GitHub Pages artifact

2. **Deploy to GitHub Pages**
   - Deploys the artifact to GitHub Pages
   - Makes the site available at the custom domain (matmilux.pl)

## Automatic Deployments

The workflow automatically triggers on:
- **Push to main branch**: Any commit to the main branch will trigger a new deployment
- **Manual trigger**: Can be manually triggered from the Actions tab

## Build Output

The build process:
- Transpiles and bundles all TypeScript/React code
- Bundles CSS using Tailwind
- Copies static assets from the `public/` folder
- Generates optimized production assets in the `dist/` folder

### Files in dist/
- `index.html` - Main entry point (and other HTML files for routes)
- `assets/` - Bundled JavaScript and CSS files
- `favicon.svg`, `icon.svg` - Icons
- `manifest.json` - PWA manifest
- `robots.txt`, `sitemap.xml` - SEO files
- `CNAME` - Custom domain configuration
- `.nojekyll` - Prevents Jekyll processing

## Troubleshooting

### MIME Type Errors
If you see errors like "Expected a JavaScript module script but the server responded with a MIME type of 'application/octet-stream'", this means raw source files are being served instead of the built files. The workflow should fix this by properly building and deploying the application.

### 404 Errors for Static Assets
If assets like `/icon.svg` return 404 errors, ensure:
1. The file exists in the `public/` folder
2. The workflow has completed successfully
3. The deployment has finished (check the Actions tab)

## Manual Deployment

To manually trigger a deployment:
1. Go to the Actions tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the main branch
5. Click "Run workflow"

## Local Development

To test the build locally:

```bash
# Install dependencies
npm ci

# Build the application
npm run build

# Preview the build
npm run preview
```

The build output will be in the `dist/` folder.
