import { useState } from "react";

export const App = () => {
  const [state, setState] = useState(0);
  const inc = () => setState(prev => prev + 1);
  return (
    <div>
      <h1>Hello world {state}</h1>
      <button onClick={inc}>Click</button>
    </div>
  )
}