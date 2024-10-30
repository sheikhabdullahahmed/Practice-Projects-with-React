import React from 'react'
import Bckground from './Components/Bckground.jsx'
import Frontground from './Components/Frontground.jsx'

export default function App() {
  return (
    <div className='w-full relative  h-screen bg-zinc-800'>
      <Bckground/>
      <Frontground/>
      {/* <div className='w-full h-screen fixed top-0 left-0 z-[3]'></div> */}
      </div>
  )
}
