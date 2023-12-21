import React, { useState, useEffect } from 'react';
import './stopWatch.css'; 

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    setRunning((prevrunning) => !prevrunning);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <h3>Time: {time}s</h3>
      <button onClick={handleStartStop}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  );
};

export default Stopwatch;

