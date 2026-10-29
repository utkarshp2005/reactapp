

import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { MyNavbar   } from './pages/MyNavbar';
import { Home, } from './pages/Home';
import { Home1 } from './pages/Home1';
import { Gallery } from './pages/Gallery';
import { Shop } from './pages/Shop';
import { About } from './pages/About';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MyNavbar/>
    <Home/>
    <Home1/>
    <Gallery/>
    <Shop/>
    <About/>
    
    

 
 
    
  </React.StrictMode>
);