import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cafe from './components/cafe'




function App() {
  let hours = new Date().getHours()
  return (
    <div className="App">
      {hours < 12 && <h3>Sorry, we are closed</h3>}
      {/* shorthand syntax for using components */}
      <Cafe />
    </div>
  );
}

export default App;
