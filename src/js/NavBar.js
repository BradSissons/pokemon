import React from 'react'
import '../css/NavBar.css'

export default function NavBar() {
    return (
        <div id="navBar" style={{display:'flex'}}>
            <h2>Pokédex</h2>
            <form>
                <input type="search" placeholder="Search"></input>
            </form>
        </div>
    )
}
