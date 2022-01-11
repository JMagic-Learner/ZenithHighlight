const {google} = require('googleapis');
require('dotenv').config();

//Credit to Raj Kapadia, github RajKKapadia


//Provide credential configuration, reads credentials
const type = process.env.TYPE;
const projectId = process.env.PROJECT_ID;
const privatekeyId = process.env.PRIVATEKEY_ID;
const privateKey = process.env.PRIVATE_KEY;
const clientEmail = process.env.CLIENT_ID;
const authUri = process.env.AUTH_URI;
const tokenUri = process.env.TOKEN_URI;
const authProvider = process.env.AUTH_PROVIDER_X509_CERT_URL
const clientCert = process.env.AUTH_CLIENT_X509_CERT_URL
const calendarId = process.env.CALENDAR_ID;

//Provide google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar'
const calendar = google.calendar({version : "v3"});

const authentication = new google.auth.JWT(
  clientEmail,
  null,
  privateKey,
  SCOPES
)

const TIMEOFFSET = '+5:30';

export default function dateTimeForCalander() {

  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
      month = `0${month}`;
  }
  let day = date.getDate();
  if (day < 10) {
      day = `0${day}`;
  }
  let hour = date.getHours();
  if (hour < 10) {
      hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
      minute = `0${minute}`;
  }

  let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

  let event = new Date(Date.parse(newDateTime));

  let startDate = event;
  // Delay in end time is 1
  let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));

  return {
      'start': startDate,
      'end': endDate
  }
};

// Insert new event to Google Calendar
const insertEvent = async (event) => {

  try {
      let response = await calendar.events.insert({
          auth: auth,
          calendarId: calendarId,
          resource: event
      });

      if (response['status'] == 200 && response['statusText'] === 'OK') {
          return 1;
      } else {
          return 0;
      }
  } catch (error) {
      console.log(`Error at insertEvent --> ${error}`);
      return 0;
  }
};

// let dateTime = dateTimeForCalander();

// Event for Google Calendar
let event = {
    'summary': `This is the summary.`,
    'description': `This is the description.`,
    'start': {
        'dateTime': dateTime['start'],
        'timeZone': 'NA/Seattle'
    },
    'end': {
        'dateTime': dateTime['end'],
        'timeZone': 'NA/Seattle'
    }
};

insertEvent(event)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Get all the events between two dates
const getEvents = async (dateTimeStart, dateTimeEnd) => {

  try {
      let response = await calendar.events.list({
          auth: auth,
          calendarId: calendarId,
          timeMin: dateTimeStart,
          timeMax: dateTimeEnd,
          timeZone: 'NA/Seattle'
      });

      let items = response['data']['items'];
      return items;
  } catch (error) {
      console.log(`Error at getEvents --> ${error}`);
      return 0;
  }
};

let start = '2020-10-03T00:00:00.000Z';
let end = '2020-10-04T00:00:00.000Z';

getEvents(start, end)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Delete an event from eventID
const deleteEvent = async (eventId) => {

  try {
      let response = await calendar.events.delete({
          auth: auth,
          calendarId: calendarId,
          eventId: eventId
      });

      if (response.data === '') {
          return 1;
      } else {
          return 0;
      }
  } catch (error) {
      console.log(`Error at deleteEvent --> ${error}`);
      return 0;
  }
};

let eventId = 'hkkdmeseuhhpagc862rfg6nvq4';

deleteEvent(eventId)
  .then((res) => {
      console.log(res);
  })
  .catch((err) => {
      console.log(err);
  }); 


