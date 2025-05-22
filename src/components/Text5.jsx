import { ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

    export default function Text5({ref6, inView6}) {
        return (
            <ParallaxLayer offset={10.5} speed={0.2}>
                <motion.div
                    className="rectangle"
                    ref={ref6}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView6 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
                >
                    <div className="text-layer">
                        <h1>THE END</h1>
                    </div>
                    <img src="./fable/cloud.png" alt="Mist" />
                </motion.div>
            </ParallaxLayer>
        );
    }