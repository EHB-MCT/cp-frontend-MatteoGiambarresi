import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { ZoomIn } from "../components/ZoomIn";
import Scene1 from "../components/Scene1";
import { Parallax } from "@react-spring/parallax";

export default function ParallaxW() {
	const controls = useAnimation();
	useEffect(() => {
		document.body.style.overflow = "hidden";
		controls
			.start({
				scale: 2,
				transition: { duration: 4, ease: "easeInOut" },
			})
			.then(() => {
				document.body.style.overflowY = "auto";
			});
	}, [controls]);

	return (
		<div>
      <ZoomIn controls={controls} />
			<Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
				
				<Scene1 />
			</Parallax>
		</div>
	);
}
