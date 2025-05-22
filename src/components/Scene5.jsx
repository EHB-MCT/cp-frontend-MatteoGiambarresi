import { ParallaxLayer } from '@react-spring/parallax';

export default function Scene5() {
    return (
        <>
            <ParallaxLayer offset={9.5} speed={0.5}>
                <div className="tree">
                    <img src="./fable/moon.png" alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={9.5} speed={0.2}>
                <div className="tree">
                    <img src="./fable/tree.png" alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={9.5} speed={0.2}>
                <div className="tree">
                    <div className="move">
                        <img src="./fable/bird 3.png" alt="" />
                    </div>
                </div>
            </ParallaxLayer>
        </>
    );
}