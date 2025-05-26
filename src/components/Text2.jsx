import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";


export default function Text2() {
	return (
		<ParallaxLayer offset={3.5} speed={0.1}>
			<motion.div
				className="rectangle"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ amount: 0.5 }}
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
