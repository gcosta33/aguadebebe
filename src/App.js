import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'

import Routes from './routes';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes></Routes>
    
    </div>
  );
}

export default App;
