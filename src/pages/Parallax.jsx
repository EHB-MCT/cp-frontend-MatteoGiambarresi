import { ZoomIn } from "../components/ZoomIn";
import { Parallax } from "@react-spring/parallax";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
import Scene5 from "../components/Scene5";
import Footer2 from "../components/Footer2";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import Text3 from "../components/Text3";
import Text4 from "../components/Text4";
import Text5 from "../components/Text5";
import Notes from "../components/Notes";
export default function ParallaxW() {
	return (
		<div className="wrapper2">
			<div
				style={{
					backgroundImage: "url(./fable/Background_fable.png)",
					backgroundSize: "cover",
					height: "100vh",
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
					overflow: "hidden",
				}}
			>
				<ZoomIn />
				<Parallax pages={12} style={{ top: "0", left: "0" }} className="animation">
					<Scene1 />
					<Text1 />
					<Scene2 />
					<Text2 />
					<Scene3 />
					<Notes />
					<Text3 />
					<Scene4 />
					<Text4 />
					<Scene5 />
					<Text5 />
					<Footer2 />
				</Parallax>
			</div>
		</div>
	);
}
