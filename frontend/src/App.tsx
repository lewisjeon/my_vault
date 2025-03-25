import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to connect to backend"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Jeon + React</h1>
      <p>
        Backend says: <strong>{message}</strong>
      </p>
    </div>
  );
}

export default App;
