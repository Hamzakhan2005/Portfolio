import React from "react";
import "../styles/Move.css";
import Cylinder from "./Cylinder";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CylinderGeometry } from "three";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

const Move = () => {
  function wheelAnim() {
    window.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
        gsap.to(".move-marque", {
          transform: "translateX(-200%)",
          repeat: -1,
          duration: 7,
          ease: "none",
        });
        gsap.to(".move-marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".move-marque", {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 7,
          ease: "none",
        });
        gsap.to(".move-marque img", {
          rotate: 0,
        });
      }
    });
  }
  wheelAnim();
  return (
    <div className="move">
      <div className="move-main">
        <div className="move-marque">
          <h1>Coolest Projects</h1>
          <img
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>
        <div className="move-marque">
          <h1>Coolest Projects</h1>
          <img
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>
        <div className="move-marque">
          <h1>Coolest Projects</h1>
          <img
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>
        <div className="move-marque">
          <h1>Coolest Projects</h1>
          <img
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>
      </div>
      <div className="move-cylinder">
        <Canvas flat camera={{ fov: 30 }}>
          <ambientLight intensity={0.5} />
          <Cylinder />
          <EffectComposer>
            <Bloom
              intensity={7.0} // The bloom intensity.
              luminanceThreshold={0}
              luminanceSmoothing={0}
              mipmapBlur // Enables or disables mipmap blur.
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default Move;
