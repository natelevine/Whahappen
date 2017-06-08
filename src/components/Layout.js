import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      Layout page header
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        This is the <strong>footer</strong>
      </p>
    </footer>
  </div>
);

export default Layout;
