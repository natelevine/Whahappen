import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <h1>
      WhaHappen!?
      </h1>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        &copy; 2017 WhaHappen!?
      </p>
    </footer>
  </div>
);

export default Layout;
