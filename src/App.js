import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavarBarBurger from './Component/NavarBarBurger';
import { Divider, Icon } from 'semantic-ui-react';
import './App.css';

import Index from './Component/Index';
import Expertise from './Component/Expertise';
import Innovation from './Component/Innovation';
import Ingenierie from './Component/Ingenierie';
import Industrialisation from './Component/Industrialisation';
import Qualification from './Component/Qualification';

function App() {
  return (
    <div className='App'>
      <header></header>
      <NavarBarBurger />
      <Expertise />
      <Divider horizontal>  <Icon name='plane' size='mini' /></Divider>
      <div className='AppBody'>
        <Switch>
        <Route exact path="/" component={Index} />
          <Route path="/innovation" component={Innovation} />
          <Route path="/ingenierie" component={Ingenierie} />
          <Route path="/industrialisation" component={Industrialisation} />
          <Route path="/qualification" component={Qualification} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
