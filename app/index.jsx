import React from 'react';
import NavBar from './navbar/';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        { children }
      </div>
    </div>
  )
}

export default App
