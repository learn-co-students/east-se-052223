import { useState } from "react";

// 1. import the useState hook from react
// 2. declare state
//     - first element array is the state value
//     - second element in array is the function to update state
//     - argument we pass to useState is our initial state value

function ProjectCard({ name, projectId, about, phase, image, link }) {
  const [applause, setApplause] = useState(0);

  function handleApplauseClick() {
    setApplause((currentApplause) => currentApplause + 1);
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
