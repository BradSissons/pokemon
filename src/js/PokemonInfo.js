import React from 'react'
import '../css/Pokemon.css'
import '../css/Types.css'

export default function PokemonInfo({ pokemon }) {
    function padLeft(ID) {
        return Array(3 - String(ID).length + 1).join('0') + ID
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function removeQuotes(string) {
        return capitalizeFirstLetter(string.substring(1, string.length - 1))
    }

    if(pokemon) document.body.id = pokemon.types[0].type.name

    return (
        <div>
            {/* if pokemon data is available*/}
            {pokemon &&
            <div>
                <h1><span id="title">{capitalizeFirstLetter(pokemon.name) + " #" + padLeft(pokemon.id)}</span></h1>
                <div id="content">
                    <img src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png"} alt="Sprite"/>
                    <p>{"Type: " + pokemon.types.map(p => " " + removeQuotes(JSON.stringify(p.type.name)))}</p>
                    <p>{"Abilities: " + pokemon.abilities.map(p => " " + removeQuotes(JSON.stringify(p.ability.name)))}</p>
                    <p>{"Height: " + pokemon.height + "m"}</p>
                    <p>{"Weight: " + pokemon.weight / 10 + "kg"}</p>
                </div>    
            </div>
            }
        </div>
    )
}
