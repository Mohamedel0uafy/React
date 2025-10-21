import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    setStagiaires([
      { id: 1, matricule: 1454, nom: "Alaoui", codepostal: 20400, ville: "Casa", moyenne: 12.56 },
      { id: 2, matricule: 1456, nom: "Mansouri", codepostal: 20400, ville: "Casa", moyenne: 14.67 },
      { id: 3, matricule: 1456, nom: "Ozlav", codepostal: 20400, ville: "Casa", moyenne: 13 },
      { id: 4, matricule: 1457, nom: "Kratos", codepostal: 86000, ville: "Idaoutanan", moyenne: 7 },
      { id: 5, matricule: 1458, nom: "Klein", codepostal: 90000, ville: "Zagora", moyenne: 18 },
    ]);
  }, []);

  const handleAdd = (newStagiaire) => {
    setStagiaires([...stagiaires, { ...newStagiaire, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setStagiaires(stagiaires.filter((s) => s.id !== id));
  };
  

  return (
    <StudentContext.Provider value={{stagiaires, setStagiaires, handleAdd, handleDelete }}>
      {children}
    </StudentContext.Provider>
  );
}
