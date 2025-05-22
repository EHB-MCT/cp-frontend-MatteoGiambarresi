import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Notes({ playSound }) {
    return (
        <ParallaxLayer offset={4.5} speed={0.2}>
            <div className="note1">
                <img
                    src="./fable/note.png"
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => playSound("crow1.wav")}
                />
            </div>
            <div className="note3">
                <img
                    src="./fable/note.png"
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => playSound("crow2.wav")}
                />
            </div>
            <div className="note2">
                <img
                    src="./fable/note.png"
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => playSound("crow3.wav")}
                />
            </div>
        </ParallaxLayer>
    );
}