import { useState } from "react"

import Child from "./components/Child"
import './App.css';

// Component Lifecycle
// Birth creation // Mounting - added to the DOM
// Growth updating // rerenders
// Death unmounting 

const name = "React"

function App() {
  const [showChild, setShowChild] = useState(false)
  const [count, setCount] = useState(0)

  function renderJsx() {
    return (
      <div>
        {name}
      </div>
    )
  }

  function handleButtonClick(event) {
    event.stopPropagation()
    // if you need the currentState pass in a callback function
      // that callback function will get passed the current value of state
      // what it returns will be the new state
    setShowChild(true)
    setCount((currentCount) => currentCount + 1)
  }
  console.log('app')

  return (
    <div 
      className="App" 
      onClick={() => console.log('div')} 
    >
      { count }
      { showChild ? <Child name={name} /> : null}
      <Child name={name} />
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default App;

