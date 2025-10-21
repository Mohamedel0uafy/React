import { useRef, useEffect, useContext, useState } from "react";
import { StudentContext } from "./stgrcontext.jsx";
import { useParams } from "react-router-dom";

export default function FormStagiaire() {
  const { stagiaires, setStagiaires, handleAdd } = useContext(StudentContext);
  const { id } = useParams(); // from /edit/:id
  const editIndex = id ? stagiaires.findIndex((s) => s.id === Number(id)) : null;

  const matricule = useRef();
  const nom = useRef();
  const ville = useRef();
  const codepostal = useRef();
  const moyenne = useRef();

  useEffect(() => {
    if (editIndex !== null && stagiaires[editIndex]) {
      const s = stagiaires[editIndex];
      matricule.current.value = s.matricule;
      nom.current.value = s.nom;
      ville.current.value = s.ville;
      codepostal.current.value = s.codepostal;
      moyenne.current.value = s.moyenne;
    }
  }, [editIndex, stagiaires]);

  const handleSubmit = () => {
    const newData = {
      matricule: matricule.current.value,
      nom: nom.current.value,
      ville: ville.current.value,
      codepostal: Number(codepostal.current.value),
      moyenne: Number(moyenne.current.value),
    };

    if (editIndex !== null) {
      const updated = [...stagiaires];
      updated[editIndex] = { ...updated[editIndex], ...newData };
      setStagiaires(updated);
    } else {
      handleAdd(newData);
    }

    matricule.current.value = "";
    nom.current.value = "";
    ville.current.value = "";
    codepostal.current.value = "";
    moyenne.current.value = "";
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-3">
        {editIndex !== null ? "Modifier le stagiaire" : "Ajouter un stagiaire"}
      </h4>

      <div className="card p-3 shadow-sm">
        <input type="number" ref={matricule} placeholder="Matricule" className="form-control mb-2" />
        <input type="text" ref={nom} placeholder="Nom" className="form-control mb-2" />
        <input type="text" ref={ville} placeholder="Ville" className="form-control mb-2" />
        <input type="number" ref={codepostal} placeholder="Code Postal" className="form-control mb-2" />
        <input type="number" step="0.01" ref={moyenne} placeholder="Moyenne" className="form-control mb-2" />

        <button className="btn btn-primary" onClick={handleSubmit}>
          {editIndex !== null ? "Mettre à jour" : "Ajouter"}
        </button>
      </div>
    </div>
  );
}
