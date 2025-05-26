import { motion } from "framer-motion";

export function ZoomIn() {
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileInView={{ scale: 2 }}
			transition={{ duration: 5, ease: "easeOut" }}
			viewport={{ once: true }}
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
			<img src="./fable/bg.png" style={{ width: "100%", height: "100%" }} />
		</motion.div>
	);
}
