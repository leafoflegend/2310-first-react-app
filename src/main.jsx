import React from 'react';
import ReactDOM from 'react-dom/client';
import Cats from './cats.jsx';

const rootDiv = document.getElementById('root');

ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <Cats />
  </React.StrictMode>,
);
