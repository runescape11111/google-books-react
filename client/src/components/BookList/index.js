import BookCard from "../BookCard";
import CardHeader from "../CardHeader";

function BookList() {
    return (
        <div className="card bg-dark mx-5">
            <CardHeader>Results</CardHeader>
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    )
};

export default BookList;