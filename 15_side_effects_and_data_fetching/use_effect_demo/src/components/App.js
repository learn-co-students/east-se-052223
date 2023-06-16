import { useState, useEffect } from "react";

import Child from "./Child";

function App() {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("App mounted");
  // }, []);

  useEffect(() => {
    // if(count === 3) {
    //   console.log("App useffect");
    // }
  }, [count, clicked]);

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
