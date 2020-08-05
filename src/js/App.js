import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from "react-router-dom"
import Home from "./Home"
import Pokemon from "./Pokemon"
import Items from "./Items"
import '../css/NavBar.css'
import '../css/Pokemon.css'
import '../css/Types.css'

function App() {
	const [currentPokeUrl, setCurrentPokeUrl] = useState()
	const [gotoPoke, setGotoPoke] = useState()
	const history = useHistory();

	console.log(currentPokeUrl)

	function handleChange(event) {
		event.preventDefault()
		setGotoPoke(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault();
		setCurrentPokeUrl("https://pokeapi.co/api/v2/pokemon/" + gotoPoke.toLowerCase())
		setGotoPoke("")
		history.push("/pokemon")
	}

  	return (
		<div>
			<ul>
				<li><Link to="/" className="active">Pokédex</Link></li>
				<li><Link to="/pokemon">Pokémon</Link></li>
				<li><Link to="/items">Items</Link></li>
				<li style={{float:'right'}}>
					<form onSubmit={handleSubmit}>
						<input type="search" id="search" placeholder="Search" value={gotoPoke || ""} onChange={handleChange}></input>
						<input type="submit" style={{display: "none"}}></input>
					</form>
				</li>
			</ul>
			<Switch>
				<Route render={(props => (<Pokemon {...props} pokeUrl={currentPokeUrl}/>))} path="/pokemon"/>
				<Route component={Items} path="/items"/>
				<Route component={Home} path="/"/>
			</Switch>
		</div>
	);
}

export default App;