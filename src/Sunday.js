import React from 'react'

function Sunday({weeklies}) {

    let sundayList
    let count = 0
    let plural

    if (weeklies) {
        sundayList = weeklies.map(weekly => {
            if (weekly.date === 'Sunday') {
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
            <div className="weekly weekly-sunday">
                <h2 className="weekly-header">Sunday</h2>
                <div className="weekly-event-list sunday">
                    {sundayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-sunday">
                <h2 className="weekly-header">Sunday</h2>
                <div className="weekly-event-list sunday">
                    <h1>No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Sunday