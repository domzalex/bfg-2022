import React from 'react'
import Hero from './Hero'
import Weekly from './Weekly'
import Events from './Events'
import Services from './Services'

function Home({allEvents, weeklies}) {
    return (
        <div>
            <Hero />
            <Weekly weeklies={weeklies}/>
            <Events allEvents={allEvents}/>
            {/* <Services /> */}
        </div>
    );
}

export default Home;