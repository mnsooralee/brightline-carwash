import PageHeader from '../components/PageHeader.jsx';
import { TEAM } from '../data/data.js';

const STATS = [['12,000+', 'cars washed'], ['9 years', 'in business'], ['4.9 / 5', 'average rating']];

export default function About() {
  return (
    <>
      <PageHeader title="About Brightline" subtitle="A small team that takes pride in every panel." />
      <section className="section">
        <div className="container narrow">
          <h2>Our story</h2>
          <p>We started with one bucket, one sponge, and a belief that a car wash should never leave swirl marks. Nine years on, we are still washing by hand and still caring about the details most places skip.</p>
          <p>Every member of our team is trained in paint safe washing, and we use only products we would put on our own cars.</p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container stats">
          {STATS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Meet the team</h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {TEAM.map((t) => (
              <div key={t.name} className="card person">
                <div className="avatar">{t.name.split(' ').map((w) => w[0]).join('')}</div>
                <h3>{t.name}</h3><p className="muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
