function NewForm() {
  return (
    <section>
      <form className="form">
        <h2>Add New Project</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />
        <button type="submit">Add Project</button>
      </form>
    </section>
  )
}


export default NewForm;