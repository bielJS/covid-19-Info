import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  margin-left: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 50px 0 100px;
    justify-content: center;
    color: #585280;
  }
`;

export const Search = styled.div`
  width: 582px;
  background-color: white;
  height: 44px;
  margin-bottom: -10px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dfe1e5;
  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  }
  input[type='text'] {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    width: 537px;
    height: 42px;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    outline: none;
    color: #9aa0a6;
    font-weight: 200;
    display: flex;
    ::-webkit-input-placeholder {
      font-size: 16px;
      padding-right: 100px;
      color: #9aa0a6;
    }
  }
  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    height: 42px;
    width: 44px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    svg {
      width: 15px;
      color: #9aa0a6;
      border: none;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  ul {
    background-color: white;
    border-radius: 8px;
    width: 280px;
    height: 280px;
    padding: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    margin: 0 10px;
    margin-bottom: 20px;
    strong {
      color: rgb(88, 82, 128, 0.9);
      display: flex;
      justify-content: center;
      font-size: 20px;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 5px;
      border-bottom: 0.2px solid #adadad;
      &:last-child {
        border-bottom: none;
      }
      p {
        color: rgb(88, 82, 128, 0.9);
        font-weight: 500;
      }

      small {
        color: #5d5d5d;
      }
    }
  }
`;
