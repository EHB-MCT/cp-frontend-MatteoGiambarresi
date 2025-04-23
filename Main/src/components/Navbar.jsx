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
						<Link to="/Projects">PROJECTS</Link>
					</li>
					<li>
						<Link to="/MakingOf">MAKING-OF</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Navbar;
