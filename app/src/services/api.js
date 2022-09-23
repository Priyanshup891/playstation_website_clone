import axios from 'axios';

const URL = "http://localhost:4000";

export const authenticateSignUp = async (data) => {
    try{
        return await axios.post(`${URL}/signUp`, data);
    } catch(error){
        console.log(error.message);
    }
};

export const authenticateSignIn = async (data) => {
    try{
        return await axios.post(`${URL}/signIn`, data);
    } catch(error){
        console.log(error.message);
        return error.response;
    }
}

export const payWithPaytm = async (data) => {
    try {
        let response =  await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}