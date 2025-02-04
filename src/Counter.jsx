import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import './App.css';

function Counter({ increase, decrease, reset, count }) {
  return (
    <div className="container">
      <h1>{count}</h1>
      <h2>Counter</h2>
      <div className="btn">
        <button onClick={increase}>
          <AddIcon />
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}

export default Counter;
