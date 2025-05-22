import { ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

export default function Footer2() {
    return (
        <ParallaxLayer offset={11.3} speed={0.2}>
            <footer className='footer'>
                <h1>De Raaf en de vos</h1>
                <Link to="/projects">
                    <button className='button2'>
                        Go to Projects
                    </button>
                </Link>
            </footer>
        </ParallaxLayer>
    );
}