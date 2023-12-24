import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let username = "USER_XYZ";
  return (
    <>
      <h1 className="bg-green-400">Tailwind Test</h1>
      <Card username={username} /> //Here we see that we can pass the
      properitesin the component.
    </>
  );
}

export default App;
