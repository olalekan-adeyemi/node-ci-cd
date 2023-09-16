import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await axios.get("http://localhost:9000/api");
    console.log(response);
    setName(response.data);
  };

  return (
    <>
      <h1>
        React + Node - CI/CD <br /> Deployment with Github Actions
      </h1>
      <div className="card">
        <h3>Developer - {name}</h3>
      </div>
    </>
  );
}

export default App;
