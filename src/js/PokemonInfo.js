import React from 'react'
import '../css/Pokemon.css'
import '../css/Types.css'

export default function PokemonInfo({ pokemon }) {
    function padLeft(ID) {
        return String(ID).padStart(3, "0")
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
                    <p>{"Height: " + pokemon.height + "m"}</p>
                    <p>{"Weight: " + pokemon.weight / 10 + "kg"}</p>
                    <p>{"Abilities: " + pokemon.abilities.map(p => " " + removeQuotes(JSON.stringify(p.ability.name)))}</p>
                    <p>{"Base Stats:"}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>{"HP:"}</td>
                                <td>{pokemon.stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <td>{"Attack:"}</td>
                                <td>{pokemon.stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td>{"Defence:"}</td>
                                <td>{pokemon.stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <td>{"Special-Attack:"}</td>
                                <td>{pokemon.stats[3].base_stat}</td>
                            </tr>
                            <tr>
                                <td>{"Special-Defence: "}</td>
                                <td>{pokemon.stats[4].base_stat}</td>
                            </tr>
                                <tr>
                                <td>{"Speed:"}</td>
                                <td>{pokemon.stats[5].base_stat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>    
            </div>
            }
        </div>
    )
}