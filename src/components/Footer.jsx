import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOURS } from '../data/data.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function subscribe(e) {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) setSent(true);
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">Brightline</div>
          <p>Hand car wash and detailing. Careful work, honest prices, and a car you are proud to drive.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/book">Book a wash</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Opening hours</h4>
          <ul>{HOURS.map(([d, t]) => <li key={d}>{d}: {t}</li>)}</ul>
        </div>
        <div>
          <h4>Get wash offers</h4>
          {sent ? (
            <p role="status">Thanks, you are on the list.</p>
          ) : (
            <form className="news" onSubmit={subscribe}>
              <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
              <button className="btn btn-light" type="submit">Join</button>
            </form>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Brightline Car Wash. All rights reserved.</span>
        <span>Privacy &middot; Terms</span>
      </div>
    </footer>
  );
}
