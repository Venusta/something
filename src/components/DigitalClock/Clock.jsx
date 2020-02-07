import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const secs = time.getSeconds().toString().padStart(2, "0");
  const mins = time.getMinutes().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const dayNumber = time.getDay();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // eslint-disable-next-line react/no-array-index-key
  const daysDisplay = () => days.map((day, index) => <div key={`day-${index}`} className={dayNumber - 1 === index ? "day light-on" : "day"}>{day}</div>);

  return (
    <div className="clock">
      <div className="days">{daysDisplay()}</div>
      <div className="display">
        <div>{`${hours}:${mins}:${secs}`}</div>
        <div className="placeholder">88:88:88</div>
      </div>
    </div>
  );
};

export default Clock;
