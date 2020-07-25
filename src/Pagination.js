import React from 'react'

export default function Pagination({ nextPoke, prevPoke }) {
    return (
        <div>
            {prevPoke && <button onClick={prevPoke}>Previous</button>}
            {nextPoke && <button onClick={nextPoke}>Next</button>}
        </div>
        
    )
}
