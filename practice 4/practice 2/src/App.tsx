import React from "react"
import Navbar from './Components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Coin from "./Components/Coin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/coin:id",
    element: <Coin/>,
  },
]);

function App() {
  return (
    <div className="app">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App