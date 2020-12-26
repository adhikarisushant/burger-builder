import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-3a363-default-rtdb.firebaseio.com/'
});

export default instance;