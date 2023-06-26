function Potato(props) {
  const { name, cookingTimer, about } = props.potatoObject;

  return (
    <>
      <h2>{name}</h2>
      <p>{about}</p>
      <p>{cookingTimer}</p>
    </>
  );
}

export default Potato;
