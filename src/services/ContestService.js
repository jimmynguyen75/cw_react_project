import axios from 'axios';

const CONTESTS_API_URL = "https://carworld.cosplane.asia/api/contest/";

class ContestService {
    getContests() {
        return axios.get(CONTESTS_API_URL + "GetAllNewContests");
    }
}

export default new ContestService();