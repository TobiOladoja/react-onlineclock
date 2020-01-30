import React from 'react';

const Time = props => {
  const { stateTime } = props;
  return (
    <div>
      <h1> {stateTime} </h1>
    </div>
  );
};

export default Time;
