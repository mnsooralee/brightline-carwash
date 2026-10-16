import { useState } from 'react';
import { FAQS } from '../data/data.js';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {FAQS.map(([q, a], i) => (
        <div key={q}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {q} <span>{open === i ? '\u2212' : '+'}</span>
          </button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  );
}
