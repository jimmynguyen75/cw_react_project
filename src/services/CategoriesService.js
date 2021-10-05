import axios from 'axios';

const CATEGORIES_API_URL = "https://carworld.cosplane.asia/api/post/"

class Categories {
    getCars() {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByType?postType=1")
    }
    getAccessories() {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByType?postType=2")
    }
    getEvents() {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByType?postType=3")
    }
    getContests() {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByType?postType=4")
    }
    search(value) {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByKeyword?keyword=" + value)
    }
}

export default new Categories();
