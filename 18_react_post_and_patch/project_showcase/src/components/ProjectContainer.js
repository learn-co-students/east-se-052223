import ProjectCard from "./ProjectCard";

function ProjectContainer(props) {
  const { projects, onProjectUpdate } = props;

  const renderProjects = projects.map((project) => {
    const { id, name, about, image, phase, link, applause } = project;
    return (
      <ProjectCard
        key={id}
        projectId={id}
        name={name}
        about={about}
        phase={phase}
        image={image}
        link={link}
        applause={applause}
        onProjectUpdate={onProjectUpdate}
      />
    );
  });

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>

      <input type="text" placeholder="Search..." />

      <ul className="cards">{renderProjects}</ul>
    </section>
  );
}

export default ProjectContainer;
