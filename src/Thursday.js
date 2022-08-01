import React from 'react'
import WeeklyList from './WeeklyList'

function Thursday({weeklies}) {

    let thursdayList
    let count = 0
    let plural

    if (weeklies) {
        thursdayList = weeklies.map(weekly => {
            if (weekly.date === 'Thursday') {
                count ++
                return (
                    <WeeklyList weekly={weekly}/>
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
            <div className="weekly weekly-thursday">
                <h2 className="weekly-header">Thursday</h2>
                <div className="weekly-event-list thursday">
                    {thursdayList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="weekly weekly-thursday">
                <h2 className="weekly-header">Thursday</h2>
                <div className="weekly-event-list thursday">
                    <h1 className="no-events">No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Thursday