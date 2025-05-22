import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { ZoomIn } from "../components/ZoomIn";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
import { Parallax } from "@react-spring/parallax";
import Functionalities from "../components/Functionalities";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import Text3 from "../components/Text3";
import Notes from "../components/Notes";

export default function ParallaxW() {
	const {
		controls,
		controls2,
		controls3,
    controls4,
    controls5,
    playSound,
		refs: [ref1, ref2, ref3,  ref4, ref5, ref6],
		inViews: [inView1, inView2, inView3, inView4, inView5, inView6],
	} = Functionalities();

	return (
		<div className="wrapper">
			<ZoomIn controls={controls} />
			<Parallax pages={9} style={{ top: "0", left: "0" }} className="animation">
				<Scene1 />
				<Text1 ref1={ref1} inView1={inView1} />
				<Scene2 controls2={controls2} controls3={controls3} />
				<Text2 ref2={ref2} inView2={inView2} />
				<Scene3 control4={controls4} controls5={controls5} />
        <Notes playSound={playSound} />
        <Text3 ref3={ref3} inView3={inView3} />
        <Scene4 ref4={ref4} inView4={inView4} />
			</Parallax>
		</div>
	);
}
