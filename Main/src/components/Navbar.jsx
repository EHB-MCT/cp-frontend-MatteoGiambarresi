import { Link } from "react-router";
function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/projects">PROJECTS</Link>
					</li>
					<li>
						<Link to="/making-of/1">MAKING-OF</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Navbar;
