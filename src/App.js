import React from 'react';
import './App.css';
import Clock from "./components/Clock";
import TodayCalendar from "./components/TodayCalendar";
import Weather from "./components/Weather";
import ToDoList from "./components/ToDoList/ToDoList";
import Links from "./components/Links";


function App() {
  return (
    <div className="App">
      <Links></Links>
      <ToDoList></ToDoList>
      <Clock></Clock>
      <div className="calender-weather-wrapper">
        <TodayCalendar></TodayCalendar>
        <Weather></Weather>
      </div>
      
    </div>
  );
}

export default App;
