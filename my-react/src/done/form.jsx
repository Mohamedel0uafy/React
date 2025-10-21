import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        const data = {name, age, email, gender, phone};
        navigate("/res", {state: data});
    }

    return(

        <div className="container mt-5">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age:</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;