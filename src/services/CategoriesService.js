import axios from 'axios';

const CATEGORIES_API_URL = "https://carworld.cosplane.asia/api/post/"
const BRAND_API_URL = "https://carworld.cosplane.asia/api/brand/"

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
    getAll() {
        return axios.get(CATEGORIES_API_URL + "GetAllPosts")
    }
    getPostById(id) {
        return axios.get(CATEGORIES_API_URL + "GetPostById?id=" + id)
    }
    getBrandById(id) {
        return axios.get(BRAND_API_URL + "GetBrandById?id=" + id)
    }
    getAllBrand() {
        return axios.get(BRAND_API_URL + "GetAllBrandsOfCar")
    }
    getAllAccessoriesBrand() {
        return axios.get(BRAND_API_URL + "GetAllBrandsOfAccessory")
    }
    getPostByBrandId(id) {
        return axios.get(CATEGORIES_API_URL + "GetAllPostsByBrand?brandId=" + id)
    }
}

export default new Categories();
