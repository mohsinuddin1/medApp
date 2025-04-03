import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detectedLeaf, setDetectedLeaf] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const sendImageToAPI = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);
    let formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "https://medicineapi2-0.onrender.com/predict/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setLoading(false);
      if (response.data?.leaf_name) {
        setDetectedLeaf(response.data);
      } else {
        setDetectedLeaf({ leaf_name: "No valid leaf detected. Try another image." });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error processing image. Please try again.");
    }
  };

  const formatMedicinalProperties = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("**")) {
        return <p key={index} className="bold">{line.replace(/\*\*/g, "")}</p>;
      } else if (line.startsWith("*")) {
        return <li key={index}>{line.replace(/\*/g, "")}</li>;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="container">
      <header className="header">🌿 Ancestor Medicine by Mohsin and Rumman</header>
      <h1>Leaf Detection Web App</h1>
      
      <div className="card">
        {preview ? (
          <img src={preview} alt="Selected" className="preview-image" />
        ) : (
          <div className="placeholder">No Image Selected</div>
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" id="fileInput" />
        <label htmlFor="fileInput" className="button">Choose Image</label>

        <button className="button detect-button" onClick={sendImageToAPI} disabled={loading}>
          {loading ? "Processing..." : "Detect Leaf"}
        </button>
      </div>

      {detectedLeaf && (
        <div className="result">
          <h2>{detectedLeaf.leaf_name}</h2>
          {detectedLeaf.medicinal_properties && (
            <div>
              <h3>Medicinal Properties</h3>
              <div className="medicinal-properties">
                {formatMedicinalProperties(detectedLeaf.medicinal_properties)}
                <p className="disclaimer"><strong>Disclaimer:</strong> The information provided is for educational purposes only. Consult a healthcare professional before use.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;