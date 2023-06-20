import { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({ search, checkedLocation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  }, []);

  const removeListing = (listingId) => {
    setListings((currentListings) =>
      currentListings.filter((listing) => listing.id !== listingId)
    );
  };

  const sortedListings = checkedLocation
    ? [...listings].sort((listingA, listingB) =>
        listingA.location.localeCompare(listingB.location)
      )
    : listings;

  const filteredSearchListings = sortedListings.filter((listing) => {
    const lowerCaseDescription = listing.description.toLowerCase();
    const lowerCaseSearch = search.toLowerCase();
    return lowerCaseDescription.includes(lowerCaseSearch);
  });

  const renderListings = filteredSearchListings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      onRemoveListing={removeListing}
    />
  ));

  return (
    <main>
      <ListingForm setListings={setListings} />
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;
