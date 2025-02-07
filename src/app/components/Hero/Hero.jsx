import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import Three.js
// Import the specific Vanta effect you want (e.g., NET, HALO, FOG, etc.)
import HALO from "vanta/dist/vanta.halo.min";

const Hero = ({ children }) => {
  // Add children prop
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null; // Store the Vanta effect instance

    if (vantaRef.current) {
      vantaEffect = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 350.0,
        minWidth: 250.0,
        baseColor: 0x0d1117,
        backgroundColor: 0x0d1117,
        xOffset: -0.001,
        yOffset: -0.08,
        size: 2.9,
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy(); // Clean up the effect on unmount
      }
    };
  });

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
