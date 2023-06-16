import { useEffect } from "react";

function Child() {
  console.log("Child Render");

  // useEffect(() => {
  //   console.log("Child mounted");
  // }, []);

  return <div>Child</div>;
}

export default Child;
