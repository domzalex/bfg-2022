import React from 'react'
import WeeklyList from './WeeklyList'

function Sunday({weeklies}) {

    let sundayList
    let count = 0
    let plural

    if (weeklies) {
        sundayList = weeklies.map(weekly => {
            if (weekly.date === 'Sunday') {
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
                    <h1 className="no-events">No events scheduled</h1>
                </div>
            </div>
        )
    }

}

export default Sunday