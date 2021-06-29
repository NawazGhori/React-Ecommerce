import axios from "axios"
import { Dispatch } from "redux"
import { SIGN_IN, SignInActionTypes, SIGN_OUT, SIGN_UP } from "../types/SignInActionTypes"

export const SignIn = (login_details: any) => {
    return async (dispatch: Dispatch<SignInActionTypes>, getState: () => any) => {
        try {
            const res = await axios.post('http://localhost:8080/api/users/signin', login_details)
            const { data } = res;
            dispatch({
                user_details: data,
                message: "",
                error: "",
                type: SIGN_IN
            })
            window.localStorage.setItem("user_details", JSON.stringify(getState().signIn.user_details));
        } catch (err) {
            dispatch({
                user_details: {
                    "_id": "",
                    "email": "",
                    "isAdmin": false,
                    "image": "",
                    "token": ""
                },
                message: "",
                error: err.message,
                type: SIGN_IN
            })
        }
    }
}

export const SignOut = () => {
    return async (dispatch: Dispatch<SignInActionTypes>) => {
        dispatch({
            user_details: {
                "_id": "",
                "email": "",
                "isAdmin": false,
                "image": "",
                "token": ""
            },
            message:"",
            error: "",
            type: SIGN_OUT
        })
        window.localStorage.removeItem("user_details")
    }
}

export const SignUp = (signup_details:any) => {
    return async (dispatch:Dispatch<SignInActionTypes>) =>{
        try {
            console.log("from signup")
            console.log(signup_details)
            const res = await axios.post('http://localhost:8080/api/users/register', signup_details)
            const { data } = res;
            console.log(data.message)
            dispatch({
                user_details: {
                    "_id": "",
                    "email": "",
                    "isAdmin": false,
                    "image": "",
                    "token": "" 
                },
                error: "",
                message: data.message,
                type: SIGN_UP
            })
        }catch (err){
            dispatch({
                user_details: {
                    "_id": "",
                    "email": "",
                    "isAdmin": false,
                    "image": "",
                    "token": ""
                },
                error: err.message,
                message: "",
                type: SIGN_UP
            })
        }
    }
}
