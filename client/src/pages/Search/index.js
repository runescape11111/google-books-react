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
        const books = searchResult.data.items;
        const booksCleaned = books.map(book => {
            return {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                url: book.volumeInfo.infoLink,
                img: book.volumeInfo.imageLinks.thumbnail,
                description: book.volumeInfo.description
            }
        });
        setState({searchTerm: "", books: booksCleaned});
    }

    function handleInputChange(e) {
        e.preventDefault();
        setState({ ...state, searchTerm: e.target.value});
    };

    function handleSave(e) {
        e.preventDefault();
        const id = e.target.value;
        // console.log(e.target.value);
        setState({ ...state, books: state.books.filter(book => book.id !== id)});
    }

    return (
        <>
            <SearchForm value={state.searchTerm} searchBooks={searchBooks} handleInputChange={handleInputChange} />
            <BookList books={state.books} handleSave={handleSave} />
        </>
    )
};

export default Search;