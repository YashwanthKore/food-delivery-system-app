import React from 'react';
import './App.css';
import Router from './component/Router';
import { HashRouter } from 'react-router-dom';
import Navbar from "./component/Navbar"

function App() {
  return (
      <HashRouter>
        <Navbar/>
        <Router/>
      </HashRouter>
  );
}

export default App;
