import React, {useState, useEffect} from 'react';
import '../scss/WorkCircle.scss'

const WorkCircle = ({
  innerText
}) => {

  const popOut = () => {
    alert(innerText);
  }

  return(
    <div>
      <button 
        className='WorkCircle'
        onClick={() => popOut()}
      > 
        Click me! 
      </button>
    </div>
  );
}

export default WorkCircle;