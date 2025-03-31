import Book from "../model/book.model.js"; // Ensure correct import

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
