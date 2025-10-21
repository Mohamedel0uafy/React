import { useContext } from "react";
import { StudentContext } from "./stgrcontext.jsx";
import { Link } from "react-router-dom";

export default function Liststgr() {
  const { stagiaires, handleDelete } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <h3 className="text-center">Liste des Stagiaires</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Moyenne</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.matricule}</td>
              <td>{s.nom}</td>
              <td>{s.ville}</td>
              <td>{s.codepostal}</td>
              <td>{s.moyenne}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>
                  Supprimer
                </button>
                <Link to={`/edit/${s.id}`} className="btn btn-warning btn-sm ms-2">
                  Éditer
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="btn btn-success mt-3">
        Ajouter un stagiaire
      </Link>
    </div>
  );
}
