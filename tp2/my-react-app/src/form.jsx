import {useRef, useState, useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";


export default function Form() {
    const { stagiaires, setStagiaires, handleAdd } = useContext(StagiaireContext);
    const {id} = useParams();
    const editIndex = id ? stagiaires.findIndex(s => s.matricule === parseInt(id)) : null;

    const matricule = useRef();
    const nom = useRef();
    const ville = useRef();
    const codepostal = useRef();
    const moyenne = useRef();


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

