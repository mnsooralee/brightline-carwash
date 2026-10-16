import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard.jsx';
import { PACKAGES, REVIEWS } from '../data/data.js';

const WHY = [
  ['Hand washed only', 'No brushes, no scratches. Every panel is washed by hand with clean microfibre.'],
  ['Gentle products', 'pH-neutral shampoo that is safe for paint, wax and ceramic coatings.'],
  ['Done on time', 'Book a slot and we hold it. Most washes are ready in under an hour.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>A cleaner car, done properly.</h1>
          <p>Hand car wash and detailing for people who notice the little things. Book online in under a minute.</p>
          <div className="row">
            <Link to="/book" className="btn btn-light">Book a wash</Link>
            <Link to="/pricing" className="btn btn-outline">View pricing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pick your clean</h2>
          <p className="lead">Three packages, clear prices, no surprises at the till.</p>
          <div className="grid-3">{PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}</div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Why drivers come back</h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {WHY.map(([t, d]) => (
              <div key={t} className="why"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What customers say</h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="card quote">
                <p>{r.text}</p>
                <footer>{r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready for a fresh start?</h2>
          <Link to="/book" className="btn btn-light">Book your wash</Link>
        </div>
      </section>
    </>
  );
}
