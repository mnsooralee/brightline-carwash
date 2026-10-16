import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { PACKAGES, SIZES, ADDONS } from '../data/data.js';

const SLOTS = ['09:00', '11:00', '13:00', '15:00', '17:00'];

export default function Booking() {
  const [params] = useSearchParams();
  const initial = PACKAGES.some((p) => p.id === params.get('pkg')) ? params.get('pkg') : 'full';

  const [pkgId, setPkgId] = useState(initial);
  const [size, setSize] = useState('car');
  const [addons, setAddons] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', date: '', slot: SLOTS[0] });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const pkg = PACKAGES.find((p) => p.id === pkgId);
  const sz = SIZES.find((s) => s.id === size);
  const addonTotal = ADDONS.filter((a) => addons.includes(a.name)).reduce((sum, a) => sum + a.price, 0);
  const total = pkg.price + sz.extra + addonTotal;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggleAddon = (name) => setAddons(addons.includes(name) ? addons.filter((a) => a !== name) : [...addons, name]);

  function submit(e) {
    e.preventDefault();
    const errs = {};
    if (form.name.trim().length < 2) errs.name = 'Enter your name.';
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.';
    if (!form.date) errs.date = 'Pick a date.';
    else if (new Date(form.date) < new Date(new Date().toDateString())) errs.date = 'Choose today or a later date.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true); // TODO: send to your API here
  }

  const Choice = ({ items, value, onPick, label }) => (
    <div className="opts" role="group" aria-label={label}>
      {items.map((i) => (
        <button type="button" key={i.id} className="opt" aria-pressed={value === i.id} onClick={() => onPick(i.id)}>{i.name || i.label}</button>
      ))}
    </div>
  );

  const Field = ({ name, label, type }) => (
    <label>{label}
      <input name={name} type={type} value={form[name]} onChange={update} aria-invalid={!!errors[name]} />
      {errors[name] && <span className="err">{errors[name]}</span>}
    </label>
  );

  if (done) {
    return (
      <>
        <PageHeader title="You are booked" />
        <section className="section"><div className="container narrow">
          <div className="card">
            <h3>{pkg.name} for {form.name}</h3>
            <p className="muted">{form.date} at {form.slot}. Total ${total}. We will confirm by text.</p>
            <button className="btn btn-dark" onClick={() => setDone(false)}>Make another booking</button>
          </div>
        </div></section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Book your wash" subtitle="Pick a package, a time, and we will do the rest." />
      <section className="section">
        <div className="container book">
          <form onSubmit={submit} noValidate>
            <h3>1. Package</h3>
            <Choice items={PACKAGES} value={pkgId} onPick={setPkgId} label="Package" />
            <h3>2. Vehicle</h3>
            <Choice items={SIZES} value={size} onPick={setSize} label="Vehicle size" />
            <h3>3. Add-ons</h3>
            <div className="opts">
              {ADDONS.map((a) => (
                <button type="button" key={a.name} className="opt" aria-pressed={addons.includes(a.name)} onClick={() => toggleAddon(a.name)}>
                  {a.name} (+${a.price})
                </button>
              ))}
            </div>
            <h3>4. Your details</h3>
            <Field name="name" label="Full name" type="text" />
            <Field name="phone" label="Phone" type="tel" />
            <div className="two">
              <Field name="date" label="Date" type="date" />
              <label>Time
                <select name="slot" value={form.slot} onChange={update}>{SLOTS.map((s) => <option key={s}>{s}</option>)}</select>
              </label>
            </div>
            <button className="btn btn-dark" type="submit">Confirm booking</button>
          </form>

          <aside className="summary">
            <h3>Your order</h3>
            <dl>
              <dt>{pkg.name}</dt><dd>${pkg.price}</dd>
              <dt>{sz.label}</dt><dd>${sz.extra}</dd>
              <dt>Add-ons</dt><dd>${addonTotal}</dd>
            </dl>
            <div className="total"><span>Total</span><span>${total}</span></div>
          </aside>
        </div>
      </section>
    </>
  );
}
