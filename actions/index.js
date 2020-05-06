import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_URL}`
});


export const userLogin = async (userData) => {
    const url = '/auth/login';
    console.log('baseurl', process.env.BASE_URL);
    return await axiosInstance.post(url, userData).then(response => response.data);
};