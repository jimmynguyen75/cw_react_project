import axios from 'axios';
import moment from 'moment';
import 'moment/locale/vi';
const CONTEST_API_URL = "https://carworld.cosplane.asia/api/contestEvent/"

class ContestService {
    getContests() {
        return axios.get(CONTEST_API_URL + "GetRegisterCEsWeb?type=2&now=" + moment().format('yyyy-MM-DDTHH:mm:ss'))
    }
    getContestsByBrandId(id) {
        return axios.get(CONTEST_API_URL + "GetRegisterCEsByBrandWeb?brandId=" + id + "&type=2&now=" + moment().format('yyyy-MM-DDTHH:mm:ss'))
    }
}

export default new ContestService();