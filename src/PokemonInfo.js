import React from 'react'
import './Types.css'

export default function PokemonInfo({ pokemon }) {
    function padLeft(ID) {
        return Array(3 - String(ID).length + 1).join('0') + ID
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div>
            {/* if pokemon data is available*/}
            {pokemon &&
            <div>
                <h1 class={pokemon.types[0].type.name}>{capitalizeFirstLetter(pokemon.name) + " #" + padLeft(pokemon.id)}</h1>
                <img src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png"} alt="Sprite" style={{width:'200px', height:'200px', padding:'25px', float:'right'}}/>
                <p>{"Type: " + (pokemon.types[1] ? capitalizeFirstLetter(pokemon.types[0].type.name) + " / " + capitalizeFirstLetter(pokemon.types[1].type.name) : capitalizeFirstLetter(pokemon.types[0].type.name))}</p>
                <p>{"Abilities: " + (pokemon.abilities[2] ? capitalizeFirstLetter(pokemon.abilities[0].ability.name) + ", " + capitalizeFirstLetter(pokemon.abilities[1].ability.name) + ", " + capitalizeFirstLetter(pokemon.abilities[2].ability.name) : (pokemon.abilities[1] ? capitalizeFirstLetter(pokemon.abilities[0].ability.name) + ", " + capitalizeFirstLetter(pokemon.abilities[1].ability.name) : capitalizeFirstLetter(pokemon.abilities[0].ability.name)))}</p>
                <p>{"Weight: " + pokemon.weight / 10 + "kg"}</p>
            </div>
            }
        </div>
    )
}
