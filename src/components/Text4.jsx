import { ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

        export default function Text4({ref5, inView5}) {
            return (
                <ParallaxLayer offset={8.5} speed={0.2}>
                    <motion.div
                        className="rectangle"
                        ref={ref5}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView5 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
                    >
                        <div className="text-layer">
                            <p>
                                En zo bleef de raaf achter, <br />
                                bedrogen en zonder kaas
                            </p>
                        </div>
                        <img src="./fable/cloud.png" alt="Mist" />
                    </motion.div>
                </ParallaxLayer>
            );
        }