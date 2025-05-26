import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Text4() {
	return (
		<ParallaxLayer offset={8.5} speed={0.2}>
			<motion.div
				className="rectangle"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ amount: 0.5 }}
			>
				<div className="text-layer">
					<p>
						En zo bleef de raaf achter, <br />
						bedrogen en zonder kaas
					</p>
				</div>
				<img src="./fable/cloud.png" alt="Mist" />
			</motion.div>
		</ParallaxLayer>
	);
}
