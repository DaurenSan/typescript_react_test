import React from 'react';
import './card.css';
import AI from './AI.jpg';

export const Card = () => {

    return (
     <div className="Card-wrapper">
        <div className="Card-container">
            <div className="Column-one">
                <img src={AI}/>
            </div>
            <div className="Column-two">
                <h3>Февраль 2019</h3>
                <h2>Привлечение венчурного финансирования</h2>
                <p>
                We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use export default Button and import Button from './Button'.
                <br/>
                <br/>
                Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.
                </p>
                <span>65% реализовано</span>
            </div>
        </div>
        <div className="progress">
            <div className="Inside-progress"></div>
        </div>
     </div>
    );
  }
  
  