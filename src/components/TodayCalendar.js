import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TodayCalendar.css"

const TodayCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar onChange={onChange}
        value={value}/>
  );
}

export default TodayCalendar;