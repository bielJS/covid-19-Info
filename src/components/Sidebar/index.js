import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaExternalLinkAlt, FaGlobe, FaGlobeAmericas } from 'react-icons/fa';

import { Container, List, Header, Menu, Footer } from './styles';

function Sidebar() {
  return (
    <Container>
      <List>
        <Header>
          <p>#stayhome</p>
        </Header>

        <Menu>
          <NavLink className="lista" exact to="/" activeClassName="selected">
            <FaHome />
            <small>Início</small>
          </NavLink>
          <NavLink className="lista" to="/country" activeClassName="selected">
            {' '}
            <FaGlobe />
            <small>País específico</small>
          </NavLink>
          <NavLink className="lista" to="/states" activeClassName="selected">
            {' '}
            <FaGlobeAmericas />
            <small>Estados do Brasil</small>
          </NavLink>
        </Menu>

        <Footer>
          <a
            href="https://covid19-brazil-api-docs.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            <p>API Reference</p>
          </a>
        </Footer>
      </List>
    </Container>
  );
}

export default Sidebar;
