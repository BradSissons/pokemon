import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonInfo from './PokemonInfo';
import Pagination from './Pagination';
import '../css/NavBar.css'

function App() {
	//store pokemon data, current url, next url, prev url and if data is loading
  	const [pokemon, setPokemon] = useState()
  	const [currentPokeUrl, setCurrentPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/1")
  	const [nextPokeUrl, setNextPokeUrl] = useState()
  	const [prevPokeUrl, setPrevPokeUrl] = useState()
	const [loading, setLoading] = useState(true)
	const [gotoPoke, setGotoPoke] = useState()

  	//loads new data for pokemon from api
  	useEffect(() => {
    	setLoading(true)
    	let cancel
    	axios.get(currentPokeUrl, {
    		cancelToken: new axios.CancelToken(c => cancel = c)
    	}).then(res => {
      		setLoading(false)
      		var pokeNum = res.data.id
			if(pokeNum !== 896) setNextPokeUrl("https://pokeapi.co/api/v2/pokemon/" + (pokeNum + 1))
			else setNextPokeUrl(null)  
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

  	function handleChange(event) {
    	setGotoPoke(event.target.value)
  	}

  	function handleSubmit(event) {
    	event.preventDefault();
		setCurrentPokeUrl("https://pokeapi.co/api/v2/pokemon/" + gotoPoke.toLowerCase())
		setGotoPoke("")
  	}

  	//loading message
  	if(loading) return "Loading..."
  
  	//page content
  	return (
		<>
	  	<div id="navBar" style={{display:'flex'}}>
			<h2>Pokédex</h2>
			<form onSubmit={handleSubmit}>
        		<input type="search" id="search" placeholder="Search" value={gotoPoke} onChange={handleChange}></input>
        		<input type="submit" style={{display: "none"}}></input>
			</form>
		</div>
		<PokemonInfo pokemon={pokemon}/>
		<Pagination
			nextPoke={nextPokeUrl ? nextPoke : null}
			prevPoke={prevPokeUrl ? prevPoke : null}
		/>
		</>
	);
}

export default App;