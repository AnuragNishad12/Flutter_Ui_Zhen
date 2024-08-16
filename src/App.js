import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Middle from './Components/Middle';
import Docs from './Components/Docs';

function App() {
  const exampleCode = `
  function greet(name) {
    console.log('Hello, ' + name);
  }
  
  greet('World');
`;


  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Middle/>} />
          <Route path="/Docs" element={<Docs/>}/>
        </Routes>
    </Router>
  );
}

export default App;

