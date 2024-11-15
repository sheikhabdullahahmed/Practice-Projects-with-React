import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Hero from './Hero';






function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hero' element={<Hero/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}


export default App