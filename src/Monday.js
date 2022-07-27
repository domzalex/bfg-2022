import React from 'react'

function Monday({weeklies}) {

    let mondayList
    let count = 0
    let plural

    if (weeklies) {
        mondayList = weeklies.map(weekly => {
            if (weekly.date === 'Monday') {
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
        if (count === 0 || count > 1) {
            plural = ' Events'
        } else {
            plural = ' Event'
        }
    }

    if (count > 0) {
        return (
            <div className="weekly weekly-monday">
                <h2 className="weekly-header">Monday</h2>
                <div className="weekly-event-list monday">
                    {mondayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-monday">
                <h2 className="weekly-header">Monday</h2>
                <div className="weekly-event-list monday">
                    <h1>No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Monday