import React from 'react'

export default function Pagination({ nextPoke, prevPoke }) {
    return (
        <div>
            {/* add previous and next buttons */}
            {prevPoke && <button onClick={prevPoke}>Previous</button>}
            {nextPoke && <button onClick={nextPoke}>Next</button>}
        </div>
        
    )
}
