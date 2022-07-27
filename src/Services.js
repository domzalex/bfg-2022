import React, { useRef } from 'react'

function Services({setServices}) {

    return (
        <div className="services-modal">
            <div onClick={() => setServices(false)} className="modal-close"></div>
            <h1 className="services-header">Services We Offer</h1>
            <div className="services-group">
                <ul className="services-one">
                    <h2>Category One</h2>
                    <li className="service"></li>
                    <li className="service"></li>
                    <li className="service"></li>
                </ul>
                <ul className="services-two">
                    <h2>Category Two</h2>
                    <li className="service"></li>
                    <li className="service"></li>
                    <li className="service"></li>
                </ul>
                <ul className="services-three">
                    <h2>Category Three</h2>
                    <li className="service"></li>
                    <li className="service"></li>
                    <li className="service"></li>
                </ul>
            </div>
        </div>
    )

}

export default Services