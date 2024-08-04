import { useState } from "react";
import './style/global.scss'

export const App = () => {
  const [state, setState] = useState(0);
  const inc = () => setState(prev => prev + 1);
  return (
    <div className="app">
      <h1>Hello world {state}</h1>
      <button onClick={inc}>Click</button>
    </div>
  )
}