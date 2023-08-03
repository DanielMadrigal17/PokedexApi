import React, { useContext } from 'react'
import { PokemonContext } from '../../components/Contexto/PokemonContext'
import CardsPokemons from '../../components/cards'
import "../HomePage/style.css"

const Home = () => {
  const {allPokemons} = useContext (PokemonContext)
 
  return (
    <div className='container'>
  {
    allPokemons.map((pokemones)=> <CardsPokemons pokemones={pokemones}/> )
  }
  </div>
  )
}

export default Home
