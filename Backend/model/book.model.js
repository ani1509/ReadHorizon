import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    // these data types are sent to mongoDB to create a schema
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
});
const Book = mongoose.model("Book", bookSchema);   // in mongoDB s is added to the name of the collection tf show Books
// Book is the name of the collection in mongoDB and bookSchema is the schema for that collection

export default Book;
