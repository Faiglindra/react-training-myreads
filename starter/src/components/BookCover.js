export const BookCover = ({ imageUrl }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${imageUrl}")`,
      }}
    />
  );
};
