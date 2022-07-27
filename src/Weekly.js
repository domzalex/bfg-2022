import React from 'react'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'

function Weekly({weeklies}) {
    
    // const [currentDay, setDay] = useState('Monday')

    // const weeklyTab = useRef()

    // function selectTab(e) {
    //     if (weeklyTab) {
    //         setDay(e.target.innerHTML)
    //     }
    // }

    // useEffect(() => {
    //     if (currentDay === 'Monday') {
    //         weeklyTab.current.style.transform = 'translateX(0)';
    //     } else if (currentDay === 'Tuesday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(1 * 100%))';
    //     } else if (currentDay === 'Wednesday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(2 * 100%))';
    //     } else if (currentDay === 'Thursday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(3 * 100%))';
    //     } else if (currentDay === 'Friday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(4 * 100%))';
    //     } else if (currentDay === 'Saturday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(5 * 100%))';
    //     } else if (currentDay === 'Sunday') {
    //         weeklyTab.current.style.transform = 'translateX(calc(6 * 100%))';
    //     }
    // }, [currentDay])

    return (
        <div className="weekly-events">
            <h1 className="weekly-event-title">Weekly Events</h1>
            <div className="weekly-event-group">

                {/* <div className="weekly-headers">
                    <h2 onClick={selectTab} className="weekly-title monday-title">Monday</h2>
                    <h2 onClick={selectTab} className="weekly-title tuesday-title">Tuesday</h2>
                    <h2 onClick={selectTab} className="weekly-title wednesday-title">Wednesday</h2>
                    <h2 onClick={selectTab} className="weekly-title thursday-title">Thursday</h2>
                    <h2 onClick={selectTab} className="weekly-title friday-title">Friday</h2>
                    <h2 onClick={selectTab} className="weekly-title saturday-title">Saturday</h2>
                    <h2 onClick={selectTab} className="weekly-title sunday-title">Sunday</h2>
                </div>
                <div ref={weeklyTab} className="header-tab"></div> */}
                <div className="weekly-list">

                    <Monday weeklies={weeklies}/>
                    <Tuesday weeklies={weeklies}/>
                    <Wednesday weeklies={weeklies}/>
                    <Thursday weeklies={weeklies}/>
                    <Friday weeklies={weeklies}/>
                    <Saturday weeklies={weeklies}/>
                    <Sunday weeklies={weeklies}/>

                </div>
            </div>
        </div>
    )
    
}

export default Weekly