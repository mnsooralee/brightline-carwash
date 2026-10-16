import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Faq from '../components/Faq.jsx';
import { PACKAGES, SIZES } from '../data/data.js';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [size, setSize] = useState('car');
  const extra = SIZES.find((s) => s.id === size).extra;

  return (
    <>
      <PageHeader title="Simple pricing" subtitle="Choose your vehicle size to see your price." />
      <section className="section">
        <div className="container">
          <div className="toggle" role="group" aria-label="Vehicle size">
            {SIZES.map((s) => (
              <button key={s.id} aria-pressed={size === s.id} onClick={() => setSize(s.id)}>{s.label}</button>
            ))}
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Package</th><th>Time</th><th>Price</th><th></th></tr></thead>
              <tbody>
                {PACKAGES.map((p) => (
                  <tr key={p.id}>
                    <td><b>{p.name}</b></td>
                    <td>{p.time}</td>
                    <td className="strong">${p.price + extra}</td>
                    <td><Link to={`/book?pkg=${p.id}`} className="btn btn-dark">Book</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container narrow">
          <h2>Pricing questions</h2>
          <Faq />
        </div>
      </section>
    </>
  );
}
