# NovaTech Solutions - Business Website

A modern, responsive 5-page business website for a fictional web development agency, **NovaTech Solutions**. Built as a beginner-friendly frontend project with React, plain CSS and React Router.

## Features

- 5 pages: Home, Services, Portfolio, About, Contact
- Responsive navbar with a mobile hamburger menu
- Dark / light theme toggle (remembered between visits)
- Portfolio category filter (All, Web, Design, E-Commerce)
- Contact form with client-side validation and friendly error messages
- FAQ accordion on the Services page
- Hover effects, fade-in animations (reduced-motion friendly)
- Basic SEO: page titles, meta descriptions, Open Graph tags, JSON-LD data
- Basic accessibility: skip link, semantic HTML, labels, focus outlines, ARIA where needed

## Technologies Used

React 18, JavaScript (ES6+), HTML5, CSS3 (Variables, Flexbox, Grid), React Hooks (`useState`, `useEffect`), React Router, Vite.

## Installation

You need [Node.js](https://nodejs.org) (version 18 or newer).

```bash
cd business-website
npm install
```

## How to Run Locally

```bash
npm run dev       # start the dev server (open the URL shown, usually http://localhost:5173)
npm run build     # create the production build in /dist
npm run preview   # preview the production build
```

## Project Structure

```
business-website/
├── public/
│   ├── favicon.svg
│   └── _redirects          (Netlify: makes page refresh work)
├── src/
│   ├── components/         reusable pieces (Navbar, Footer, Button, cards...)
│   ├── pages/              Home, Services, Portfolio, About, Contact
│   ├── data/data.js        all text content: services, projects, team...
│   ├── App.jsx             routes + theme state
│   ├── main.jsx            app entry point
│   └── index.css           all styles
├── index.html              SEO tags, font, JSON-LD
├── package.json
└── vite.config.js
```

## Pages

| Page | What it contains |
|------|------------------|
| Home | Hero, feature cards, why choose us, statistics, testimonials, call to action |
| Services | 6 service cards, FAQ accordion |
| Portfolio | 6 projects with working category filters |
| About | Story, mission, vision, values, statistics, team |
| Contact | Contact details, business hours, validated form |

## Components

`Navbar`, `MobileMenu`, `ThemeToggle`, `Footer`, `Button`, `Hero`, `SectionTitle`, `FeatureCard`, `ServiceCard`, `PortfolioCard`, `TestimonialCard`, `TeamCard`, `StatsCard`, `ContactForm`, `FaqAccordion`, `CallToAction`, `Seo`.

- Content comes from `data.js` and is passed to components as **props**.
- **State** lives in: `App` (theme), `Navbar` (menu open/closed), `Portfolio` (active filter), `ContactForm` (values, errors, success), `FaqAccordion` (open question).

## How the Main Features Work

**Dark mode** - `App.jsx` keeps `theme` in state. A `useEffect` sets `data-theme="dark"` or `"light"` on the `<html>` tag and saves it in `localStorage`. In `index.css`, `:root[data-theme="dark"]` overrides the CSS variables, so every colour changes automatically. A small script in `index.html` applies the saved theme before React loads to avoid a flash.

**Portfolio filtering** - `Portfolio.jsx` stores `activeCategory` in state. `projects.filter(...)` keeps only projects whose category matches (or all projects for "All"). Clicking a button updates the state and React re-renders the list.

**Form validation** - `ContactForm.jsx` has a `validate()` function that returns an object of error messages. On submit it checks: required fields, email format (regex), phone (7-15 digits, allowed characters only) and message length (min 20 characters). If there are errors they appear under each field and focus moves to the first one; if not, a success message is shown. There is no backend.

## Responsive Design Strategy

- **Mobile-first CSS**: base styles are for phones; `min-width` media queries add layout for larger screens.
- Breakpoints: 768px (tablet), 1024px (desktop), 1440px (large desktop).
- **Grid** for cards/gallery/stats/team (1 column -> 2 -> 3 or 4); **Flexbox** for navbar, button groups and footer.
- Hamburger menu below 1024px; buttons and inputs are at least 44-48px tall for touch.
- Images use gradient placeholders, so nothing can overflow or fail to load.

## Accessibility Features

- Skip-to-content link, semantic landmarks (`header`, `nav`, `main`, `footer`)
- One `h1` per page, headings in order
- Every form input has a `<label>`; errors are linked with `aria-describedby`; success message uses `role="status"`
- Visible `:focus-visible` outlines; everything works by keyboard (Escape closes the mobile menu)
- Hamburger and accordion buttons use `aria-expanded`
- `prefers-reduced-motion` turns off animations
- Decorative emoji icons are hidden with `aria-hidden`

## Performance Optimization

- Very few dependencies (React, React Router)
- No large image files (CSS gradients + emoji)
- One CSS file, Vite production build (minified and bundled)
- Font loaded with `display=swap`

## Testing Instructions (Manual Checklist)

- [ ] All 5 pages load and the navbar links work
- [ ] Mobile menu opens/closes (resize the browser below 1024px)
- [ ] Dark mode toggle works and is remembered after refresh
- [ ] Portfolio filters change the visible projects
- [ ] Contact form shows errors for empty/invalid fields and a success message for valid input
- [ ] No horizontal scrolling at 320px, 768px, 1024px, 1440px widths
- [ ] Tab key moves through all links/buttons with a visible outline
- [ ] No errors in the browser console (F12 -> Console)

## Lighthouse Testing Instructions

1. Run `npm run build` then `npm run preview`.
2. Open the preview URL in **Google Chrome**.
3. Press `F12` -> open the **Lighthouse** tab.
4. Choose Mobile (then Desktop), tick Performance, Accessibility, Best Practices, SEO.
5. Click **Analyze page load** and record your own scores.

> No scores are claimed here - run Lighthouse yourself and write down the real results.

## Browser Compatibility

Designed for current versions of Chrome, Firefox, Edge and Safari.

## Deployment

- **Netlify**: build command `npm run build`, publish directory `dist` (the `_redirects` file is already included).
- **Vercel**: import the GitHub repo; it detects Vite automatically.

## Future Improvements

- Real backend or email service for the contact form
- Real project images and project detail pages
- Automated tests
- Blog page and multi-language support
