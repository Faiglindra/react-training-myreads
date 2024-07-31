import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BooksGrid } from "./BooksGrid";
import { search as searchBook } from "./../BooksAPI";

export const SearchPage = ({ booksInShelf }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timoutId);
  }, [query]);

  useEffect(() => {
    const checkThumbnail = (book) => {
      return (
        book.imageLinks !== undefined &&
        book.imageLinks.thumbnail !== undefined &&
        book.imageLinks.thumbnail.length > 0
      );
    };

    const getShelf = (id) => {
      const searchedBook = booksInShelf.find((book) => book.id === id);
      if (searchedBook) {
        return searchedBook.shelf;
      }

      return "none";
    };

    const search = async () => {
      const result = await searchBook(debouncedQuery, 10);

      if (result.error) {
        console.log("Error in search:" + result.error);
        setBooks([]);
      } else {
        setBooks(
          result
            .filter((book) => checkThumbnail(book))
            .map((book) => ({
              ...book,
              shelf: getShelf(book.id),
            }))
        );
      }
    };

    if (debouncedQuery.length > 0) {
      search();
    } else {
      setBooks([]);
    }
  }, [debouncedQuery, booksInShelf]);

  const handleQueryChanged = (query) => {
    setQuery(query);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => handleQueryChanged(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid books={books} />
      </div>
    </div>
  );
};
