import React from 'react'
import Home from './Home';
import Navbar from './Navbar';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Hero from './Hero';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  
]);


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hero' element={<Hero/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}


export default App