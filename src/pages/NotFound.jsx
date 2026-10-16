import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p className="lead" style={{ margin: '12px auto 24px' }}>That page does not exist or has moved.</p>
        <Link to="/" className="btn btn-dark">Back to home</Link>
      </div>
    </section>
  );
}
