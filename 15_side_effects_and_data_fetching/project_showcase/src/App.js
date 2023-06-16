import { useState, useEffect } from "react";
import ReactModal from "react-modal";

// Components
import Header from "./components/Header";
import NewForm from "./components/NewForm";
import ProjectContainer from "./components/ProjectContainer";

// // Project Data
// import projects from "./projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((resp) => resp.json())
      .then((allProjects) => setProjects(allProjects));
  }, []);

  return (
    <>
      <Header />
      <ReactModal isOpen={showModal}>
        <p>Modal is on the page</p>
      </ReactModal>
      <NewForm />
      {showModal ? null : (
        <ProjectContainer projects={projects} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default App;
