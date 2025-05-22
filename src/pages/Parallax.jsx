import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { ZoomIn } from "../components/ZoomIn";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import { Parallax } from "@react-spring/parallax";
import Functionalities from "../components/Functionalities";
import Text1 from "../components/Text1";

export default function ParallaxW() {
	const {
		controls,
    controls2,
    controls3,
		refs: [ref1,],
		inViews: [inView1,],
	} = Functionalities();

	return (
		<div className="wrapper">
			<ZoomIn controls={controls} />
			<Parallax pages={5} style={{ top: "0", left: "0" }} className="animation">
				<Scene1 />
        <Text1 ref1= {ref1} inView1={inView1} />
      <Scene2 controls2={controls2} controls3={controls3} />
			</Parallax>
    
		</div>
	);
}
