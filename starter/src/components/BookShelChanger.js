export const BookShelfChanger = ({ currentShelf, onShelfSelected }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={currentShelf}
        onChange={(event) => onShelfSelected(event.target.value)}
      >
        <option value="moveto" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
