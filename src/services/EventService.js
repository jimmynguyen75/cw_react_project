import axios from 'axios';

const EVENTS_API_URL = "https://carworld.cosplane.asia/api/event/";

class EventService {
    getEvents() {
        return axios.get(EVENTS_API_URL + "GetAllNewEvents");
    }

    getEventDetail(eventId) {
        return axios.get(EVENTS_API_URL + '/' + eventId);
    }
}

export default new EventService();