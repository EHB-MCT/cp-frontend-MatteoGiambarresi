import { useLocation, matchPath } from "react-router-dom";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
	const location = useLocation();
	const isMakingOfPage = matchPath("/making-of/:id", location.pathname);

	if (isMakingOfPage) {
		return null;
	}

	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
			<button>Search</button>
		</div>
	);
};

export default SearchFilter;
