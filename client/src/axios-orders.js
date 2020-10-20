import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://buila-a-burger.firebaseio.com/'
});
export default instance;