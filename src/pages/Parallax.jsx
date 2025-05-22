import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export default function Parallax() {
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
			<h1>hello</h1>
		</div>
	);
}
