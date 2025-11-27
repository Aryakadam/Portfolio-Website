# Portfolio-Website

Portfolio website for Arya Kadam - Data Analyst & Engineer

Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Modern, responsive design
- Data visualization components
- Project showcase
- Skills and experience sections
- Contact form

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Express (Backend)
- Framer Motion (Animations)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5000`

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── src/              # React source files
├── public/           # Static assets
├── server/           # Express backend
├── shared/           # Shared schemas
└── index.html        # Root HTML file
```

## Deployment

### Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this portfolio website. It's free and provides automatic deployments from GitHub.

1. **Connect your GitHub repository:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `Portfolio-Website` repository

2. **Configure the project:**
   - Vercel will automatically detect the Vite configuration
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist/public` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live in minutes!

Your site will be available at `https://your-project-name.vercel.app`

### Option 2: Deploy to Render

Render provides full-stack hosting with a free tier.

1. **Create a Render account:**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create a new Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `Portfolio-Website` repository

3. **Configure the service:**
   - Name: `portfolio-website` (or your preferred name)
   - Environment: `Node`
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment Variables:
     - `NODE_ENV`: `production`
     - `PORT`: `10000` (Render sets this automatically, but you can specify)

4. **Deploy:**
   - Click "Create Web Service"
   - Render will build and deploy your site

Your site will be available at `https://your-service-name.onrender.com`

### Option 3: Deploy to Netlify

Netlify is another great option for static sites.

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist/public`

3. **Deploy:**
   - Click "Deploy site"

Your site will be available at `https://your-site-name.netlify.app`

