import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 84dc829947932cfcc72df9017f15660b0c348eb1db1915f43ccb98775c677155'
    }
});