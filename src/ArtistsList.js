import React, { useState, useEffect } from 'react'

function ArtistsList() {

    const [artists, setArtists] = useState()

    useEffect(() => {
        const url = "https://gda-backend.herokuapp.com/getArtists";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setArtists(data)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    
    let allArtists

    if (artists) {
        allArtists = artists.map(artist => {
            return (
                <li className="artist">{artist.name}</li>
            )
        })
    }

    return (
        <ul className="artist-list">
            {allArtists}
        </ul>
    )

}

export default ArtistsList