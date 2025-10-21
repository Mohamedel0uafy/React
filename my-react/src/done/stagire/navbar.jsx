import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">Gestion des Stagiaires</Link>
      <div>
        <Link to="/" className="btn btn-outline-light me-2">Liste</Link>
        <Link to="/add" className="btn btn-outline-light">Ajouter</Link>
      </div>
    </nav>
  );
}
