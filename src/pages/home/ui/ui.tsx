import React, { useState } from "react";

export const HomePageComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prev => prev + 1);
    throw new Error()
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={inc}>{count}</button>
    </div>
  )
}