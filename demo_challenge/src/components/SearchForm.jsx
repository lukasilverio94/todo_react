// SearchForm.js
const SearchForm = ({ query, handleInputChange, handleSearchClick }) => {
  return (
    <div>
      <h3 className="my-2 mb-3 display-6">Find some place around</h3>
      <input
        type="text"
        placeholder="Where you want to go today?"
        value={query}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <button className="btn btn-dark w-100" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
