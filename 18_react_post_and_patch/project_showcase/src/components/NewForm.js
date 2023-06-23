import { useState } from "react";

const initialProject = {
  name: "",
  about: "",
  phase: 1,
  applause: 0,
  link: "",
  image: "",
};

function NewForm({ addNewProject }) {
  const [formData, setFormData] = useState(initialProject);

  function handleChange(e) {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3001/projects", fetchObj)
      .then((resp) => resp.json())
      .then((data) => {
        addNewProject(data);
        setFormData(initialProject);
      });
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add New Project</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="link">Link</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default NewForm;
