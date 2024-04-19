import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navs from './componant/1-nav/nav';
import Hero from './componant/2-hero/hero';
import Main from './componant/3-main/main';
import Contact from './componant/4-contact/contact';
import { NavDropdown } from 'react-bootstrap';
import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createHashRouter } from "react-router-dom";
import Footer from './componant/5-footer/footer';
import Home from './componant/9-home';
import Projects from './comp_m/projects';
import Slills from './comp_m/slills';
function App() {
  return (
    
    <div>
    <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/p' element={<Projects/>}/>
                <Route path='/s' element={<Slills/>}/>
                {/* <Route path='/a_s' element={<Main/>}/> */}
                <Route path='/c' element={<Contact/>}/>
                
                
            </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
