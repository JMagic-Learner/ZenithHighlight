
import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import ButtonAppBar from './components/Appbar';


function App() {
  return (
    <div className="App">
        <Header/>
        <ButtonAppBar/>
        <Home />
    </div>
  );
}

export default App;
