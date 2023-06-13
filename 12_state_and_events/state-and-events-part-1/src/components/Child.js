import AnotherChild from "./AnotherChild"

function Child(props) {

  console.log('Child')

  return (
    <div>
      Child
      <AnotherChild />
    </div>
  )
}

export default Child;