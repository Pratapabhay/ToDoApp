import React, { useEffect } from 'react';
import Routes from './routes';
import API from './services/index';


import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default hot(App);
