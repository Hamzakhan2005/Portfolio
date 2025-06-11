import React, { useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "../styles/Main.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dither from "./Dither";
import ScrambledText from "./ScrambledText";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Main = () => {
  const content = useRef();
  const pathRef = useRef();
  const h1Refs = useRef([]);
  useGSAP(() => {
    // gsap.to(".intro-text", {
    //   opacity: 1,
    //   // ease: "expo.out",
    //   fontSize: "1.5rem",
    //   fontWeight: 900,
    //   duration: 2,
    //   yoyo: true,
    //   repeat: -1,
    // });
    h1Refs.current.forEach((h1) => {
      if (!h1) return;

      const h1Text = h1.textContent;
      const splitText = h1Text.split("");
      const halfval = Math.ceil(splitText.length / 2);
      let clutter = "";

      splitText.forEach((elem, idx) => {
        clutter += `<span class="${idx < halfval ? "a" : "b"}">${elem}</span>`;
      });

      h1.innerHTML = clutter;
    });

    // Animate the text appearing
    gsap.from(".intro-heading h1 .a, .intro-name", {
      y: 90,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.15,
      opacity: 0,
    });

    gsap.from(".intro-heading h1 .b, .last-line", {
      y: 80,
      duration: 0.6,
      delay: 0.5,
      stagger: -0.15,
      opacity: 0,
    });
  }, []);
  var path = `M 10 100 Q 450 10 890 100`;
  var finalPath = `M 10 100 Q 450 100 890 100`;

  // useEffect(() => {
  //   const handleMouseMove = (dets) => {
  //     const boundingBox = content.current.getBoundingClientRect();
  //     const relativeY = dets.clientY - boundingBox.top;
  //     const relativeX = dets.clientX - boundingBox.left;
  //     path = `M 10 100 Q ${relativeX} ${relativeY} 890 100`;

  //     gsap.to(pathRef.current, {
  //       attr: { d: path },
  //       duration: 0.3,
  //       ease: "elastic.out(1, 0.3)",
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to(pathRef.current, {
  //       attr: { d: finalPath },
  //       duration: 1,
  //       ease: "elastic.out(1, 0.2)",
  //     });
  //   };

  //   const element = content.current;
  //   element.addEventListener("mousemove", handleMouseMove);
  //   element.addEventListener("mouseleave", handleMouseLeave);

  //   // Cleanup function to remove event listeners
  //   return () => {
  //     element.removeEventListener("mousemove", handleMouseMove);
  //     element.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);
  const boxRef = useRef();
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Mohammad Hamza Khan CV .pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };
  const handleMouseEnter = () => {
    gsap.to(boxRef.current, {
      backgroundPosition: "0% 0%",
      backgroundColor: "#e0fd60",
      color: "black",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      backgroundPosition: "0% 100%",
      backgroundColor: "transparent",
      color: "#e0fd60",
      ease: "power2.out",
    });
  };
  return (
    <>
      <div className="intro">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
        <section className="intro-heading">
          <h1 ref={(el) => (h1Refs.current[0] = el)}>Mohammad </h1>{" "}
          <h1
            ref={boxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="intro-name"
          >
            Hamza
          </h1>{" "}
          <h1 ref={(el) => (h1Refs.current[1] = el)} className="last-line">
            Khan{" "}
          </h1>
        </section>

        <div className="intro-about">
          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".:"}
          >
            I'm a bachelors student in Computer Science . A web developer and
            adept in problem solving.
          </ScrambledText>
        </div>
      </div>
    </>
  );
};

export default Main;
