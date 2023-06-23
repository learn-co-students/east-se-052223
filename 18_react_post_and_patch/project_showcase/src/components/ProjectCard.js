function ProjectCard({ name, projectId, about, phase, image, link, applause }) {
  function handleApplauseClick() {
    // handle Applause Click
    console.log(
      "update applause: ",
      applause,
      "=applause count ",
      projectId,
      "=project id"
    );
  }

  return (
    <li className="card">
      <h3>{name}</h3>
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleApplauseClick}>
          👏{applause}
        </button>
      </figure>
      <p>{about}</p>
    </li>
  );
}

export default ProjectCard;
