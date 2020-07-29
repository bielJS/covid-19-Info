import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Container,
  Content,
  Mural,
  List,
  Data,
  Confirmed,
  Deaths,
} from './styles';

import Sidebar from '../../components/Sidebar';

function Home() {
  const [countries, setCountries] = useState([]);

  async function fetchMyAPI() {
    api.get('countries').then((response) => {
      const { data } = response;

      setCountries([data.data]);
    });
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <h1>Painel Geral</h1>
          <Mural>
            {countries.map((country) =>
              country.map((info) => (
                <List key={info.country}>
                  <h3>{info.country}</h3>
                  <Data>
                    <Confirmed>
                      <p>Confirmados</p>{' '}
                      <small>{info.confirmed.toLocaleString('pt-BR')}</small>
                    </Confirmed>{' '}
                    <Deaths>
                      <p>Mortes</p>{' '}
                      <small>{info.deaths.toLocaleString('pt-BR')}</small>
                    </Deaths>
                  </Data>
                </List>
              ))
            )}
          </Mural>
        </Content>
      </Container>
    </>
  );
}

export default Home;
