import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [steps, setSteps] = useState("");
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activityLevel, setActivityLevel] = useState("");
  const [image, setImage] = useState("");

  const handleCalculate = () => {
    if (steps === "" || steps <= 0) {
      alert("Veuillez entrer une valeur positive !");
      return;
    }

    const dist = (steps * 0.00078).toFixed(2);
    const cal = (steps * 0.04).toFixed(1);
    const dur = (steps / 100).toFixed(1);
    let level = "";
    let img = "";

    if (steps < 5000) {
      level = "Peu actif 🧘‍♂️";
      img = "https://media.giphy.com/media/3orieYzUkkpQbTzZqQ/giphy.gif"; // peu actif
    } else if (steps < 10000) {
      level = "Actif 🚶‍♂️";
      img = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"; // actif
    } else {
      level = "Très actif 🏃‍♂️";
      img = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTN2a2x4dTE5eGVoZ3BoYTQ1MW02bW03c29kdnZ6YmhmcWcyemhzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CAYVZA5NRb529kKQUc/giphy.gif"; // très actif
    }

    setDistance(dist);
    setCalories(cal);
    setDuration(dur);
    setActivityLevel(level);
    setImage(img);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">
          👣 StepTracker - Suivi des pas
        </h2>

        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Entrez le nombre de pas effectués"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleCalculate}>
            Calculer
          </button>
        </div>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card border-info">
              <div className="card-body">
                <h5 className="card-title text-info">Distance</h5>
                <p className="card-text fs-5 fw-bold">{distance} km</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card border-warning">
              <div className="card-body">
                <h5 className="card-title text-warning">Calories brûlées</h5>
                <p className="card-text fs-5 fw-bold">{calories}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">Durée estimée</h5>
                <p className="card-text fs-5 fw-bold">{duration} min</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card border-success">
              <div className="card-body">
                <h5 className="card-title text-success">Niveau d'activité</h5>
                <p className="card-text fs-5 fw-bold">{activityLevel}</p>
                {image && (
                <div className="text-center mt-4">
                <img
                src={image}
                alt="niveau d'activité"
                style={{ width: "200px", borderRadius: "10px" }}
                />
                </div>
            )}
              </div>
            </div>
          </div>
        </div>

  
        

        <div className="mt-4">
          <p className="text-center mb-1 fw-bold">Objectif : 10 000 pas</p>
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: `${Math.min((steps / 10000) * 100, 100)}%`,
              }}
            >
              {Math.min((steps / 10000) * 100, 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
