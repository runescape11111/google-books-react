import SearchForm from "../../components/SearchForm";
import BookList from "../../components/BookList";

function Search() {
    function handleInputChange(e) {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <>
            {/* <SearchForm handleInputChange={handleInputChange} searchBooks={searchBooks} /> */}
            <SearchForm handleInputChange={handleInputChange} />
            <BookList />
        </>
    )
};

export default Search;