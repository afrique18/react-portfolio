
import React, {useState} from 'react';
import Header from './components/Header';
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  const [ currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
      return <Portfolio />;
      case 'Contact':
      return <Contact />;
      case 'Resume':
      return <Resume />;
      default:
        return <About />;
    }
  };
    return (
      <div>
        <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <main>{renderPage()}</main>
        <Footer />
      </div>
    );
  }

  export default App;





//       <>
//       <BrowserRouter>
//       <Routes>
//         <div className='app'>
//           {/* <Header /> */}
//           <main>
//             <Route exact path='/' Component={Home} />
//             <Route exact path='/about' Component={About} />
//             <Route exact path='/contact' Component={Contact} />
//             <Route exact path='/portfolio' Component={Portfolio} />
//             </main>
//             {/* <Footer /> */}
//         </div>
//       </Routes>
//     </BrowserRouter>
//       </> 
//     );
// //   }

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


