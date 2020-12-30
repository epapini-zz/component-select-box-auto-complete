import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

export const ContentBox = styled.div`
  display: flex;
  max-width: 500px;
  align-items: center;
  border: 1px solid #757575;
  border-radius: 8px;

  .contentBoxIcons {
    padding: 20px;
    align-items: center;
  }

  .contentBoxIcons:hover {
    background-color: #fafafa;
    border-radius: 8px;
  }

  input {
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: 600;
    padding: 15px;
    border-radius: 8px;
    height: 60px;
    border: none;
    outline: none;

    ::placeholder {
      color: #757575;
      padding: 15px;
    }
    :hover {
      background-color: #fafafa;
      border-radius: 8px;
    }
    :active {
      font-weight: 700;
      position: relative;
      z-index: 9998;
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  max-width: 500px;
  margin: 0px 5px;
  background: #fafafa;

  position: absolute;
  z-index: 9998;
`;

export const ListItem = styled.div`
  display: flex;
  text-align: left;

  padding: 20px;
  border-bottom: 1px solid #fafafa;

  :hover {
    background: #fafafa;
    width: 100%;
  }
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Empty = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ListItemContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  .itemName {
    margin-bottom: 15px;
  }

  .itemDescription {
    font-size: 14px;
    font-weight: 500;
  }
`;
