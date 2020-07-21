import React, {useState, useEffect} from 'react';
import TextDisplay from './TextDisplay';
import '../scss/WorkCircle.scss'

const WorkCircle = ({
  innerText,
  jobTitle,
  dates
}) => {

  const [displayInner, setDisplayInner] = useState(false);

  const toggleDisplay = () => {
    setDisplayInner(displayInner => !displayInner);
  }

  return(
    <div>
      <button 
        className='WorkCircle'
        onClick={() => toggleDisplay()}
      > 
        <div className="jobTitle">{jobTitle}</div>
        <div className="dates">{dates}</div>
      </button>
      {displayInner ? <TextDisplay className='display' innerText={innerText} toggleDisplay={toggleDisplay}/> : null}
    </div>
  );
}

export default WorkCircle;