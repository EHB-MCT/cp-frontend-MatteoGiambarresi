import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Text5() {
	return (
		<ParallaxLayer offset={10.5} speed={0.2}>
			<motion.div
				className="rectangle"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ amount: 0.5 }}
				style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
			>
				<div className="text-layer">
					<h1>THE END</h1>
				</div>
				<img src="./fable/cloud.png" alt="Mist" />
			</motion.div>
		</ParallaxLayer>
	);
}
