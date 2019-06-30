import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NameInput from './components/NameInput';
import AgeInput from './components/AgeInput';
import GenderInput from './components/GenderInput';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
<Navbar />
<Header />
<NameInput />
<AgeInput />
<GenderInput />
<Card />

    </div>
  );
}

export default App;
