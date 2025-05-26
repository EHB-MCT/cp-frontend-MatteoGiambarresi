import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Text1() {
	return (
		<ParallaxLayer offset={1} speed={0}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ amount: 0.5 }}
				className="rectangle"
			>
				<div className="text-layer">
					<p>
						Meester raaf zat in een eikenboom. Hij klemde <br /> in zijn bek een heerlijk brokje kaas uit Gouda.
					</p>
				</div>
				<div className="image-layer">
					<img src="./fable/cloud.png" alt="" />
				</div>
			</motion.div>
		</ParallaxLayer>
	);
}
