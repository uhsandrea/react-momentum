import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  const period = hours < 12 ? "AM" : "PM";
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  } 
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <div className="clock">
      <span className="hours">{hours}:</span>
      <span className="minutes">{minutes}</span>
      <span className="period">{period}</span>
    </div>
  );
}

export default Clock;