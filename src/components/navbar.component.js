import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Grocers</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/productList" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createProduct" className="nav-link">Add Products</Link>
          </li>
         
          <li className="navbar-item">
          <Link to="/orderList" className="nav-link">Orders</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}