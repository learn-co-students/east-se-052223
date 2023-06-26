import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewForm from "./components/NewForm";
import ProjectContainer from "./components/ProjectContainer";
import ProjectInfo from "./components/ProjectInfo";

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
      <Navbar />

      <Switch>
        <Route path="/new-project">
          <NewForm addNewProject={addNewProject} />
        </Route>
        <Route exact path="/projects">
          <ProjectContainer
            projects={projects}
            onProjectUpdate={updateProjectInProjects}
          />
        </Route>
        <Route path="/projects/:id">
          <ProjectInfo />
        </Route>
        <Route exact path="/">
          <h1>Welcome to project Showcase</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
