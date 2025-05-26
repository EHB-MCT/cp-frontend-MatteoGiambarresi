import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Notes() {
  const dragConstraints = {
    top: -50,
    bottom: 50,
    left: -50,
    right: 50,
  };

  const playSound = (file) => {
    const audio = new Audio(`./fable/sounds/${file}`);
    audio.play();
  };

  return (
    <ParallaxLayer offset={4.5} speed={0.2}>
      <div className="noteLayer" style={{ position: "relative" }}>
        <motion.img
          src="./fable/note.png"
          alt=""
          drag
          dragConstraints={dragConstraints}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer", position: "absolute" }}
          onClick={() => playSound("crow1.wav")}
          className="note1"
        />

        <motion.img
          src="./fable/note.png"
          alt=""
          drag
          dragConstraints={dragConstraints}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer", position: "absolute" }}
          onClick={() => playSound("crow2.wav")}
          className="note2"
        />

        <motion.img
          src="./fable/note.png"
          alt=""
          drag
          dragConstraints={dragConstraints}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer", position: "absolute" }}
          onClick={() => playSound("crow3.wav")}
          className="note3"
        />
      </div>
    </ParallaxLayer>
  );
}
