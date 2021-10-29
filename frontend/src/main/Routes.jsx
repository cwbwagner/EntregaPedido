/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import MotoboyCrud from '../components/motoboy/MotoboyCrud';
import PedidoCrud from '../components/comercio/PedidoCrud';
 

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pedidos" component={PedidoCrud} />
    <Route path="/motoboys" component={MotoboyCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
