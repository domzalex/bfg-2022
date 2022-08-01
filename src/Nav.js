import React, { useState } from 'react'
import Services from './Services'
import Artists from './Artists'

function Nav() {
    const ArtistBtn = () => {
        return <li onClick={() => {setServices(false); setArtists(true); setMerch(false)}} className="nav-link artists">Artist Roster</li>
    }
    const ServicesBtn = () => {
        return <li onClick={() => {setServices(true); setArtists(false); setMerch(false)}} className="nav-link services inactive">Our Services</li>
    }
    const MerchBtn = () => {
        return <li onClick={() => {setServices(false); setArtists(false); setMerch(true)}} className="nav-link merchandise inactive">Merchandise</li>
    }

    const [showServices, setServices] = useState(false)
    const [showArtists, setArtists] = useState(false)
    const [showMerch, setMerch] = useState(false)

    return (
        <>
            <div className="nav">
                <a className="home-link" href="/">B.F.G. Productions</a>
                <ul className="nav-link-group">
                    <ArtistBtn />
                    <ServicesBtn />
                    <MerchBtn />
                </ul>
            </div>
            {
                showServices? <Services setServices={setServices}/> : null
            }
            {
                showArtists? <Artists setArtists={setArtists}/> : null
            }
            {/* {
                showMerch? <Merch /> : null
            } */}
        </>
    )
}

export default Nav