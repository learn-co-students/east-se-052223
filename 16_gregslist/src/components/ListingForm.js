import { useState } from "react";

const initialState = {
  description: "",
  image: "",
  location: "",
};

function ListingForm({ setListings }) {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newListing) => {
        setListings((currentListings) => [...currentListings, newListing]);
        setFormData(initialState);
      });
  }

  function handleChange(e) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        id="image"
        name="image"
        placeholder="image"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        id="location"
        name="location"
        placeholder="location"
        value={formData.location}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default ListingForm;
