import { Link } from "react-router";
import SearchFilter from "./SearchFilter";
function Navbar() {
	return (
		<div className="container">
			<div className="nav-container">
				<div>
					<Link to="/">
						<img src="./images/logo.png" alt="Logo" className="image" />
					</Link>
				</div>
				<nav>
					<ul className="nav-links">
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/projects">PROJECTS</Link>
						</li>
						<li>
							<Link to="/making-of">MAKING-OF</Link>
						</li>
					</ul>
					
				</nav>
			</div>
		</div>
	);
}
export default Navbar;
