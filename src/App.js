import React from 'react';
import logo from './logo.svg';
import ImageCycle from './ImageCycle/ImageCycle';
import Circle from './Circle/Circle';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Circle />
      <ImageCycle />

    </div>
  );
}

export default App;

// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           test
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
