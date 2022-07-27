import React from 'react'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'

function Weekly({weeklies}) {

    return (
        <div className="weekly-events">
            <div className="weekly-list">

                <Monday weeklies={weeklies}/>
                <Tuesday weeklies={weeklies}/>
                <Wednesday weeklies={weeklies}/>
                <Thursday weeklies={weeklies}/>
                <Friday weeklies={weeklies}/>
                <Saturday weeklies={weeklies}/>
                <Sunday weeklies={weeklies}/>

            </div>
        </div>
    )
    
}

export default Weekly