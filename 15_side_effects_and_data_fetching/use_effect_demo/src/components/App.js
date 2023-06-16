import { useState } from "react";

import Child from "./Child";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  const buttonText = clicked ? "clicked" : "not clicked";

  console.log("App Render");

  return (
    <div className="App">
      App
      <button onClick={handleClick}>{buttonText}</button>
      <Child />
    </div>
  );
}

export default App;
