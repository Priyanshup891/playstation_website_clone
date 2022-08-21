import axios from 'axios';

const URL = "http://localhost:5000";

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