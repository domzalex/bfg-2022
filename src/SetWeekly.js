import React from 'react'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'

function SetWeekly({weeklies, currentDay}) {

    if (currentDay === 'Monday') {
        return <Monday weeklies={weeklies}/>
    } else if (currentDay === 'Tuesday') {
        return <Tuesday weeklies={weeklies}/>
    } else if (currentDay === 'Wednesday') {
        return <Wednesday weeklies={weeklies}/>
    } else if (currentDay === 'Thursday') {
        return <Thursday weeklies={weeklies}/>
    } else if (currentDay === 'Friday') {
        return <Friday weeklies={weeklies}/>
    } else if (currentDay === 'Saturday') {
        return <Saturday weeklies={weeklies}/>
    } else if (currentDay === 'Sunday') {
        return <Sunday weeklies={weeklies}/>
    }
    
}

export default SetWeekly