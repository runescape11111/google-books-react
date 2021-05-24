import React, {useState} from "react";
import SearchForm from "../../components/SearchForm";
import BookList from "../../components/BookList";
import API from "../../utils/API";

function Search() {
    const [state, setState] = useState({
        searchTerm: "",
        books: []
    });

    async function searchBooks(e) {
        e.preventDefault();
        const searchResult = await API.searchBooks(state.searchTerm.trim());
        setState({searchTerm: "", books: searchResult.data.items});
    }

    function handleInputChange(e) {
        e.preventDefault();
        setState({ ...state, searchTerm: e.target.value});
    };

    function handleSave(e) {
        e.preventDefault();
        console.log("clicked");
    }

    return (
        <>
            <SearchForm value={state.searchTerm} searchBooks={searchBooks} handleInputChange={handleInputChange} />
            <BookList books={state.books} handleSave={handleSave} />
        </>
    )
};

export default Search;