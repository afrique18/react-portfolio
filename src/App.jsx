
import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from '/components/Footer';
import Portfolio from './pages/Portfolio';

Class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className='app'>
          <header/>
          <main>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
            <Route exact path='/contact' Component={Contact} />
            <Route exact path='/portfolio' Component={Portfolio} />
            </main>
            <Footer />
        </div>
      </HashRouter>
    );
  }
}
// // Bringing in the required import from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';
// import { Component } from 'react';

// function App() {
//   // The Outlet component will conditionally swap between the different pages according to the URL
//   return (
//     <>
//       <Nav />
//       <main className="mx-3">
//         <Outlet />
//       </main>
//     </>
//   );
// }

export default App;
