import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Services from './Services'
import Artists from './Artists'

function Nav() {

    return (
        <>
            <div className="nav">
                <Link className="home-link" to="/">B.F.G. Productions</Link>
                <ul className="nav-link-group">
                    {/* <Link className="nav-link" to="/Artists">Artist Roster</Link> */}
                    <a className="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlHkx2qXkvwKM0JOvq80YkGUkYEnzUPt1yiLelrndY3yMw/viewform?usp=sf_link" target="_blank">Join B.F.G.</a>
                </ul>
            </div>
        </>
    )
}

export default Nav