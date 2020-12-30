import "./global.css";

import SelectBox from "./SelectBox";
import SelectBoxAutoComplete from "./SelectBoxAutoComplete";

const dados = [
  {
    id: 1,
    name: "Emilio",
    image: "foto2",
  },
  {
    id: 2,
    name: "Lucas",
    image: "foto2",
  },
  {
    id: 3,
    name: "Miguel",
    image: "foto3",
  },
  {
    id: 4,
    name: "Joao",
    image: "foto4",
  },
];

function App() {
  return (
    <>
      <SelectBox data={dados} />
      <h1>AutoComplete</h1>
      <SelectBoxAutoComplete data={dados} />
    </>
  );
}

export default App;
