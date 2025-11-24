import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    setApiUrl(BACKEND_URL || "No backend URL configured");

    if (!BACKEND_URL) {
      setMessage("No backend URL configured");
      setError("REACT_APP_BACKEND_URL environment variable not set");
      return;
    }

    console.log("Attempting to fetch from:", `${API}/`);

    const helloWorldApi = async () => {
      try {
        const response = await axios.get(`${API}/`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response data:", response.data);
        setMessage(response.data.message || "Backend responded but no message");
        setError("");
      } catch (e) {
        console.error("Failed to fetch from API:", e);
        setMessage("Failed to connect to backend.");
        setError(e.message || "Unknown error");
      }
    };

    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your App</h1>
        <p>Full-stack code generation platform</p>

        <div style={{ marginTop: "30px", maxWidth: "600px" }}>
          <h2>Backend Connection Status</h2>
          <p>
            <strong>API URL:</strong> {apiUrl}
          </p>
          <p>
            <strong>Message from backend:</strong>{" "}
            <span style={{ color: error ? "#ef4444" : "#10b981" }}>
              {message}
            </span>
          </p>
          {error && (
            <div
              style={{
                backgroundColor: "#fee2e2",
                padding: "10px",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            >
              <strong>Error Details:</strong> {error}
            </div>
          )}
        </div>

        <div style={{ marginTop: "30px", maxWidth: "600px" }}>
          <h3>Test Information</h3>
          <ul style={{ textAlign: "left" }}>
            <li>Frontend runs on port 3000</li>
            <li>Backend should run on port 8000</li>
            <li>CORS is enabled on backend</li>
            <li>Check browser console for detailed logs</li>
            <li>
              After sandbox starts, update REACT_APP_BACKEND_URL in
              frontend/.env with preview URL
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
