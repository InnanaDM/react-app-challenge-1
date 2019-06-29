import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NameInput from './components/NameInput';
import Header from './components/Header';
import AgeInput from './components/AgeInput';
import GenderInput from './components/GenderInput';

function App() {
  return (
    <div className="App">
<Navbar />
<Header />
<NameInput />
<AgeInput />
<GenderInput />
    </div>
  );
}

export default App;
