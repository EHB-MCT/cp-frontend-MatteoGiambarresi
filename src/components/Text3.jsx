import { ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

        export default function Text3({ref3, inView3}) {
           

            return (
                <ParallaxLayer offset={6} speed={0.2}>
                    <motion.div
                        className="rectangle"
                        ref={ref3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        style={{ position: "absolute", top: "20%", width: "100%", zIndex: 2 }}
                    >
                        <div className="text-layer">
                            <p>
                                De vos verdwijnt met een <br />
                                grijns in de donkere mist.
                            </p>
                        </div>
                        <img src="./fable/cloud.png" alt="Mist" />
                    </motion.div>
                </ParallaxLayer>
            );
        }