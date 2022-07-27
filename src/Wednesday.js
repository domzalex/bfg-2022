import React from 'react'

function Wednesday({weeklies}) {

    let wednesdayList
    let count = 0
    let plural

    if (weeklies) {
        wednesdayList = weeklies.map(weekly => {
            if (weekly.date === 'Wednesday') {
                count ++
                return (
                    <ul>
                        <li className="weekly-name">{weekly.name}</li>
                        <li className="weekly-time">{weekly.time}</li>
                        <li className="weekly-location">{weekly.location}</li>
                    </ul>
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