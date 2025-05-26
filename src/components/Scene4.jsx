import React, { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Scene4() {
	return (
		<>
			<ParallaxLayer offset={6.5} speed={0.2}>
				<div className="rectangle2">
					<div className="image-layer">
						<img src="./fable/tree2.png" alt="" />
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={7.7} speed={0.2}>
				<motion.div
				className="rectangle2"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 7 }}
				viewport={{ amount: 0.5 }}
					style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
				>
					<img src="./fable/mist.png" alt="Mist" />
				</motion.div>
			</ParallaxLayer>
			<ParallaxLayer offset={7} speed={0.2}>
				<motion.div
					className="rectangle3 mist3"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: false }}
				>
					<div className="text-layer">
						<p>
							Laat dit een les zijn, wie <br />
							zich laat vleien, raakt zijn <br />
							kaas kwijt!
						</p>
					</div>
				</motion.div>
			</ParallaxLayer>
		</>
	);
}
