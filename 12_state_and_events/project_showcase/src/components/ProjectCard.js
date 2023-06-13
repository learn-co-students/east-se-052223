function ProjectCard({ name, projectId, about, phase, image, link, likes }) {
  return (
    <li className="card">
      <h3>{ name }</h3>
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps">👏{likes}</button>
      </figure>
      <p>{about}</p>
    </li>
  )
}

export default ProjectCard;