import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dayGridPlugin } from 'fullcalendar';

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 8, 0),
        end: new Date(2022, 8, 0),
        test:"kakao",
    },
    {
        title: "Vacation",
        start: new Date(2022, 8, 7),
        end: new Date(2022, 8, 10),
        test:"kakao2",
    },
    {
        title: "Conference",
        start: new Date(2022, 8, 20),
        end: new Date(2022, 8, 23),
        test:"kakao5",
    },
];
export default function Calendrier() {
  
      const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" ,test:""});
      const [allEvents, setAllEvents] = useState(events);

      function handleAddEvent() {
          setAllEvents([...allEvents, newEvent]);
      }
      return (
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      )
      
    
}

