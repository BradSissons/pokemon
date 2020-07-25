import React from 'react'

export default function PokemonInfo({ pokemon }) {
    return (
        <div>
            {/* if pokemon data is available*/}
            {pokemon &&
            <div>
                <p>{"Name: " + pokemon.name}</p>
                <p>{"Type: " + (pokemon.types[1] ? pokemon.types[0].type.name + " " + pokemon.types[1].type.name : pokemon.types[0].type.name)}</p>
                <p>{"Weight: " + pokemon.weight / 10}</p>
            </div>
            }
        </div>
    )
}
