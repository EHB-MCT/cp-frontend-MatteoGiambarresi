import { useLocation } from "react-router-dom";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="searchFilter">
			<input type="text" placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
			<button>Search</button>
		</div>
	);
};

export default SearchFilter;
