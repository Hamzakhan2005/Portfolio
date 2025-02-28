import React from "react";
import "../styles/TechStack.css";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const TechStack = () => {
  useEffect(() => {
    const handleWheel = (dets) => {
      const directionOne = dets.deltaY >= 0 ? "-100%" : "0%";
      const directionTwo = dets.deltaY >= 0 ? "0%" : "-100%";

      gsap.to(".tech-move-first", {
        x: directionOne,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(".tech-move-second", {
        x: directionTwo,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    };

    // Touch event variables
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;

    // Detect touch start position
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    // Detect touch move
    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    };

    // Detect touch end and determine swipe direction
    const handleTouchEnd = () => {
      let deltaY = startY - endY; // Vertical movement (scrolling)

      if (Math.abs(deltaY) > 50) {
        // Only trigger if swipe distance is significant
        handleWheel({ deltaY }); // Simulate `wheel` event
      }
    };

    // Add event listeners for both desktop and mobile
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup function (useful if inside React's `useEffect`)
    const cleanup = () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    // Call cleanup when necessary
    // cleanup();
  }, []);

  return (
    <div className="tech">
      <div className="tech-content">
        <img className="tech-svg" src="/code.svg" alt="" />
        <div className="tech-content-main">
          <h1 className="tech-span">I THINK AND SPEAK MAINLY</h1>
          <h1>JAVA, JAVASCRIPT, NODE, REACT. </h1>
          <h1>THAT’S EVERYTHING YOU NEED!</h1>
        </div>
      </div>
      <div className="tech-move-first">
        <div className="tech-move-marque">
          <img src="/html.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/java.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/js.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img className="mongo-svg" src="/mongodb.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/nodejs.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/python.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/react.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/web.svg" alt="" />
        </div>

        <div className="tech-move-marque">
          <img src="/html.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/java.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/js.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img className="mongo-svg" src="/mongodb.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/nodejs.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/python.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/react.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/web.svg" alt="" />
        </div>
      </div>
      <div className="tech-move-second">
        <div className="tech-move-marque">
          <img src="/html.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/java.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/js.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img className="mongo-svg" src="/mongodb.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/nodejs.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/python.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/react.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/web.svg" alt="" />
        </div>

        <div className="tech-move-marque">
          <img src="/html.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/java.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/js.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img className="mongo-svg" src="/mongodb.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/nodejs.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/python.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/react.svg" alt="" />
        </div>
        <div className="tech-move-marque">
          <img src="/web.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
