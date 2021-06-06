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
      <Clock></Clock>
      <TodayCalendar></TodayCalendar>
      <Weather></Weather>
      <ToDoList></ToDoList>
      <Links></Links>
    </div>
  );
}

export default App;
