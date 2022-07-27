import React from 'react'

function Nav() {
    return (
        <div className="nav">
            <a href="/">B.F.G. Productions</a>
            <ul className="nav-link-group">
                <li className="nav-link inactive">Artist Roster</li>
                <li className="nav-link">Our Services</li>
                <li className="nav-link inactive">Merchandise</li>
            </ul>
        </div>
    )
}

export default Nav