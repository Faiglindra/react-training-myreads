import { BookShelfChanger } from "./BookShelfChanger";
import { BookCover } from "./BookCover";
import { useContext } from "react";
import { ChangeShelfContext } from "../App";

export const Book = ({ book }) => {
  const changeShelf = useContext(ChangeShelfContext);

  const handleShelfChanged = (shelf) => {
    changeShelf(book, shelf);
  };
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageUrl={book.imageLinks.thumbnail}></BookCover>
        <BookShelfChanger
          currentShelf={book.shelf}
          onShelfSelected={handleShelfChanged}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
