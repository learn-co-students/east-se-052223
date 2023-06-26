import "./App.css";
import Potato from "./components/Potato";

const potatoes = [
  {
    name: "Mashed Potatoes",
    about: "they are delicious",
    cookingTimer: "10 minutes",
    id: 1,
  },
  {
    name: "Scalloped Potatoes",
    about: "they are good",
    cookingTimer: "20 minutes",
    id: 2,
  },
  {
    name: "Sweet Potatoes",
    about: "they are excellent!",
    cookingTimer: "15 minutes",
    id: 3,
  },
];

function App() {
  const potatoComponents = potatoes.map((potato) => {
    return <Potato key={potato.id} potatoObject={potato} />;
  });

  return <div className="App">{potatoComponents}</div>;
}

export default App;
