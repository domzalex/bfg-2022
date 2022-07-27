import React from 'react'

function Saturday({weeklies}) {

    let saturdayList
    let count = 0
    let plural

    if (weeklies) {
        saturdayList = weeklies.map(weekly => {
            if (weekly.date === 'Saturday') {
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
            <div className="weekly weekly-saturday">
                <h2 className="weekly-header">Saturday</h2>
                <div className="weekly-event-list saturday">
                    {saturdayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-saturday">
                <h2 className="weekly-header">Saturday</h2>
                <div className="weekly-event-list saturday">
                    <h1 className="no-events">No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Saturday