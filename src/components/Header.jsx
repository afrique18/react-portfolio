import React from 'react';
import Navigation from './NavTabs';

function Header({ setCurrentPage, currentPage }) {
  return (
    <header>
      <h1>My Portfolio</h1>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </header>
  );
}

export default Header;
// function Header() {
//     return (
//         <header className="flex-row px-1">
//             <div className="logo">
//             <h1>
//             <link to="/">Varney Vincent</link> 
//             </h1>
//             </div>
//         </header>
//     );
// }


