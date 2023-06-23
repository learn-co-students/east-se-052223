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

  return (
    <>
      <Header />
      <NewForm />
      <ProjectContainer projects={projects} />
    </>
  );
}

export default App;
