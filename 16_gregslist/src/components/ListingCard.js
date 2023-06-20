import React, { useState } from "react";

function ListingCard({ listing, onRemoveListing }) {
  const [favorited, setFavorited] = useState(false);
  const { description, id, image, location } = listing;

  // function handleFavorite() {
  //   console.log("clicked");
  //   setFavorited(true);
  // }

  // function handleUnFavorite() {
  //   console.log("clicked to unfavorite");
  //   setFavorited(false);
  // }

  function handleFavorited() {
    setFavorited(!favorited);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => onRemoveListing(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavorited}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorited}>
            ☆
          </button>
        )}
        {/* <button>{favorited ? "★" : "☆"}</button> */}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
