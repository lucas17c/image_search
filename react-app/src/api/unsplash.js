import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9514a6c56925dbf7ff96dc3504cc2de72279a9424d8d97c1e99f1b12f88a66b9'
    }
});