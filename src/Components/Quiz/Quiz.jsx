import React from 'react';
import './Quiz.css';

function Quiz() {
  return (
    <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>1. How many objects in javascript?</h2>
        <ul>
            <li>Seven</li>
            <li>Eight</li>
            <li>Six</li>
            <li>Ten</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 question</div>
    </div>
  )
}

export default Quiz;