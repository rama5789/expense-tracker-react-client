import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Navigation = () => (
  <header>
    <nav>
      <ul>
        <li className="main-links">
          <NavLink to="/" exact>
            Expense List
          </NavLink>
        </li>
        <li className="main-links">
          <NavLink to="/add-expense" exact>
            {' '}
            Add Expense
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
