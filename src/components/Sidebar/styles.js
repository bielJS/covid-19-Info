import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #F8F8F8;
  width: 256px;
  position: fixed;
  height: 100vh;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  height: 95%;
`;

export const Header = styled.li`
  font-weight: bold;
  font-size: 24px;
  color: #585280;
  cursor: default;
  p {
    margin-top: 0;
  }
`;

export const Menu = styled.li`
  display: flex;
  flex-direction: column;
  .selected {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 3px solid #585280;
  }
  .lista {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.5rem;
    transition: 0.2s all ease-in-out;
    height: 60px;
    width: 256px;
    margin-left: -40px;
    padding-left: 40px;
    text-decoration: none;
    svg {
      color: #585280;
      font-size: 20px;
    }
    small {
      margin-left: 10px;
      color: #585280;
      font-size: 16px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #585280;
    }
  }
`;

export const Footer = styled.li`
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    svg {
      color: #585280;
      font-size: 16px;
    }
    p {
      padding-left: 10px;
      color: #585280;
      font-size: 14px;
    }
  }
`;
