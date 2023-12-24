import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); //This hook is used to propogate the updated value on UI.

  //UI updation is managed by react, we can change the variable by logically in js but to update the updated value in each place in ui is managed by react.

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Your counter is zero");
    }
  };

  return (
    <>
      <h1>React with Rana</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
