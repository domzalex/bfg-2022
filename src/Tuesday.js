import React from 'react'

function Tuesday({weeklies}) {

    let tuesdayList
    let count = 0
    let plural

    if (weeklies) {
        tuesdayList = weeklies.map(weekly => {
            if (weekly.date === 'Tuesday') {
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
            <div className="weekly weekly-tuesday">
                <h2 className="weekly-header">Tuesday</h2>
                <div className="weekly-event-list tuesday">
                    {tuesdayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-tuesday">
                <h2 className="weekly-header">Tuesday</h2>
                <div className="weekly-event-list tuesday">
                    <h1 className="no-events">No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Tuesday