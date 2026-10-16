import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [['/', 'Home'], ['/services', 'Services'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/contact', 'Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>Brightline</Link>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? '\u2715' : '\u2630'}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
          <Link to="/book" className="btn btn-light" onClick={close}>Book now</Link>
        </nav>
      </div>
    </header>
  );
}
