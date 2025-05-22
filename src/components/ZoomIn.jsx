import { motion } from "framer-motion";

export function ZoomIn({ controls }) {
	return (
		<motion.div
			initial={{ scale: 1 }}
			animate={controls}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 100,
				overflow: "hidden",
				pointerEvents: "none",
			}}
		>
			<img src="./fable/bg.png" alt="Zoom Overlay" style={{ width: "100%", height: "100%" }} />
		</motion.div>
	);
}
