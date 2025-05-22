import { Link } from "react-router";
import SearchFilter from "./SearchFilter";

const Navbar = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="container">
			<div className="lower-part navba">
				<div className="making-of-video">
					<Link to="/">
						<img src="https://res.cloudinary.com/dhvigmhgw/image/upload/v1747943203/logo_rje1hn.png" alt="" className="imagenav" />
					</Link>
				</div>
				<div className="description">
					<div className="navlinks">
						<div className="home">

						
						<Link to="/">
							<h3>HOME</h3>
						</Link>
						</div>
						<Link to="/projects">
							<h3>PROJECTS</h3>
						</Link>
						<Link to="/making-of/matteo-giambarresi-de-raaf-en-de-vos">
							<h3>MAKING OF</h3>
						</Link>
						<Link to="/parallax">
							<h3>PARALLAX</h3>
						</Link>
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
