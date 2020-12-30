import React, { useEffect, useState, useRef } from "react";

import {
  Container,
  Content,
  Select,
  List,
  ListItem,
  ContentBox,
  Image,
  Empty,
  ListItemContent,
} from "./styles";

import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

function SelectBoxAutoComplete({ data }) {
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
        <ContentBox>
          <input
            id="auto"
            onClick={() => setDisplay(!display)}
            placeholder="Busca"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div onClick={() => setDisplay(!display)} className="contentBoxIcons">
            {" "}
            {display ? <BiDownArrow /> : <BiUpArrow />}
          </div>
        </ContentBox>

        {display && (
          <Select id="select" ref={wrapperRef}>
            <List id="list">
              {options.map((item) => (
                <ListItem key={item.id} onClick={() => updateList(item.name)}>
                  <ListItemContent>
                    <div className="listItemContent">
                      <div className="itemName">{item.name}</div>
                      <div className="itemDescription">{item.description}</div>
                    </div>
                    <div>
                      {item.image ? (
                        <Image src={item.image} />
                      ) : (
                        <Empty>
                          <FiUser size={30} color="#000" />
                        </Empty>
                      )}
                    </div>
                  </ListItemContent>
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
