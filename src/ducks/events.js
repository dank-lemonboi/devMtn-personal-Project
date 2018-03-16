import axios from "axios";

const initialState = {
  events: [],
  eventName: '',
  eventCity: '',
  eventZip: '',
  eventAddress: '',
  eventImage: '',
  eventBookId: '',
  eventDescription: ''
};

const GET_EVENTS = "GET_EVENTS";
const EVENT_NAME = "EVENT_NAME";
const EVENT_CITY = "EVENT_CITY";
const EVENT_ZIP =  "EVENT_ZIP";
const EVENT_ADDRESS = "EVENT_ADDRESS";
const EVENT_IMAGE = "EVENT_IMAGE";
const EVENT_BOOK_ID = "EVENT_BOOK_ID";
const EVENT_DESCRIPTION = "EVENT_DESCRIPTION";

const _FULFILLED = "_FULFILLED";


export function getEvents() {
  let eventData = axios.get("http://localhost:3030/events/getevents").then(res => {
    // console.log(res.data);
    return res.data;
  });

  return {
    type: GET_EVENTS,
    payload: eventData
  };
}

export function inputName(name) {
  return {
    type: EVENT_NAME,
    payload: name
  }

}

export function inputCity(city) {
  return {
    type: EVENT_CITY,
    payload: city
  }

}

export function inputZip(zip) {
  return {
    type: EVENT_ZIP,
    payload: zip
  }
}

export function inputAddress(address) {
  return {
    type: EVENT_ADDRESS,
    payload: address
  }
}

export function inputUrl(url) {
  return {
    type: EVENT_IMAGE,
    payload: url
  }
}

export function inputBookID(bookID) {
  return {
    type: EVENT_BOOK_ID,
    payload: bookID
  }
}

export function inputDescription(description) {
  return {
    type: EVENT_DESCRIPTION,
    payload: description
  }
}

export default function reducer(state = initialState, action) {
    // console.log(action)
  switch (action.type) {

      case GET_EVENTS + _FULFILLED:
        return Object.assign({}, state, { events: action.payload });

      case EVENT_NAME:
        return Object.assign({}, state, { eventName: action.payload });

      case EVENT_CITY:
        return Object.assign({}, state, { eventCity: action.payload });

      case EVENT_ZIP:
        return Object.assign({}, state, { eventZip: action.payload});

      case EVENT_ADDRESS:
        return Object.assign({}, state, { eventAddress: action.payload });

      case EVENT_IMAGE:
        return Object.assign({}, state, { eventImage: action.payload });

      case EVENT_BOOK_ID:
        return Object.assign({}, state, { eventBookId: action.payload });

      case EVENT_DESCRIPTION:
        return Object.assign({}, state, { eventDescription: action.payload });

    default:
      return state;
  }
}
