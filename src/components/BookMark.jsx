import React, { useState } from "react";

const BookMark = () => {
  const [favorite, setFavorite] = useState(false);
  const isFavorite = () => (favorite ? setFavorite(false) : setFavorite(true));
  const bookmark = () => {
    if (favorite) return <i className="bi bi-bookmark-heart-fill"></i>;
    return <i className="bi bi-bookmark"></i>;
  };

  return (
    <td className="text-center">
      <span className="bookmark" onClick={isFavorite}>
        {bookmark()}
      </span>
    </td>
  );
};

export default BookMark;
