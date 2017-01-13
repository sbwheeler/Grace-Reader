import React from 'react';
import NavBar from './navbar/';
import Footer from './footer/footerComponent'
import { Link } from 'react-router'

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div id="mainDisplay" className="container">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default App
