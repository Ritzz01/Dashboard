import React from 'react';
import './App.css';

function Beizer({ count }) {

  const red = Math.min(count * 10, 255); 
  const green = Math.min(count * 5, 255); 
  const blue = Math.min(count * 20, 255);


  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div
      className="Beizer-container"
      style={{
        backgroundColor,
        transition: "background-color 0.5s cubic-bezier(0.42, 0, 0.58, 1.28)"
       
      }}
    >
      
    </div>
  );
}

export default Beizer;
