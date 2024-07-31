import "./App.css";
import { useEffect, useState, createContext } from "react";
import { SearchPage } from "./components/SearchPage";
import { ListBooks } from "./components/ListBooks";
import * as BooksApi from "./BooksAPI";
import { Routes, Route } from "react-router-dom";

export const ChangeShelfContext = createContext();

export function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const myBooks = await BooksApi.getAll();
      setAllBooks(myBooks);
    };

    getAll();
  }, []);

  const changeShelf = (book, shelf) => {
    BooksApi.update(book, shelf);
    let newBooks = allBooks.filter((b) => b.id !== book.id);
    if (shelf !== "none") {
      book.shelf = shelf;
      newBooks = newBooks.concat(book);
    }
    setAllBooks(newBooks);
  };

  return (
    <ChangeShelfContext.Provider value={changeShelf}>
      <Routes>
        <Route
          path="/search"
          element={<SearchPage booksInShelf={allBooks} />}
        />
        <Route exact path="/" element={<ListBooks allBooks={allBooks} />} />
      </Routes>
    </ChangeShelfContext.Provider>
  );
}
