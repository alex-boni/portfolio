import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1 className="text-3xl font-bold text-red-500">Proximamente  Disponible........</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Mientras juega con el contador
      </p>
    </>
  );
}

export default App;
