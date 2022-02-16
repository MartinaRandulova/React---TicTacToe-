import React, { useState } from 'react';
import './Game.css';

const Square = (props) => {
  const [value, setValue] = useState(null);
  return (
    <button 
      className="square"
      onClick={props.onClickEvent}>
      {props.value}
    </button>
  )
}

export default Square;