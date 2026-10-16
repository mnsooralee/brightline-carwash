# Brightline Car Wash (React + Vite + React Router)

## Run it
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Structure
    src/
      main.jsx          entry + BrowserRouter
      App.jsx           routes + layout
      index.css         all styling (design tokens at the top)
      data/data.js      packages, sizes, FAQs, reviews, team
      components/       Navbar, Footer, PageHeader, Faq, PackageCard
      pages/            Home, Services, Pricing, Booking, About, Contact, NotFound

Change colours in the `:root` block of `src/index.css`.
