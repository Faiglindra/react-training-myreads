import { BookShelf } from "./BookShelf";
import { Link } from "react-router-dom";

export const ListBooks = ({ allBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={allBooks.filter((book) => book.shelf === "currentlyReading")}
          />
          <BookShelf
            title={"Want to Read"}
            books={allBooks.filter((book) => book.shelf === "wantToRead")}
          />
          <BookShelf
            title={"Read"}
            books={allBooks.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
