import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Text3() {
	return (
		<ParallaxLayer offset={6} speed={0.2}>
			<motion.div
				className="rectangle"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ amount: 0.5 }}
			>
				<div className="text-layer">
					<p>
						De vos verdwijnt met een <br />
						grijns in de donkere mist.
					</p>
				</div>
				<img src="./fable/cloud.png" alt="Mist" />
			</motion.div>
		</ParallaxLayer>
	);
}
