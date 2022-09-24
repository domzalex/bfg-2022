import React, { useRef } from 'react'
import ArtistsList from './ArtistsList'

function Artists({artists}) {

    return (

        <div className="artists-modal">
                {/* <h1 className="artists-header">Our Artists / Acts</h1> */}
                <ArtistsList />
        </div>
    )

}

export default Artists