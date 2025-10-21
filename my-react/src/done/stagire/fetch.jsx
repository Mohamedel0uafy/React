import React, { useState, useEffect } from "react";

function FetchPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(user => ({
          matricule: user.id,
          nom: user.name,
          ville: user.address.city,
          codePostal: user.address.zipcode,
          moyenne: Math.floor(Math.random() * 20)
        }));
        setUsers(formatted);
      })
      .catch(err => console.error("Erreur fetch:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Liste des utilisateurs</h2>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>matricule</th>
            <th>nom</th>
            <th>ville</th>
            <th>code postal</th>
            <th>moyenne</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{u.matricule}</td>
              <td>{u.nom}</td>
              <td>{u.ville}</td>
              <td>{u.codePostal}</td>
              <td>{u.moyenne}</td>
                <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   
  );
   function handleDelete(index){
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
}
}

export default FetchPage;
