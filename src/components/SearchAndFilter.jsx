// eslint-disable-next-line react/prop-types
function SearchAndFilter({ setFilter, setSearch, search }) {
  return (
    <div className="w-full flex justify-between items-center gap-x-1">
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-gray-200 w-1/2 px-2 py-1.5 rounded-sm text-xs outline-none"
      />

      <select
        name="filter"
        className="w-1/2 px-2 py-1.5 rounded-sm text-gray-700 text-sm outline-none"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="high-priority">High Priority</option>
        <option value="medium-priority">Medium Priority</option>
        <option value="low-priority">Low Priority</option>
        <option value="no-priority">No Priority</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
