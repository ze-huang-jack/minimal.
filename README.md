# Minimal Blog MVP (Apple Style)

This is a minimal blog template built with React, Vite, and Tailwind CSS. It features a clean, Apple-inspired design, local Markdown content simulation, and routing.

## Project Structure

*   `data/posts.ts`: Add your articles here.
*   `pages/`: Contains the route views.
*   `components/`: Reusable UI components.

## Deployment to Vercel

This project is optimized for zero-configuration deployment on Vercel.

**Steps:**

1.  **Push to GitHub/GitLab/Bitbucket:**
    Ensure this code is pushed to a Git repository.

2.  **Login to Vercel:**
    Go to [vercel.com](https://vercel.com) and log in.

3.  **Add New Project:**
    Click "Add New..." > "Project".

4.  **Import Repository:**
    Select your Git repository from the list.

5.  **Configure Project:**
    *   **Framework Preset:** Vercel should automatically detect `Vite`.
    *   **Root Directory:** `./` (default)
    *   **Build Command:** `npm run build` (default)
    *   **Output Directory:** `dist` (default)

6.  **Deploy:**
    Click "Deploy". Vercel will build the project and provide a live URL.

**Note on Routing:**
This project uses `HashRouter` (URLs look like `domain.com/#/posts/1`). This ensures the app works perfectly on static hosting services like Vercel or GitHub Pages without needing complex server-side rewrite rules for SPA routing.
