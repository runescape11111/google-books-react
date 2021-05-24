import React, {useState} from "react";
import SearchForm from "../../components/SearchForm";
import BookList from "../../components/BookList";
import API from "../../utils/API";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Search() {
    const [state, setState] = useState({
        searchTerm: "",
        books: []
    });

    async function searchBooks(e) {
        e.preventDefault();
        const searchResult = await API.searchBooks(state.searchTerm.trim());
        const books = searchResult.data.items.map(book => {
                const bookData = {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    url: book.volumeInfo.infoLink,
                    img: "https://via.placeholder.com/150",
                    description: book.volumeInfo.description
                };
                if (book.volumeInfo.imageLinks) {
                    bookData.img = book.volumeInfo.imageLinks.thumbnail;
                }
                return bookData;
        });
        setState({searchTerm: "", books});
    }

    function handleInputChange(e) {
        e.preventDefault();
        setState({ ...state, searchTerm: e.target.value});
    };

    function saveToast(title) {
        return toast.success(`Book saved successfully: ${title}`);
    }

    async function handleSave(e) {
        e.preventDefault();
        const id = e.target.value;
        const book = state.books.filter(book => book.id=== id);
        await API.saveBook(book[0]);
        saveToast(book[0].title);
        setState({ ...state, books: state.books.filter(book => book.id !== id)});
    }

    return (
        <>
            <SearchForm value={state.searchTerm} searchBooks={searchBooks} handleInputChange={handleInputChange} />
            <BookList books={state.books} handleSave={handleSave} />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
        </>
    )
};

export default Search;