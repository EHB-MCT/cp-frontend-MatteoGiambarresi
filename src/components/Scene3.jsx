import { ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';

export default function Scene3({ controls4, controls5 }) {
    return (
        <>
            <ParallaxLayer offset={4.5} speed={0.5}>
                <div className="tree">
                    <img src="./fable/moon.png" alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0.2}>
                <div className="tree">
                    <img src="./fable/tree.png" alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0.2}>
                <motion.div className="tree cheeseDrop" initial={{ top: "0%" }} animate={controls4}>
                    <img src="./fable/cheese2.png" alt="" />
                </motion.div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0.2}>
                <div className="tree">
                    <div className="bird2">
                        <img src="./fable/bird 2.png" alt="" />
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0.2}>
                <div className="tree">
                    <motion.div className="wolf2" initial={{ marginTop: 300, rotate: -5 }} animate={controls5} style={{ display: "inline-block" }}>
                        <img src="./fable/wolf 2.png" alt="" />
                    </motion.div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.9} speed={0.1}>
                <div className="rectangle3 mist3">
                    <div className="text-layer">
                        <p>
                            De kaas valt naar beneden <br />
                            en de vos vangt hem snel op
                        </p>
                    </div>
                </div>
            </ParallaxLayer>
        </>
    );
}