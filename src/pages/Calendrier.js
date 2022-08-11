import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 

import React from 'react'

export default function Calendrier() {

      return (
        <FullCalendar
        weekends={false}
        events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
        ]}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"

      />
      )
      
    
}

