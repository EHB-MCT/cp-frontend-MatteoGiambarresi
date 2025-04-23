import { Link } from "react-router";
import SearchFilter from "./SearchFilter";

const Navbar = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="container">
			<div className="lower-part navba">
				<div className="making-of-video">
					<Link to="/">
						<img src="/logo.png" alt="" className="imagenav" />
					</Link>
				</div>
				<div className="description">
					<div className="navlinks">
						<Link to="/"><h3>HOME</h3></Link>
						<Link to="/projects"><h3>PROJECTS</h3></Link>
						<Link to="/making-of/1"><h3>MAKING OF</h3></Link>
					</div>
					<div className="search">
						<SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					</div>
				</div>
			</div>
			<div className="line"></div>
		</div>
	);
};

export default Navbar;
