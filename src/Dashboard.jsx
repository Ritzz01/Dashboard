import React from 'react'
import Counter from './Counter';
import Form from './Form';
import RichText from './RichText';
import { useState } from 'react';
import Beizer from './Beizer';
import './Dashboard.css'

function Dashboard() {
    const [count, setCount] = useState(0);

    // Update count in the App component from Counter
    const increase = () => {
      setCount(count + 1);
    };
  
    const decrease = () => {
      setCount(count - 1);
    };
  
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div className="board">
        <div className="Counter">
          <Counter 
            increase={increase} 
            decrease={decrease} 
            reset={reset} 
            count={count}
          />
        </div>
        <div className="RichText">
          <RichText />
        </div>
        <div className="Form">
          <Form />
        </div>
        <br />
        {/* Pass count to Beizer components */}
        <div className='Beizer-container '>
        <Beizer count={count} />
      
        <Beizer count={count} />
        <Beizer count={count} />

        </div>
      </div>
    );
  }
  

export default Dashboard