import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: string, required: true},
    title: {type: string, required: true},
    authors: {type: String, required: true},
    url: {type: String, required: true},
    img: {type: String, required: true},
    description: String
});

const Book = mongoose.model("Book", bookSchema);

export default Book;