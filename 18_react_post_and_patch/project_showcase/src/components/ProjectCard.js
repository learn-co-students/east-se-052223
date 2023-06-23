function ProjectCard({
  name,
  projectId,
  about,
  phase,
  image,
  link,
  applause,
  onProjectUpdate,
}) {
  function handleApplauseClick() {
    const fetchObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        applause: applause + 1,
      }),
    };

    fetch(`http://localhost:3001/projects/${projectId}`, fetchObj)
      .then((resp) => resp.json())
      .then((updatedProject) => onProjectUpdate(updatedProject));
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
