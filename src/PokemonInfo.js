import React from 'react'

export default function PokemonInfo({ pokemon }) {
    return (
        <div>
            {pokemon &&
            <div>
                <p>{"Name: " + pokemon.name}</p>
                <p>{"Weight: " + pokemon.weight}</p>
            </div>
            }
        </div>
    )
}
