/* eslint-disable import/no-anonymous-default-export */
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
     
      <Link to="/">
      <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/pedidos">
      <i className="fa fa-sticky-note "></i>  Pedidos
      </Link>
     <Link to="/motoboys">
        <i className="fa fa-motorcycle"></i> Motoboy
      </Link>
      
    </nav>
  </aside>
);
