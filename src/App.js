import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonInfo from './PokemonInfo';
import Pagination from './Pagination';

function App() {
  //store pokemon data, current url, next url, prev url and if data is loading
  const [pokemon, setPokemon] = useState()
  const [currentPokeUrl, setCurrentPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/1")
  const [nextPokeUrl, setNextPokeUrl] = useState()
  const [prevPokeUrl, setPrevPokeUrl] = useState()
  const [loading, setLoading] = useState(true)

  //loads new data for pokemon from api
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPokeUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      var pokeNum = res.data.id
      setNextPokeUrl("https://pokeapi.co/api/v2/pokemon/" + (pokeNum + 1))
      if(pokeNum !== 1) setPrevPokeUrl("https://pokeapi.co/api/v2/pokemon/" + (pokeNum - 1))
      else setPrevPokeUrl(null)
      setPokemon(res.data)
    })

    return () => cancel()
  }, [currentPokeUrl])

  //go to next pokemon
  function nextPoke() {
    setCurrentPokeUrl(nextPokeUrl)
  }

  //go to previous pokemon
  function prevPoke() {
    setCurrentPokeUrl(prevPokeUrl)
  }

  //loading message
  if(loading) return "Loading..."
  
  //page content
  return (
    <>
      <PokemonInfo pokemon={pokemon}/>
      <Pagination
        nextPoke={nextPokeUrl ? nextPoke : null}
        prevPoke={prevPokeUrl ? prevPoke : null}
      />
    </>
  );
}

export default App;