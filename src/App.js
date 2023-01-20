import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Abouut from './components/about/About';
import Skills from './components/skilss/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollupp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';


const App = () => {
  return (
    <>
    
    <Header/>
    <main className="main">
      <Home/>
      <Abouut/>
      <Skills/>
      <Services/>
      <Qualification/> 
      <Contact/>
    </main>
    <Footer/>
    <Scrollupp/>
    </>
  )
}

export default App