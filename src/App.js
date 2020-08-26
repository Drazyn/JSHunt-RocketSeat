import React from 'react';
import api from './services/api';

import './styles.css';

import Header from "./components/Header";
import Main from "./pages/main";
import Routes from './routes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
