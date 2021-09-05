import axios from 'axios';

const EVENTS_API_URL = "https://fakestoreapi.com/products";

class EventService {
    getTotalEvents() {
        return axios.get(EVENTS_API_URL);
    }
}

export default new EventService();