
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ start = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : start));
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>
      {timeLeft}s
    </div>
  );
};

export default CountdownTimer;
