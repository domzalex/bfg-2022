import React from 'react'

function Events({allEvents}) {

    let eventList

    if (allEvents) {
        eventList = allEvents.map(event => {
            return (
                <ul className="event" key={event._id}>
                    <li className="event-date">{(event.date.split(' ', 4)[0] + ' - ' + event.date.split(' ', 4)[1] + ', ' + event.date.split(' ', 4)[2] + ', ' + event.date.split(' ', 4)[3])} - {event.time}</li>
                    <li className="event-name">{event.name}</li>
                    <li className="event-location">{event.location}</li>
                </ul>
            )  
        })
    }
    return (
        <div className="events-container">
            <div className="events-list">
                {eventList}
            </div>
        </div>
    )


}

export default Events