import { useState } from "react"

import Child from "./components/Child"
import './App.css';

// Component Lifecycle
// Birth creation // Mounting - added to the DOM

// Growth updating phase // rerenders

// Death unmounting 

const name = "React"

function App() {
  let showChild = false

  const state = useState(false)

  // console.log(state)

  function renderJsx() {
    return (
      <div>
        {name}
      </div>
    )
  }

  function handleButtonClick(event) {
    console.log('button')
    event.stopPropagation()
    showChild = true
  }

  console.log('Parent')

  return (
    <div 
      className="App" 
      onClick={() => console.log('div')} 
      // onMouseOver={() => console.log('mouseover')}
    >
      {renderJsx()}
      App
      { showChild ? <Child name={name} /> : null}
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default App;
