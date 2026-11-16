# We Care Medical Zone — Next.js Build

A pixel-faithful Next.js (App Router) port of the original static
`we-care-medical-zone` HTML/CSS/JS site for Dr. Salama Hanif's clinic
in Raebareli. Same design, same content, same Bootstrap 5 look —
rebuilt as a modern, component-based Next.js app.

## Tech Stack

- **Next.js 16** (App Router, JavaScript, no TypeScript)
- **React 19**
- **Bootstrap 5.3** (npm package) + **Bootstrap Icons** for the exact
  original look, loaded globally in `app/layout.js`
- **Google Fonts** — Playfair Display + DM Sans (same as original)
- Bootstrap's JS bundle (navbar collapse, modal, accordion) is loaded
  via `next/script` from the CDN, so all `data-bs-toggle` /
  `data-bs-target` markup works exactly like the original static site
  with zero extra JS written for it.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.js             Root layout — fonts, Bootstrap CSS/JS, Navbar/Footer/Modal
  globals.css           Ported style.css + a few extra utility classes
  page.js               Home page
  about/page.js          /about
  services/page.js       /services
  treatments/page.js     /treatments
  gallery/page.js        /gallery
  blog/page.js           /blog
  appointment/page.js    /appointment  (full booking form)
  contact/page.js        /contact
components/
  Navbar.jsx             Sticky nav, active-link highlighting (usePathname)
  Footer.jsx             Site-wide footer (fullest variant, used on every page)
  AppointmentModal.jsx   The "Book Appointment" modal used site-wide
  AppointmentPageForm.jsx  Full form on the dedicated /appointment page
  ContactForm.jsx        Contact page form (simulated send)
  PageHero.jsx           Shared breadcrumb + title header for inner pages
  Counter.jsx            Animated stat counters (5000+, 10+, 15+, etc.)
  ScrollReveal.jsx       Fade-up-on-scroll + navbar scroll shadow
lib/
  data.js                All site content (services, treatments, testimonials,
                         gallery items, blog posts, nav links, clinic info)
                         — edit this file to change site copy without
                         touching component/page markup.
```

## What changed vs. the original static site (and why)

The **visual design is identical** — same colors, spacing, fonts,
cards, buttons, hero, modal, accordion, animations. A few things were
tidied up along the way, standard practice when porting a static
multi-page site into a component-based framework:

- **Shared Navbar / Footer / Appointment Modal** live once in
  `app/layout.js` instead of being copy-pasted into all 8 HTML files.
  The footer and modal now consistently use the fullest version found
  on the original homepage (some inner pages had shortened footers).
- **Active nav link** is now driven by the real route (`usePathname`)
  instead of a small JS snippet reading `location.pathname`.
- **Repeated content** (service cards, treatment accordion, gallery
  tiles, testimonials, blog posts) is stored as data in `lib/data.js`
  and rendered with `.map()`, instead of being hand-repeated markup in
  every page. This makes future edits (add/remove a service, change a
  phone number, etc.) a one-line change instead of an 8-file find-and-replace.
- **Form submissions** (appointment modal, appointment page, contact
  page) keep the original's simulated "submit → spinner → success"
  behaviour, now implemented with React state instead of vanilla JS
  DOM swapping. No backend is wired up yet — hook up your API/email
  endpoint inside the `handleSubmit` functions in `AppointmentModal.jsx`,
  `AppointmentPageForm.jsx`, and `ContactForm.jsx`.
- All original external image URLs (hero photo, service thumbnails,
  Google Maps embeds) were kept as-is.

## Editing content

Almost everything text-based — the clinic's phone/address, service
list, treatments, testimonials, gallery captions, blog posts — lives
in **`lib/data.js`**. Change it there and it updates everywhere it's
used (home page, services page, footer, etc.).

## Notes

- No images were downloaded locally; the site still pulls the same
  hotlinked stock photos the original used. Swap `lib/data.js` image
  URLs for your own hosted images whenever you're ready.
- Forms are front-end only (simulated). Wire up a real submit handler
  (email service, CRM, WhatsApp API, etc.) before going live.
