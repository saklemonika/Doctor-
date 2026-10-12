Webix Dental Care — Dentacare
=============================

A responsive single-page React site for a dental clinic built with Vite. This repository contains the Dentacare website (also called "Webix Dental Care") showcasing services, doctors, appointment booking UI, testimonials and contact details.

Quick links
-----------

- Project root: [README.md](README.md)
- App entry: [src/main.jsx](src/main.jsx)
- Main component: [src/App.jsx](src/App.jsx)

Status: Local development ready (Vite + React). No backend included.

Features
--------

- Responsive layout and navigation
- Home, Services, About, Doctors, Appointment, Contact, FAQ sections
- Reusable React components under `src/components`
- Vite-powered dev server with HMR

Tech Stack
----------

- React (JSX)
- Vite (build/dev tooling)
- CSS (static files under `src/`)

Requirements
------------

- Node.js 16+ (recommended)
- npm or yarn

Installation
------------

1. Clone the repo and cd into the project:

```bash
git clone <repo-url>
cd Dentacare
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

Development
-----------

Start the Vite dev server with:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 (or the port Vite reports) to view the site.

Build & Preview
---------------

```bash
npm run build
npm run preview
# or
yarn build && yarn preview
```

Project Structure (key files)
-----------------------------

- [index.html](index.html) — App HTML template
- [vite.config.js](vite.config.js) — Vite configuration
- [package.json](package.json) — Scripts & dependencies
- [src/main.jsx](src/main.jsx) — App bootstrap
- [src/App.jsx](src/App.jsx) — Root component
- [src/components/] — React components:
  - [Home.jsx](src/components/Home.jsx)
  - [Services.jsx](src/components/Services.jsx)
  - [Doctor.jsx](src/components/Doctor.jsx)
  - [Appointment.jsx](src/components/Appointment.jsx)
  - [Contact.jsx](src/components/Contact.jsx)
  - [FAQsection.jsx](src/components/FAQsection.jsx)
  - [Testimonials.jsx](src/components/Testimonials.jsx)
  - [WhyChoose.jsx](src/components/WhyChoose.jsx)
  - [Trusted .jsx](src/components/Trusted .jsx)

Customization
-------------

- Update site text, images and assets in `src/` and `public/`.
- To add new pages or routes, integrate a router (e.g., React Router) and create new components under `src/components`.

Deployment
----------

The build output is generated in `dist/`. Deploy `dist/` to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.). Typical steps for Vercel/Netlify: connect repository and configure build command `npm run build` and publish directory `dist`.

Contributing
------------

Feel free to open issues or pull requests. Keep changes focused and include a short description of the work done.

License
-------

Specify a license for this project in `package.json` or add a `LICENSE` file.

---

If you'd like, I can also:

- Add more detailed deployment instructions for a specific host
- Add repository badges (build, license, preview link)
- Generate a small CONTRIBUTING.md and CODE_OF_CONDUCT.md
