import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { HOURS } from '../data/data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const valid = form.name && /^\S+@\S+\.\S+$/.test(form.email) && form.message.length > 9;

  return (
    <>
      <PageHeader title="Get in touch" subtitle="Questions about a service or a booking? Send us a message." />
      <section className="section">
        <div className="container book">
          {sent ? (
            <div className="card" role="status"><h3>Message sent</h3><p className="muted">Thanks {form.name}, we will reply within one working day.</p></div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }}>
              <label>Name<input name="name" value={form.name} onChange={update} /></label>
              <label>Email<input name="email" type="email" value={form.email} onChange={update} /></label>
              <label>Message<textarea name="message" rows="5" value={form.message} onChange={update} /></label>
              <button className="btn btn-dark" disabled={!valid}>Send message</button>
            </form>
          )}
          <aside className="summary">
            <h3>Visit us</h3>
            <p>14 Clearwater Lane<br />Your City</p>
            <p>hello@brightline.example<br />(555) 010-2030</p>
            <h3 style={{ marginTop: 20 }}>Hours</h3>
            <dl>{HOURS.map(([d, t]) => <><dt key={d}>{d}</dt><dd>{t}</dd></>)}</dl>
          </aside>
        </div>
      </section>
    </>
  );
}
