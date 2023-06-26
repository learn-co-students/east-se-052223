import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectInfo() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  let { id: projectId, name, about } = project;

  useEffect(() => {
    fetch(`http://localhost:3001/projects/${id}`)
      .then((resp) => resp.json())
      .then((data) => setProject(data));
  }, [id]);

  return (
    <section>
      <h2>{name}</h2>
      <p>{about}</p>
      <img src={project.image} alt={project.about} />
      <ul>
        <li>Phase {project.phase}</li>
        <li>Applause: {project.applause}</li>
        <li>
          <a href={project.link}>Project Link</a>
        </li>
      </ul>
    </section>
  );
}

export default ProjectInfo;
