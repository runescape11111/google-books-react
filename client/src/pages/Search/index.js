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
        const books = searchResult.data.items.map(book => {
            return {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                url: book.volumeInfo.infoLink,
                img: book.volumeInfo.imageLinks.thumbnail,
                description: book.volumeInfo.description
            }
        });
        setState({searchTerm: "", books});
    }

    function handleInputChange(e) {
        e.preventDefault();
        setState({ ...state, searchTerm: e.target.value});
    };

    async function handleSave(e) {
        e.preventDefault();
        const id = e.target.value;
        const book = state.books.filter(book => book.id=== id);
        await API.saveBook(book[0]);
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