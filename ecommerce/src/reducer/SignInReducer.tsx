import { Signin } from "../model/Signin";
import { SIGN_IN, SignInActionTypes } from "../types/SignInActionTypes"

interface IState {
    user_details: Signin
}
const initalState = {
    user_details: {
        "_id": "",
        "email": "",
        "isAdmin": false,
        "image": "",
        "token": ""
    }
}
export const SignInReducer = (state = initalState, action: SignInActionTypes): IState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user_details: action.user_details
            }
        default:
            return state;
    }
}