import axios from 'axios';
import moment from 'moment';
import 'moment/locale/vi';
const EVENT_API_URL = "https://carworld.cosplane.asia/api/contestEvent/"

class EventService {
    getEvents() {
        return axios.get(EVENT_API_URL + "GetNewCEs?type=1&now=" + moment().format('yyyy-MM-DDTHH:mm:ss'))
    }

    getEventDetail(eventId) {
        return axios.get(EVENT_API_URL + '/GetCEById?id=' + eventId);
    }
}

export default new EventService();