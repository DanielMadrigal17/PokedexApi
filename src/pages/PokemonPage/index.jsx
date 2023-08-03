import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../components/Contexto/PokemonContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import "../PokemonPage/style.css"

const Next = () => {
  const {getPokemonsById} = useContext(PokemonContext)
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState([])
  const navigate = useNavigate() 
  const {id} = useParams()


    //evolution 1 name + img + id
  const [evolution0, setEvolution0] = useState([])
  const [idEvolution0, setIdEvolution0] = useState([])
  const [evolutionName0, setEvolutionName0] = useState([])
    //evolution 1 name + img + id

  //evolution 2 name + img + id
  const [evolution2, setEvolution2] = useState([])
  const [idEvolution2, setIdEvolution2] = useState([])
  const [evolutionsName2, setEvolutionsName2] =useState([])
  //evolution 2 name + img + id

  //evolution 3 name + img + id
  const [evolution, setEvolution] = useState([])
  const [idEvolution, setIdEvolution] = useState([])
  const [evolutionsName, setEvolutionsName] =useState([])
    //evolution 3 name + img + id

  const fetchPokemons = async(id) =>{
    const response = await getPokemonsById(id)
    setPokemons(response) 
    setLoading(false)
    console.log(response)
  }

  
  const fetchPokeEvo = async (id) =>{
    const reponse = await getPokemonsById(id)
    const responseSpecies = await fetch (reponse.species.url)
    const responsejson = await responseSpecies.json()
    const Pokex = await fetch(responsejson.evolution_chain.url)
    const PokexJson = await Pokex.json();

    const evolution0 = PokexJson.chain.species.name;
    const pokes = PokexJson.chain.evolves_to[0]?.species.name;

    const pokes1 = PokexJson.chain.evolves_to[0].evolves_to[0]?.species.name;



    setEvolutionsName(pokes1)
    fetchImgPoke(pokes1, setEvolution, setIdEvolution)

    setEvolutionsName2(pokes)
    fetchImgPoke(pokes, setEvolution2, setIdEvolution2)

    setEvolutionName0(evolution0)
    fetchImgPoke(evolution0, setEvolution0, setIdEvolution0)
    
  } 

  const fetchImgPoke = async(id, setEvolutionImg, idEvolutions) =>{
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(baseUrl)
    const lists = await response.json()
    idEvolutions(lists.id)
    const imagenEvo = lists.sprites.other.dream_world.front_default
    console.log(imagenEvo)
    setEvolutionImg(imagenEvo)
  }
  


  useEffect(()=>{
    fetchPokeEvo(id)
  },[id])


   const volver = () =>{
    navigate("/")
   }

  useEffect(()=>{
    fetchPokemons(id)

   
  },[id])

  return (
    <div className='contenido'>
    {
      loading ? ( 
        <h1>Loading</h1>
       ): (
        <> 

        <div className='move3'>
        <h4 className='dato'> Height :{pokemons.height} </h4>
        <h4 className='dato'> Weight :{pokemons.weight} kg</h4>
        <h4 className='dato'> Experience :{pokemons.base_experience}</h4>
        </div>

        <div className='move5'>
        <h4 className='dato2'> Hp :{pokemons.stats[0].base_stat}</h4>
        <h2 id='titulo'>{pokemons.name}</h2>
        <h4 className='dato2'>Defense:{ pokemons.stats[2].base_stat}</h4>
        </div>

        <div className='move10'>
        <h4 className='dato3'>Special-Attack:{pokemons.stats[3].base_stat}</h4>
        <span>{<img className='backimg' src={pokemons.sprites.back_default} alt="" />}</span>
        <h4 className='dato3'>Speed:{pokemons.stats[5].base_stat}</h4>
        </div>

        <div className='move'>
        <h4 className='stats'>Attack :{ pokemons.stats[1].base_stat }</h4>
        <h4 className='stats'>Special-Defense:{pokemons.stats[4].base_stat}</h4>
        </div>

        <h4 id='habilidades'>Abilities:</h4>

       <div className='move4'>
        <h4 className='stats2'>{pokemons.abilities[0]?.ability.name}</h4>
        <h4 className='stats2'>{pokemons.abilities[1]?.ability.name}</h4>
      </div>

      

       <div>



        <h4 id='Tit'> Evolutions:{setEvolution}</h4>
        <div className='moveimg'>
          <div className='move3'>
            <Link to={`/PokemonPage/${idEvolution0}`}>
            <p>{evolutionName0}</p>
            <img className='imageness' src={evolution0} alt={evolutionName0} />
            </Link>
         </div>

        <div className='move3'>
          <Link to={`/PokemonPage/${idEvolution2}`}>
          <p>{evolutionsName2}</p>
          <img className='imageness' src={evolution2} alt="" />
          </Link>
        </div>

        <div className='move3'>
          <Link to={`/PokemonPage/${idEvolution}`}>
         <p>{evolutionsName}</p>
         <img className='imageness' src={evolution} alt="" />
         </Link>
       </div>
       </div>


        </div>
        <div>
        <button  id='btn7' onClick={volver}>back</button>
        </div>


        </>
       )
    }
       
    </div>
  )
}


export default Next
