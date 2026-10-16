import PageHeader from '../components/PageHeader.jsx';
import PackageCard from '../components/PackageCard.jsx';
import { PACKAGES, ADDONS } from '../data/data.js';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <PageHeader title="Our services" subtitle="From a quick rinse to a full showroom detail." />
      <section className="section">
        <div className="container">
          <div className="grid-3">{PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <h2>Add-ons</h2>
          <p className="lead">Add any of these to a package when you book.</p>
          <ul className="addons">
            {ADDONS.map((a) => <li key={a.name}><span>{a.name}</span><b>+${a.price}</b></li>)}
          </ul>
          <Link to="/book" className="btn btn-dark" style={{ marginTop: 24 }}>Book with add-ons</Link>
        </div>
      </section>
    </>
  );
}
