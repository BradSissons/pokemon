import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonInfo from './PokemonInfo';
import Pagination from './Pagination';

window.count = 1

function App() {
  const [pokemon, setPokemon] = useState()
  const [currentPokeUrl, setCurrentPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/1")
  const [nextPokeUrl, setNextPokeUrl] = useState()
  const [prevPokeUrl, setPrevPokeUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPokeUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      var nextUrl = "https://pokeapi.co/api/v2/pokemon/" + (window.count + 1)
      var prevUrl = "https://pokeapi.co/api/v2/pokemon/" + (window.count - 2)
      setNextPokeUrl(nextUrl)
      if(window.count !== 1) setPrevPokeUrl(prevUrl)
      else setPrevPokeUrl(null)
      setPokemon(res.data)
      window.count++;
    })

    return () => cancel()
  }, [currentPokeUrl])

  function nextPoke() {
    setCurrentPokeUrl(nextPokeUrl)
  }

  function prevPoke() {
    setCurrentPokeUrl(prevPokeUrl)
  }

  if(loading) return "Loading..."
  
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