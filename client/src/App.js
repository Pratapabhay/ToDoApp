import React from 'react';
import Routes from './routes';


import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <div className="App">
      <p> Hi there from Client </p>
      <Routes />
    </div>
  );
}

export default hot(App);
