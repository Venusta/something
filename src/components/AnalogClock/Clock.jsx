import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const secs = time.getSeconds();
  const secsDegrees = ((secs / 60) * 360) + 90;

  const mins = time.getMinutes();
  const minsDegrees = (((mins / 60) * 360) + 90);
  // const minsDegrees = (((mins / 60) * 360) + 90) + (secs / 60) * 6;

  const hours = time.getHours();
  const hoursDegrees = ((((hours % 12) / 12) * 360) + 90) + (mins / 60) * 30;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const hourHandStyle = {
    transform: `rotate(${hoursDegrees}deg)`,
    backgroundColor: "pink",
  };

  const minHandStyle = {
    transform: `rotate(${minsDegrees}deg)`,
    backgroundColor: "tomato",
  };

  const secondHandStyle = {
    transform: `rotate(${secsDegrees}deg)`,
  };

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={hourHandStyle} />
        <div className="hand min-hand" style={minHandStyle} />
        <div className="hand second-hand" style={secondHandStyle} />
      </div>
    </div>
  );
};

export default Clock;
