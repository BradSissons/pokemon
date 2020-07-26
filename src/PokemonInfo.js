import React from 'react'

export default function PokemonInfo({ pokemon }) {
    return (
        <div>
            {/* if pokemon data is available*/}
            {pokemon &&
            <div>
                <p>{"Pokedex #" + pokemon.id}</p>
                <p>{"Name: " + pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt="Sprite"/>
                <p>{"Type: " + (pokemon.types[1] ? pokemon.types[0].type.name + " / " + pokemon.types[1].type.name : pokemon.types[0].type.name)}</p>
                <p>{"Abilities: " + (pokemon.abilities[2] ? pokemon.abilities[0].ability.name + ", " + pokemon.abilities[1].ability.name + ", " + pokemon.abilities[2].ability.name : (pokemon.abilities[1] ? pokemon.abilities[0].ability.name + ", " + pokemon.abilities[1].ability.name : pokemon.abilities[0].ability.name))}</p>
                <p>{"Weight: " + pokemon.weight / 10 + "kg"}</p>
            </div>
            }
        </div>
    )
}
