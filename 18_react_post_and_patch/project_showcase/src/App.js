import { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import NewForm from "./components/NewForm";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((resp) => resp.json())
      .then((allProjects) => setProjects(allProjects));
  }, []);

  function addNewProject(newProject) {
    setProjects((currentProjects) => [...currentProjects, newProject]);
  }

  function updateProjectInProjects(updatedProject) {
    console.log(updatedProject);
    setProjects((currentProjects) => {
      const projectIndex = currentProjects.findIndex(
        (project) => project.id === updatedProject.id
      );
      const updatedProjectsArry = [...currentProjects];
      updatedProjectsArry[projectIndex] = updatedProject;

      return updatedProjectsArry;
      // const updatedProjectArray = currentProjects.map((project) => {
      //   if (project.id === updatedProject.id) {
      //     return updatedProject;
      //   } else {
      //     return project;
      //   }
      // });
      // return updatedProjectArray;
    });
  }

  return (
    <>
      <Header />
      <NewForm addNewProject={addNewProject} />
      <ProjectContainer
        projects={projects}
        onProjectUpdate={updateProjectInProjects}
      />
    </>
  );
}

export default App;
