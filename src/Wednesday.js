import React from 'react'
import WeeklyList from './WeeklyList'

function Wednesday({weeklies}) {

    let wednesdayList
    let count = 0
    let plural

    if (weeklies) {
        wednesdayList = weeklies.map(weekly => {
            if (weekly.date === 'Wednesday') {
                count ++
                return (
                    <WeeklyList weekly={weekly}/>
                )
            }
        })
    }

    if (count > 0) {
        return (
            <div className="weekly weekly-wednesday">
                <h2 className="weekly-header">Wednesday</h2>
                <div className="weekly-event-list wednesday">
                    {wednesdayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-wednesday">
                <h2 className="weekly-header">Wednesday</h2>
                <div className="weekly-event-list wednesday">
                    <h1 className="no-events">No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Wednesday