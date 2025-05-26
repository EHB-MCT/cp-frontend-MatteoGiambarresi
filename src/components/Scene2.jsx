import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

export default function Scene2() {
	return (
		<>
			<ParallaxLayer offset={2} speed={0.5}>
				<div className="tree">
					<img src="./fable/moon.png" alt="" />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={0.2}>
				<div className="tree">
					<img src="./fable/tree.png" alt="" />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={0.2}>
				<div className="tree">
					<div className="move">
						<img src="./fable/cheese.png" />
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={0.2}>
				<div className="tree">
					<div className="move">
						<img src="./fable/bird 1.png" alt="" />
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2.5} speed={0.1}>
				<motion.div
					className="rectangle2 mist2"
					initial={{ right: "-50%" }}
					whileInView={{ right: "20%" }}
					transition={{ duration: 3, ease: "easeOut" }}
					viewport={{ once: false }}
					style={{ position: "absolute", top: "20%", width: "54%", zIndex: 2 }}
				>
					<div className="text-layer">
						<p>Een vos komt tevoorschijn en ziet de prachtige kaas van de raaf.</p>
					</div>
					<img src="./fable/mist.png" alt="Mist" />
				</motion.div>

				<motion.div
					className="rectangle3 mist3"
					initial={{ left: "-70%" }}
					whileInView={{ left: "10%" }}
					transition={{ duration: 2, ease: "easeOut" }}
					viewport={{ once: false }}
					style={{ position: "absolute", top: "68%", width: "54%", zIndex: 2 }}
				>
					<div className="text-layer">
						<p>
							O, prachtige raaf! Wat een <br />
							schitterende veren hebt u, en <br />
							uw stem moet vast even <br />
							prachtig zijn!
						</p>
					</div>
				</motion.div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={0.2}>
				<div className="tree">
					<div className="move">
						<img src="./fable/wolf 1.png" alt="" />
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
}
