import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { ZoomIn } from "../components/ZoomIn";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import { Parallax } from "@react-spring/parallax";
import Functionalities from "../components/Functionalities";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import Notes from "../components/Notes";

export default function ParallaxW() {
	const {
		controls,
		controls2,
		controls3,
    controls4,
    controls5,
    playSound,
		refs: [ref1, ref2],
		inViews: [inView1, inView2],
	} = Functionalities();

	return (
		<div className="wrapper">
			<ZoomIn controls={controls} />
			<Parallax pages={7} style={{ top: "0", left: "0" }} className="animation">
				<Scene1 />
				<Text1 ref1={ref1} inView1={inView1} />
				<Scene2 controls2={controls2} controls3={controls3} />
				<Text2 ref2={ref2} inView2={inView2} />
				<Scene3 control4={controls4} controls5={controls5} />
        <Notes playSound={playSound} />
			</Parallax>
		</div>
	);
}
