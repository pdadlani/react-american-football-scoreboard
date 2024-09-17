import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [time, setTime] = useState(900);
  const sec = (time % 60).toString().padStart(2, '0');
  const min = Math.floor(time / 60).toString().padStart(2, '0');
  useEffect(() => {
    setInterval(() => {
      setTime((newTime) => {
        return newTime-1;
      });
    }, 1000);
  }, []);
  return (
    <div className='timer'>{min}:{sec}</div>
  );
}

export default Timer;