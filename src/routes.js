import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';
import States from './pages/States';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country" component={Country} />
        <Route path="/states" component={States} />
      </Switch>
    </BrowserRouter>
  );
}