import React, { useState, useEffect } from 'react';
import '../css/Sat.css';  

export const Sat: React.FC = () => {
  const [time, setTime] = useState(new Date()); 

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => {
      clearInterval(timerId);  
    };
  }, []); 

  return (
    <div className="clock">
      {time.toLocaleTimeString()}  
    </div>
  );
};
