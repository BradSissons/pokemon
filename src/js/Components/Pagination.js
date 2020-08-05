import React from 'react'
import '../../css/Pokemon.css'

export default function Pagination({ next, prev }) {
    return (
        <div id="content">
            {/* add previous and next buttons */}
            {prev && <button onClick={prev}>Previous</button>}
            {next && <button onClick={next}>Next</button>}
        </div>
        
    )
}
