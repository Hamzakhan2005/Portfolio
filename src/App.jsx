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
import { lazy, Suspense } from "react";

// Replace direct imports with lazy imports
const CircularGallery = lazy(() => import("./components/Gallery"));
const InfiniteMenu = lazy(() => import("./components/InfiniteMenu"));

// Then in your render function, wrap with Suspense
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
    // Throttle function implementation
    function throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }

    // Throttled handler
    const handleMouseMove = throttle(function (dets) {
      gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        ease: "power2.out",
      });
    }, 16); // ~60fps

    root.addEventListener("mousemove", handleMouseMove);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return loading ? (
    <Loader />
  ) : (
    <>
      <div id="cursor"></div>

      <Main />
      <Move />
      <Suspense fallback={<div>Loading...</div>}>
        <InfiniteMenu items={items} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </Suspense>
      {/* <Projects /> */}
      <TechStack />

      <Stalk />
    </>
  );
}

export default App;
