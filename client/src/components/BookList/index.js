import BookCard from "../BookCard";
import CardHeader from "../CardHeader";

// import fakeData from "../../fakeData.json";
// const fakeSearchResults = fakeData.items;

function BookList({books}) {
    if (!books.length) {
        return (
            <div className="card bg-dark mx-5">
            <CardHeader>Results</CardHeader>
            <div className="card-body">
                <h5 className="text-light">Search a book!</h5>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-dark mx-5">
            <CardHeader>Results</CardHeader>
            {books.map(book => {
                return (<BookCard key={book.id} book={book}/>)
            })}
        </div>
    )
};

export default BookList;