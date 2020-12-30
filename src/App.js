import "./global.css";

import SelectBoxAutoComplete from "./SelectBoxAutoComplete";

import image1 from "./Extras/img1.png";
import image2 from "./Extras/img2.png";
import image3 from "./Extras/img3.png";

const dados = [
  {
    id: 1,
    name: "Emilio",
    image: image1,
    description: "Descrição 1",
  },
  {
    id: 2,
    name: "Lucas",
    image: image2,
    description: "Descrição 2",
  },
  {
    id: 3,
    name: "Miguel",
    image: image3,
    description: "Descrição 3",
  },
  {
    id: 4,
    name: "Joao",
    image: "",
    description: "Descrição 4",
  },
];

function App() {
  return (
    <>
      <h1> Componenet SelectBox com AutoComplete</h1>
      <SelectBoxAutoComplete data={dados} />

      <input></input>
    </>
  );
}

export default App;
