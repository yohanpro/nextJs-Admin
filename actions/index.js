import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_URL}`
});


export const userLogin = async (userData) => {
    const url = '/auth/login';

    return await axiosInstance.post(url, userData).then(response => {
        console.log("userLogin -> response", response);
        return response.data;
    });
};