import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  margin-left: 256px;
  h1 {
    display: flex;
    margin: 50px 0;
    justify-content: center;
    color: #585280;
  }
`;

export const Mural = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const List = styled.ul`
  padding-inline-start: 5px;
  list-style-type: none;
  height: 65px;
  width: 290px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* border-bottom-right-radius: 20px;
  border-top-left-radius: 20px; */
  margin: 50px 20px 10px;
  padding: 2px;
  h3 {
    display: flex;
    justify-content: center;
    padding-left: 3px;
    margin: 0;
    color: #585280;
  }
`;

export const Data = styled.span`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    padding: 2px;
    align-items: center;
    p {
      margin-right: 5px;
    }
  }
`;

export const Confirmed = styled.li`
  margin-right: 15px;
  p {
    color: #585280;
    font-weight: 400;
  }
  small {
    color: #585280;
  }
`;

export const Deaths = styled.li`
  p {
    color: #ff0103;
    font-weight: 500;
  }
  small {
    color: #ff0103;
  }
`;
