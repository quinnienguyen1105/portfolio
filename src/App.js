import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Projects  from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
        <Header/>
        <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Qualification />
          <Projects />
          <Contact />
        </main>
    </>
  );
}

export default App;
