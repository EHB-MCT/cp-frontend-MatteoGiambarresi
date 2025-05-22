import { use, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Functionalities() {
	const controls = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();
	const controls5 = useAnimation();

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
	const playSound = (file) => {
		const audio = new Audio(`./fable/sounds/${file}`);
		audio.play();
	};
	const inViewConfigs = [{ threshold: 0.5 }, { threshold: 0.5 }, { threshold: 0.5 }];
	const inViews = inViewConfigs.map((cfg) => useInView(cfg));
	const [ref1, inView1] = inViews[0];
	const [ref2, inView2] = inViews[1];
	const [ref3, inView3] = inViews[2];

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
			controls4.start({
				top: "70vh",
				transition: { duration: 20, ease: "easeOut" },
			});
			controls5.start({
				marginTop: 0,
				rotate: [-5, 5, -5],
				transition: {
					rotate: { repeat: Infinity, repeatType: "reverse", duration: 0.9, ease: "easeInOut" },
				},
			});
		}
	});

	return {
		controls,
		controls2,
		controls3,
		controls4,
		controls5,
		playSound,
		refs: [ref1, ref2, ref3],
		inViews: [inView1, inView2, inView3],
	};
}
