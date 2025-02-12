import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

function handleIncrement(){
  setCount (count + 1);
}

function handleDecrement(){
  if (count !== 0){
    setCount (count - 1);
  }
}

function handleReset(){
  setCount(0);
}

  return <div>
    <h1>The Number: {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
  </div>
}

export default App;