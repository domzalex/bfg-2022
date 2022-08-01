import React, { useRef } from 'react'

function Artists({setArtists}) {

    return (
        <div className="artists-modal">
            <div className="popout-container">
                <div onClick={() => setArtists(false)} className="modal-close"></div>
                <h1 className="artists-header">Our Artists / Acts</h1>
                <div className="artists-group">
                    <ul className="artists-one">
                        {/* <h2>Category One</h2> */}
                        <li className="artist">The B.F.G. Band</li>
                        <li className="artist">The B.F.G. Trio</li>
                        <li className="artist">Grateful Dan</li>
                        <li className="artist">Grateful Dan Duo</li>
                        <li className="artist">James DeVeau</li>
                        <li className="artist">James DeVeau & Friends</li>
                        <li className="artist">Chad Honea</li>
                        <li className="artist">Chad & Barry</li>
                        <li className="artist">Chad & Keith</li>
                        <li className="artist">Joel Keeley</li>
                    </ul>
                    <ul className="artists-two">
                        {/* <h2>Category Two</h2> */}
                        <li className="artist">Bed By 9</li>
                        <li className="artist">Foster Greene</li>
                        <li className="artist">Shuffle Junkies</li>
                        <li className="artist">Rick Dalton</li>
                        <li className="artist">Eric Leland Duo</li>
                        <li className="artist">Acoustic Thing</li>
                        <li className="artist">Mad Margritt Duo</li>
                        <li className="artist">Dark Star Bros.</li>
                        <li className="artist">Authenticity</li>
                        <li className="artist">Dominic DeSantis</li>
                    </ul>
                    <ul className="artists-three">
                        {/* <h2>Category Three</h2> */}
                        <li className="artist">High Beams</li>
                        <li className="artist">Mother Legacy</li>
                        <li className="artist">Chris Avant</li>
                        <li className="artist">Ryan LittleEagle</li>
                        <li className="artist">Billy Brennan</li>
                        <li className="artist">Ben Dunlap</li>
                        <li className="artist">Jake Douglas</li>
                        <li className="artist">Tim Morgan</li>
                        <li className="artist">Norm Hunt</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Artists