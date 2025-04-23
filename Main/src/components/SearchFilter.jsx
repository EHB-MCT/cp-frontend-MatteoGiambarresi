const SearchFilter = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="searchFilter">
			<input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
			<button>Search</button>
		</div>
	);
};
export default SearchFilter;
