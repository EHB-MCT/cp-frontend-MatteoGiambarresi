import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Scene1() {
	return (
		<>
			<ParallaxLayer offset={0} speed={0}>
				<img src="./fable/background8.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.05}>
				<img src="./fable/background_1.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<img src="./fable/background_2.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.15}>
				<img src="./fable/background3.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.2}>
				<img src="./fable/background4.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.25}>
				<img src="./fable/background5.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.3}>
				<img src="./fable/background6.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.35}>
				<img src="./fable/background7.png" style={{ width: "100%", position: "absolute" }} />
			</ParallaxLayer>

			<ParallaxLayer
				offset={0}
				speed={0}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					width: "100vw",
					top: 0,
					left: 0,
				}}
			>
			<motion.h1
					initial={{ scale: 1, opacity: 1 }}
					animate={{
						scale: [1, 2, 2],
						opacity: [1, 1, 0],
					}}
					transition={{
						duration: 5,
						times: [0, 0.4, 1],
						ease: "easeInOut",
						delay: 2,
					}}
					style={{
						color: "#fff",
						textAlign: "center",
						fontSize: "60px",
						margin: 0,
					}}
				>
					De Raaf en de Vos
				</motion.h1>
			</ParallaxLayer>
		</>
	);
}
