import React, { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Text2({ ref2, inView2 }) {
	return (
		<ParallaxLayer offset={3.5} speed={0.1}>
			<motion.div
				className="rectangle"
				ref={ref2}
				initial={{ opacity: 0, y: 50 }}
				animate={inView2 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1 }}
				style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
			>
				<div className="text-layer">
					<p>
						De raaf, trots en gevleid, opent <br /> zijn snavel om te zingen.
					</p>
				</div>
				<img src="./fable/cloud.png" alt="Mist" />
			</motion.div>
		</ParallaxLayer>
	);
}
