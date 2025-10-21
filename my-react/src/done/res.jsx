import React from "react";
import { useLocation } from "react-router-dom";

function Res() {
    const {state} = useLocation();

    return(
        <div className="container mt-5">
            <h2>Submitted Data</h2>
            <ul className="list-group">
                <li className="list-group-item">Name: {state.name}</li>
                <li className="list-group-item">Age: {state.age}</li>
                <li className="list-group-item">Email: {state.email}</li>
                <li className="list-group-item">Gender: {state.gender}</li>
                <li className="list-group-item">Phone: {state.phone}</li>
            </ul>
        </div>
    );
}

export default Res;