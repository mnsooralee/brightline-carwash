import { Link } from 'react-router-dom';

export default function PackageCard({ pkg }) {
  return (
    <article className={`card pkg ${pkg.popular ? 'popular' : ''}`}>
      {pkg.popular && <span className="badge">Most popular</span>}
      <h3>{pkg.name}</h3>
      <p className="muted">{pkg.blurb}</p>
      <div className="price">${pkg.price}<small> / about {pkg.time}</small></div>
      <ul>{pkg.items.map((i) => <li key={i}>{i}</li>)}</ul>
      <Link to={`/book?pkg=${pkg.id}`} className="btn btn-dark">Choose {pkg.name.split(' ')[0]}</Link>
    </article>
  );
}
