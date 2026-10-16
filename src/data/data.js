export const PACKAGES = [
  { id: 'express', name: 'Express Wash', price: 15, time: '15 min', blurb: 'A quick hand wash for a car that just needs a refresh.',
    items: ['Exterior hand wash', 'Wheel rinse', 'Air dry'] },
  { id: 'full', name: 'Full Clean', price: 35, time: '45 min', popular: true, blurb: 'Inside and out. Our most booked package.',
    items: ['Everything in Express', 'Interior vacuum', 'Windows in and out', 'Dashboard wipe'] },
  { id: 'detail', name: 'Showroom Detail', price: 89, time: '2 hrs', blurb: 'Deep clean and protection for paint and interior.',
    items: ['Everything in Full Clean', 'Clay bar and wax', 'Seat shampoo', 'Tyre dressing'] },
];

export const SIZES = [
  { id: 'car', label: 'Car', extra: 0 },
  { id: 'suv', label: 'SUV', extra: 10 },
  { id: 'van', label: 'Van / Truck', extra: 20 },
];

export const ADDONS = [
  { name: 'Engine bay clean', price: 20 },
  { name: 'Headlight restoration', price: 30 },
  { name: 'Pet hair removal', price: 15 },
  { name: 'Ceramic spray coat', price: 45 },
];

export const FAQS = [
  ['Do I need to book ahead?', 'Walk-ins are welcome, but booking guarantees your slot and skips the queue.'],
  ['What if it rains after my wash?', 'Come back within 48 hours and we will rinse it again for free.'],
  ['Can I cancel a booking?', 'Yes. Cancel up to two hours before your slot at no charge.'],
  ['Do you use harsh chemicals?', 'No. We use pH-neutral shampoo and microfibre cloths that are safe for paint and ceramic coatings.'],
];

export const REVIEWS = [
  { name: 'Daniel R.', text: 'My car looks better than the day I bought it. Friendly team and fair prices.' },
  { name: 'Sara M.', text: 'Booked online in a minute and it was ready when they said. Interior smelled amazing.' },
  { name: 'Imran K.', text: 'The detail package took out stains I thought were permanent. Worth every cent.' },
];

export const TEAM = [
  { name: 'Marcus Hale', role: 'Founder and lead detailer' },
  { name: 'Aisha Noor', role: 'Operations manager' },
  { name: 'Leo Brandt', role: 'Interior specialist' },
];

export const HOURS = [['Mon to Fri', '8am to 8pm'], ['Saturday', '8am to 6pm'], ['Sunday', '10am to 4pm']];
