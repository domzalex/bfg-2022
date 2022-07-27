import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'


function App() {

  const [events, setEvents] = useState()
  const [weekly, setWeekly] = useState()

  useEffect(() => {
    const url = "https://gda-backend.herokuapp.com/getEvents";
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setEvents(data)
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const url = "https://gda-backend.herokuapp.com/getWeekly";
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeekly(data)
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Home allEvents={events} weeklies={weekly}/>
      <Footer />
    </>
  )
}

export default App;
