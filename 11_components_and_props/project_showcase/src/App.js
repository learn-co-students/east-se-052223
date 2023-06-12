// Components
import Header from "./components/Header"
import NewForm from "./components/NewForm";
import ProjectContainer from "./components/ProjectContainer";

// Project Data
import projects from './projects'

// Steps to create a new component
// 1. create a new file
// 2. write our function component with name in PascalCase
// 3. return JSX
// 4. export so we can use it somewhere else
// 5. import it where we want to use it
// 6. return in the component we want to use it

function App() {

  return (
    <>
      <Header />
      <NewForm />
      <ProjectContainer projects={projects} myString={"hello"}/>
    </>
  );
}

export default App;
