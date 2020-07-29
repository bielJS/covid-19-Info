import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Content, Search, Cards } from './styles';

import Sidebar from '../../components/Sidebar';

function Country() {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState('');

  async function fetchMyAPI() {
    api.get(name).then((response) => {
      const { data } = response;

      let check = checkInfo(data.data);

      const teste = () => {
        if (check) {
          setCountry([data.data]);
          return;
        } else {
          toast.error('Digite corretamente!');
          setCountry([]);
          return;
        }
      };
      teste();
    });
  }

  function checkInfo(country) {
    for (var key in country) {
      if (country.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <h1>Digite um país</h1>

          <Search>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Exemplo: Brazil, Spain, France, US, Germany, Italy..."
            />
            <button onClick={() => fetchMyAPI()}>
              <FaSearch />
            </button>
          </Search>

          <Cards>
            {country.map((info) => (
              <ul key={info.country}>
                <strong>{info.country}</strong>
                <li>
                  <p>Casos Totais</p>{' '}
                  <small>{info.confirmed.toLocaleString('pt-BR')}</small>
                </li>
                <li>
                  <p>Casos Atuais</p>{' '}
                  <small>{info.cases.toLocaleString('pt-BR')}</small>
                </li>
                <li>
                  <p style={{ color: '#5DC399' }}>Recuperados</p>{' '}
                  <small style={{ color: '#5DC399' }}>
                    {info.recovered.toLocaleString('pt-BR')}
                  </small>
                </li>
                <li>
                  <p style={{ color: '#ff0103' }}>Mortes</p>{' '}
                  <small style={{ color: '#ff0103' }}>
                    {info.deaths.toLocaleString('pt-BR')}
                  </small>
                </li>
              </ul>
            ))}
          </Cards>
        </Content>
      </Container>
    </>
  );
}

export default Country;
