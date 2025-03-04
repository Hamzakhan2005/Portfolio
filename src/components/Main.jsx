import React, { useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "../styles/Main.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Main = () => {
  const content = useRef();
  const pathRef = useRef();
  const h1Refs = useRef([]);
  useGSAP(() => {
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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // This animation runs only if the screen width is 768px or more
      gsap.to(".intro-circle", {
        duration: 0.1,

        scrollTrigger: {
          trigger: ".intro-circle",
          scroller: "body",
          // markers: true,
          start: "top 60%",
          scrub: 5,
        },
        fontSize: 15,
        y: 250,
        x: -400,
        scaleX: 3.5,

        borderRadius: 47,
      });

      return () => {
        // Cleanup function (runs when the condition is no longer met)
        gsap.killTweensOf(".intro-circle");
      };
    });
  }, []);
  var path = `M 10 100 Q 450 10 890 100`;
  var finalPath = `M 10 100 Q 450 100 890 100`;

  useEffect(() => {
    const handleMouseMove = (dets) => {
      const boundingBox = content.current.getBoundingClientRect();
      const relativeY = dets.clientY - boundingBox.top;
      const relativeX = dets.clientX - boundingBox.left;
      path = `M 10 100 Q ${relativeX} ${relativeY} 890 100`;

      gsap.to(pathRef.current, {
        attr: { d: path },
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1, 0.2)",
      });
    };

    const element = content.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const boxRef = useRef();

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
        <section className="intro-heading">
          <h1 ref={(el) => (h1Refs.current[0] = el)}>Mohammad </h1>{" "}
          <h1
            ref={boxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="intro-name"
          >
            Hamza
          </h1>{" "}
          <h1 ref={(el) => (h1Refs.current[1] = el)} className="last-line">
            Khan{" "}
          </h1>
        </section>

        <div className="intro-content">
          <div className="intro-circle">
            <div className="intro-text">
              I'm a bachelors student in Computer Science . A web developer and
              adept in problem solving.
            </div>
          </div>
          <div ref={content} className="intro-svg-container">
            <svg
              width="900"
              height="200"
              className="intro-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={pathRef}
                d="M 10 100 Q 450 100 890 100"
                stroke=" gainsboro"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
