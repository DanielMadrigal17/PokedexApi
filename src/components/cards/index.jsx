import React from 'react'
import { Link } from 'react-router-dom'
import "../cards/style.css"

const CardsPokemons = ({pokemones}) => {
  
  return (
    <div className='cont' >
      <Link to={`PokemonPage/${pokemones.id}`}>
     <p>{pokemones.name}</p>
     <img className='img' src={pokemones.sprites.other.dream_world.front_default} alt="" />
    </Link>

        <h4 className={pokemones.types?.[0]?.type.name}>{pokemones.types?.[0]?.type.name}</h4>
        <h4 id="typeB"  className={pokemones.types?.[1]?.type.name}>{pokemones.types?.[1]?.type.name}</h4>
     </div>
 
  )
}

export default CardsPokemons

