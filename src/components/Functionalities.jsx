import { use, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Functionalities() {
	const controls = useAnimation();
	const controls2 = useAnimation();
    const controls3 = useAnimation();

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
	const inViewConfigs = [{ threshold: 0.5 }, { threshold: 0.5 }];
	const inViews = inViewConfigs.map((cfg) => useInView(cfg));
	const [ref1, inView1] = inViews[0];
	const [ref2, inView2] = inViews[1];

	useEffect(() => {
		if (inView1) {
			controls2.start({
				right: "20%",
				transition: { duration: 6, ease: "easeOut" },
			});
			controls3.start({
				left: "10%",
				transition: { duration: 5, ease: "easeOut", delay: 2 },
			});
		}
	}, [inView1]);

	return {
		controls,
        controls2,
        controls3,
		refs: [ref1, ref2],
		inViews: [inView1, inView2],
	};
}
