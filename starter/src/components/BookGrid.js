import { Book } from "./Book";

export const BooksGrid = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  );
};
