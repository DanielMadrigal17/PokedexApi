import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PokemonContext } from '../Contexto/PokemonContext'
import "../Navbar/style.css"
import Navi from '../Navi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {getSearchPokemons, page, total,setPage} = useContext(PokemonContext)
  const [use, setUse] = useState("")
  const [pokemons, setPokemons] = useState([])

 const onclick = async () => {
  const data = await getSearchPokemons(use)
  setPokemons(data)
 }

 const onRigth =  () => {
  const response = Math.min(page +1, total) ;
  setPage(response)
 }

 const onLeft =  () => {
  const response = Math.max(page -1, 0) ;
  setPage(response)
 }

  return (
   
    <div>
    
      <div className='mover'>
        <input className='input' type="text"  onChange={e => setUse(e.target.value)} placeholder='Encuentra tu poke' />
        <button className='search' onClick={onclick} >Search</button>
      </div>
      
      <Link to={`PokemonPage/${pokemons.id}`}>
        <h5>{pokemons.name}</h5>

    <div className='mover' >
       {pokemons.sprites &&(
       <img 
       className='imagen'
       src={pokemons.sprites.other.dream_world.front_default}
       alt={`imagen de ${pokemons.name}`} />
     )}

     </div>
     </Link>
      <Outlet/>
     <Navi page={page} total={total} onLeft={onLeft} onRigth={onRigth} />
    </div>
    
  )
}

export default Navbar
