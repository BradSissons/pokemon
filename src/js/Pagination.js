import React from 'react'
import '../css/Pokemon.css'

export default function Pagination({ nextPoke, prevPoke }) {
    return (
        <div id="content">
            {/* add previous and next buttons */}
            {prevPoke && <button onClick={prevPoke}>Previous</button>}
            {nextPoke && <button onClick={nextPoke}>Next</button>}
        </div>
        
    )
}
