import React, { useEffect } from "react";
import "../styles/TransitionScreen.css";

const TransitionScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800); // 1.2s fill + 0.6s fade

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="transition-container">
      <div className="transition-light"></div>
    </div>
  );
};

export default TransitionScreen;
