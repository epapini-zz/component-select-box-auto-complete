import React, { useState } from "react";

import { Container, Content, Select, List, ListItem } from "./styles";

import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function SelectBox({ data }) {
  const [open, setOpen] = useState(false);

  const press = () => setOpen(!open);

  return (
    <Container>
      <Content>
        <input />
        <Select
          role="button"
          onKeyPress={() => press(!open)}
          onClick={() => press(!open)}
        >
          <div className="openClose">
            {open ? <BiDownArrow /> : <BiUpArrow />}
          </div>

          {open && (
            <List id="select">
              {data.map((item) => (
                <ListItem key={item.id}>
                  <div>
                    {item.name} {item.image}
                  </div>
                </ListItem>
              ))}
            </List>
          )}
        </Select>
      </Content>
    </Container>
  );
}

export default SelectBox;
