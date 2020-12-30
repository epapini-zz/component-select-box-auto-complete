import React, { useEffect, useState, useRef } from "react";

import { Container, Content, Select, List, ListItem } from "./styles";

import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function SelectBoxAutoComplete({ data }) {
  /*const [state, setState] = useState({
    value: "",
    suggestions: [],
  });*/

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const lista = data.filter(
      (item) => item.name.toLowerCase().indexOf(search) > -1
    );
    setOptions(lista);
  }, [search]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateList = (update) => {
    setSearch(update);
    setDisplay(false);
  };

  return (
    <Container>
      <Content>
        <input
          id="auto"
          onClick={() => setDisplay(!display)}
          placeholder="Busca"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {display && (
          <Select ref={wrapperRef}>
            <List id="select">
              {options.map((item) => (
                <ListItem key={item.id} onClick={() => updateList(item.name)}>
                  <div>
                    {item.name} {item.image}
                  </div>
                </ListItem>
              ))}
            </List>
          </Select>
        )}
      </Content>
    </Container>
  );
}

export default SelectBoxAutoComplete;
