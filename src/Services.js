import React, { useRef } from 'react'

function Services() {


    const modal = useRef()
    const close = useRef()

    function closeModal() {
        if (modal) {
            modal.current.style.display = 'none'
        }
    }

    return (
        <div ref={modal} className="services-modal">
            <div ref={close} onClick={closeModal} className="services-close"></div>
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