import React from 'react';
import NavBar from './navbar/';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div id="mainDisplay" className="container">
        { children }
      </div>
    </div>
  )
}

export default App
