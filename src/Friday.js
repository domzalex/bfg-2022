import React from 'react'

function Friday({weeklies}) {

    let fridayList
    let count = 0
    let plural

    if (weeklies) {
        fridayList = weeklies.map(weekly => {
            if (weekly.date === 'Friday') {
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
            <div className="weekly weekly-friday">
                <h2 className="weekly-header">Friday</h2>
                <div className="weekly-event-list friday">
                    {fridayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-friday">
                <h2 className="weekly-header">Friday</h2>
                <div className="weekly-event-list friday">
                    <h1>No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Friday