import { Signin } from "../model/Signin";
import { SIGN_IN, SignInActionTypes, SIGN_OUT } from "../types/SignInActionTypes"

interface IState {
    user_details: Signin;
    error: String;
}
const initalState = {
    user_details: window.localStorage.getItem("user_details") ? (JSON.parse(window.localStorage.getItem("user_details") || "{}")) :
        {
            "_id": "",
            "email": "",
            "isAdmin": false,
            "image": "",
            "token": ""
        },
    error: ""
}
export const SignInReducer = (state = initalState, action: SignInActionTypes): IState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user_details: action.user_details,
                error: action.error
            }
        case SIGN_OUT:
            return {
                ...state,
                user_details: action.user_details,
                error: action.error
            }
        default:
            return state;
    }
}