/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Main from '../template/Main';

export default (props) => (
  <Main icon="home" title="Início" subtitle="Sistema Delivery">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">Sistema de um cadastro desenvolvido em React!</p>
  </Main>
);
