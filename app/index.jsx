import React from 'react';
import NavBar from './navbar/';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      { children }
    </div>
  )
}

export default App
