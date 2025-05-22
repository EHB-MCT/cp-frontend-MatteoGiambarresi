import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Text1({ ref1, inView1 }) {
	return (
		<ParallaxLayer offset={1} speed={0}>
			<motion.div
				ref={ref1}
				initial={{ opacity: 0, y: 50 }}
				animate={inView1 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1 }}
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
