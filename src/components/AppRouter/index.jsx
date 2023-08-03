import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../../pages/HomePage'
import Next from '../../pages/PokemonPage'


function AppRouter() {

  return (
    <div>
      <Routes>
       <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
       </Route>
        <Route path='PokemonPage/:id' element={<Next/>} />
      </Routes>
    </div>
  )
}

export default AppRouter
