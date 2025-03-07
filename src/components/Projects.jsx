import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import hoverEffect from "hover-effect";

gsap.registerPlugin(useGSAP);

const ProjectCard = ({ title, description, link, className, image }) => {
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    if (showEffect) {
      new hoverEffect({
        parent: document.querySelector(`.${className} .effect-container`),
        intensity: 0.7,
        image1: image,
        image2: image,
        displacementImage: "/overlay.png",
        imagesRatio: 0.77,
      });
    }
  }, [showEffect, className, image]);

  return (
    <div
      className={`projects-desc ${className}`}
      onMouseEnter={() => setShowEffect(true)}
      onMouseLeave={() => setShowEffect(false)}
      onClick={() => window.open(link, "_blank")}
    >
      {/* Initially Visible Content */}
      <div className={`projects-desc-inner ${showEffect ? "hidden" : ""}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {/* Hover Effect Container */}
      <div
        className={`effect-container ${showEffect ? "visible" : "hidden"}`}
      ></div>
    </div>
  );
};

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
  // const [showEffect, setShowEffect] = useState(false);
  // useEffect(() => {
  //   if (showEffect) {
  //     new hoverEffect({
  //       parent: document.querySelector(".effect-container"),
  //       intensity: 0.7,
  //       image1: "/wanderlust.jpg",
  //       image2: "/wanderlust.jpg",
  //       displacementImage: "/overlay.png",
  //       imagesRatio: 0.77,
  //     });
  //   }
  // }, [showEffect]);
  return (
    <div className="projects">
      <ProjectCard
        title="WanderLust"
        description="A fully functional Airbnb clone with authentication and more."
        link="https://github.com/Hamzakhan2005/Wanderlust"
        className="wanderlust"
        image="/wanderlust.jpg"
      />
      <ProjectCard
        title="OneFinance"
        description="A personal finance dashboard for viewing bank account details."
        link="https://github.com/Hamzakhan2005/OneFinance-webApp"
        className="oneFinance"
        image="/onefinance.jpg"
      />
      <ProjectCard
        title="Vibe-Check"
        description="An AI-powered app that dynamically transforms themes based on users' facial expressions."
        link="https://github.com/Hamzakhan2005/Vibe-Check"
        className="vibecheck"
        image="/vibecheck.jpg"
      />
    </div>
  );
};

export default Projects;
