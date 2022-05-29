import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';

import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { FormPage } from './pages/FormPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import Burger from './components/Burger';
import Menu from './components/Menu';
import FocusLock from 'react-focus-lock';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const navbarData = [
    {id: 0, to: '/', text: 'Home'},
    {id: 1, to: '/about', text: 'About'},
    {id: 2, to: '/contact', text: 'Contact'},
    {id: 3, to: '/form', text: 'Form'},
  ]

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} items={navbarData}/>
          </FocusLock>
        </div>
        <div className="App">
          <Navigation logo={logo} items={navbarData}/>
          <Routes>
            <Route path='*' element={<div>404</div>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/form' element={<FormPage/>}/>
          </Routes>
          <Footer/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
