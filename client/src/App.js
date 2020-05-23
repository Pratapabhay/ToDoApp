import React from 'react';
import Login from './components/login';

import { hot } from 'react-hot-loader/root';
import Todos from './components/todos';


function App() {
  return (
    <div className="App">
      <p> Hi there from Client </p>
      <Login />
      <Todos />
    </div>
  );
}

export default hot(App);
