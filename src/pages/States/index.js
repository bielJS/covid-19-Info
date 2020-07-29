import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Content, Search, Cards } from './styles';

import Sidebar from '../../components/Sidebar';

function States() {
  const [state, setState] = useState([]);
  const [name, setName] = useState('');

  async function fetchMyAPI() {
    api.get(`brazil/uf/${name}`).then((response) => {
      const { data } = response;

      let check = checkInfo(data);

      const teste = () => {
        if (check) {
          setState([data]);
          return;
        } else {
          toast.error('Verifique a sigla!');
          setState([]);
          return;
        }
      };
      teste();
    });
  }

  function checkInfo(state) {
    if (state.uf) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <h1>Digite um estado</h1>

          <Search>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Exemplo: BA, SP, MG, RS, DF, AM, PE, RJ..."
            />
            <button onClick={() => fetchMyAPI()}>
              <FaSearch />
            </button>
          </Search>

          <Cards>
            {state.map((info) => (
              <ul key={info.uf}>
                <strong>{info.state}</strong>
                <li>
                  <p>Casos Totais</p>{' '}
                  <small>{info.cases.toLocaleString('pt-BR')}</small>
                </li>
                <li>
                  <p>Suspeitas</p>{' '}
                  <small>{info.suspects.toLocaleString('pt-BR')}</small>
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

export default States;
