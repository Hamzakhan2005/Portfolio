import React from "react";
import "../styles/Stalk.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stalk = () => {
  const links = [
    {
      name: "LINKEDIN",
      className: "linkedin",
      handleClick: () => {
        window.open("https://www.linkedin.com/in/-hamzakhan-/");
      },
    },
    {
      name: "LEETCODE",
      className: "leetcode",
      handleClick: () => {
        window.open("https://leetcode.com/u/hamza_p2/");
      },
    },
    {
      name: "GMAIL",
      className: "gmail",
      handleClick: () => {
        window.open("mailto:mohdhamzakhan2005@gmail.com");
      },
    },
    {
      name: "PHONE",
      className: "phone",
      handleClick: () => {
        navigator.clipboard
          .writeText("+9936012308")
          .then(() => alert("Phone number copied!"))
          .catch((err) => console.error("Error copying text: ", err));
      },
    },
    {
      name: "GITHUB",
      className: "github",
      handleClick: () => {
        window.open("https://github.com/Hamzakhan2005");
      },
    },
    {
      name: "INSTAGRAM",
      className: "instagram",
      handleClick: () => {
        window.open("https://www.instagram.com/hamza_p1_/?hl=en");
      },
    },
  ];

  useGSAP(() => {
    const stalkItems = document.querySelectorAll(".stalk-moves > div");

    stalkItems.forEach((item) => {
      const head = item.querySelector(".stalk-heading");
      const move = item.querySelector(".marquee-content");
      const tl = gsap.timeline({ paused: true });

      // Set initial state
      gsap.set(move, { xPercent: 0 });

      // Create animation timeline
      tl.to(item, {
        backgroundColor: "#e0fd60",
        duration: 0.3,
      });
      tl.to(
        move,
        {
          xPercent: -100,
          duration: 10,
          ease: "none",
          repeat: -1,
        },
        0
      );

      // Store timeline reference on the DOM element
      item.animation = tl;

      item.addEventListener("mouseenter", () => {
        gsap.to(head, { opacity: 0, duration: 0.3 });
        gsap.to(move.parentElement, { opacity: 1, duration: 0.3 });
        item.animation.restart().play();
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(move.parentElement, { opacity: 0, duration: 0.3 });
        gsap.to(head, { opacity: 1, duration: 0.3 });
        item.animation.pause().progress(0);
      });
    });

    return () => {
      stalkItems.forEach((item) => {
        item.animation?.kill();
      });
    };
  });

  return (
    <div className="stalk">
      <div className="stalk-head">
        <h1>Stalk Me!</h1>
      </div>
      <div className="stalk-moves">
        {links.map((link, index) => (
          <div
            key={index}
            className={`stalk-moves-marque-${link.className}`}
            onClick={link.handleClick}
          >
            <div className="stalk-heading">
              <h2>{link.name}</h2>
              <img src="up-arrow.svg" alt="arrow" />
            </div>
            <div className="stalk-moving">
              <div className={`marquee-content stalk-moving-${link.className}`}>
                <div className="marquee-inner">
                  {[...Array(8)].map((_, i) => (
                    <React.Fragment key={i}>
                      <h2>{link.name}</h2>
                      <img src="up-arrow-black.svg" alt="arrow" />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stalk;
