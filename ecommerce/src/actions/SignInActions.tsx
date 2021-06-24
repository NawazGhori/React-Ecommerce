import axios from "axios"
import { Dispatch } from "redux"
import { SIGN_IN, SignInActionTypes } from "../types/SignInActionTypes"

export const SignIn = (login_details: any) => {
    return async (dispatch: Dispatch<SignInActionTypes>) => {
        try {
            const res = await axios.post('http://localhost:8080/api/users/signin', login_details)
            const { data } = res;
            dispatch({
                user_details: data,
                type: SIGN_IN
            })
        } catch (err) {
            console.log(err);
        }
    }
}

