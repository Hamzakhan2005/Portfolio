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
      const directionTwo = dets.deltaY >= 0 ? "0" : "-100%";
      gsap.to(".tech-move-first ", {
        x: directionOne, // Moves the duplicated elements seamlessly
        duration: 10, // Adjust the speed
        ease: "linear",
        repeat: -1,
      });

      gsap.to(".tech-move-second ", {
        x: directionTwo, // Moves the duplicated elements seamlessly
        duration: 10, // Adjust the speed
        ease: "linear",
        repeat: -1,
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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
