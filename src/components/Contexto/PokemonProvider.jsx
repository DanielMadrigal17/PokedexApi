import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'


const PokemonProvider = ({children,PokemonEvolutions }) => {
    const [allPokemons, setAllpokemons] = useState([])
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0)

    const getSearchPokemons = async (pokemon) => {
      const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const response = await fetch(baseUrl)
      const  list = await response.json();
     
      return list;
    }

      const getpokemons = async (limit = 20, offset= 0) => {
        const base = `https://pokeapi.co/api/v2/pokemon?Limit=${limit}&offset=${offset}`
        const response = await fetch (base)
        const list =await response.json();
       return list;
    
      };

        const getPokemonsById = async(id) =>{
          const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
          const response = await fetch(baseUrl)
          const list = await response.json()
          return list
      }
      
      const fetchpoke = async(id) =>{
       const data = await getpokemons(20, 20 * page);
       const list = data.results.map(async(pokemones)=>{
       const response = await fetch(pokemones.url);
       const list = await response.json();
       return list;
       });

     setAllpokemons(await Promise.all(list));
     setTotal(Math.ceil(data.count / 20))
    };
      
      useEffect (( ) => {
      fetchpoke();
      
      }, [page]) 
    
  return (
  
   <PokemonContext.Provider
    value={{
    getSearchPokemons,
    allPokemons,
    getPokemonsById,
    page,
    total,
    setPage,
    PokemonEvolutions,
     
     }}>
    {children}
   </PokemonContext.Provider>

  )
}

export default PokemonProvider
