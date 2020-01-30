import React from 'react';

import './Time.css';
const Time = props => {
  const { stateTime } = props;
  return (
    <div className='main'>
      <div className='badge'>
        <span id='made'>MADE IN REACT </span>DIGITAL CLOCK
      </div>
      <div className='clock'>{stateTime}</div>
    </div>
  );
};

export default Time;
