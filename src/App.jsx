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
import CircularGallery from "./components/Gallery";
import InfiniteMenu from "./components/InfiniteMenu";

const items = [
  {
    image: "/freework.jpg",
    link: "https://github.com/Hamzakhan2005/IITR-HACKATHON",
    title: "Freework",
    description:
      "Freelancer app with milestone payments, escrow, work uploads, and dispute chat.",
  },
  {
    image: "/gameoflife.jpg",
    link: "https://github.com/Hamzakhan2005/game-of-life",
    title: "The Game Of Life",
    description:
      "A sleek display of Conway's the game of life with full functionality.",
  },
  {
    image: "/onefinance.jpg",
    link: "https://github.com/Hamzakhan2005/OneFinance-webApp",
    title: "One Finance",
    description:
      "A personal finance dashboard for viewing bank account details.",
  },
  {
    image: "/wanderlust.jpg",
    link: "https://github.com/Hamzakhan2005/Wanderlust",
    title: "WanderLust",
    description:
      "A fully functional Airbnb clone with authentication and more.",
  },
  {
    image: "/locora.jpg",
    link: "https://github.com/Hamzakhan2005/Locora",
    title: "Locora",
    description:
      "Locora connects neighbors to request and offer help instantly.",
  },
];

gsap.registerPlugin(useGSAP);
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      {/* <Projects /> */}
      <TechStack />

      <Stalk />
    </>
  );
}

export default App;
