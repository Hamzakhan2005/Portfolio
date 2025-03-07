import React, { useEffect } from "react";
import "../styles/Projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import hoverEffect from "hover-effect";

gsap.registerPlugin(useGSAP);

const Projects = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      // This animation runs only if the screen width is 768px or more
      gsap.to(".projects-desc", {
        transform: "translateX(-250%)",
        scrollTrigger: {
          trigger: ".projects",
          pin: true,
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
          scrub: 2,
        },
      });

      return () => {
        // Cleanup function (runs when the condition is no longer met)
        gsap.killTweensOf(".projects-desc");
      };
    });
  });
  useEffect(() => {
    var image_anim = new hoverEffect({
      parent: document.querySelector(".wanderlust"),
      intensity: 0.7,
      image1: "/image1.jpg",
      image2: "/wanderlust.jpg",
      displacementImage: "/overlay.png",
      imagesRatio: 0.77,
    });
  }, []);
  return (
    <div className="projects">
      <div
        className="projects-desc wanderlust"
        onClick={() =>
          window.open("https://github.com/Hamzakhan2005/Wanderlust", "_blank")
        }
      >
        <h1>WanderLust</h1>
        <p>
          A clone of Airbnb fully functional with database and authentication
          alongside many interesting features .
        </p>
      </div>
      <div
        className="projects-desc oneFinance"
        onClick={() =>
          window.open(
            "https://github.com/Hamzakhan2005/OneFinance-webApp",
            "_blank"
          )
        }
      >
        <h1>OneFinance</h1>
        <p>A personal finance dashboard for viewing bank account details .</p>
      </div>
      <div
        className="projects-desc vibecheck"
        onClick={() =>
          window.open("https://github.com/Hamzakhan2005/Vibe-Check", "_blank")
        }
      >
        <h1>Vibe-Check</h1>
        <p>
          An AI powered app that dynamically transforms themes based on users
          facial expressions .
        </p>
      </div>
    </div>
  );
};

export default Projects;
