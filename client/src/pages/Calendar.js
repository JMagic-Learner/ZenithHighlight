import * as React from 'react';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

export default function Calendar() {
    return(
        
        <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=2tjge4eu37t82b1nmsp2uqop64%40group.calendar.google.com&ctz=America%2FLos_Angeles" height='1000px'/>

    )
}