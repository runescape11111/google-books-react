import BookCard from "../BookCard";
import CardHeader from "../CardHeader";

import fakeData from "../../fakeData.json";
const fakeSearchResults = fakeData.items;

function BookList() {
    return (
        <div className="card bg-dark mx-5">
            <CardHeader>Results</CardHeader>
            {fakeSearchResults.map(result => {
                return (<BookCard key={result.id} book={result}/>)
            })}
        </div>
    )
};

export default BookList;