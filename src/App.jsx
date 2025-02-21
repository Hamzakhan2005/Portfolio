import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import Main from "./components/Main";
import Move from "./components/Move";
import TechStack from "./components/TechStack";
import Stalk from "./components/Stalk";
import { useGSAP } from "@gsap/react";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
gsap.registerPlugin(useGSAP);
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async operation (e.g., fetching data, animations)
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust time as needed
  }, []);
  let root = document.querySelector("#root");
  useGSAP(() => {
    root.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        duration: 2,
        ease: "back.out(2.5)",
      });
    });
  });
  return loading ? (
    <Loader />
  ) : (
    <>
      <div id="cursor"></div>

      <Main />
      <Move />
      <Projects />
      <TechStack />
      <Stalk />
    </>
  );
}

export default App;
