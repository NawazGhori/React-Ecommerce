import { Signin } from "../model/Signin";

export const SIGN_IN = "SIGN_IN ";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";

export interface SignInSync {
    user_details: Signin;
    error: String;
    message: "",
}

export interface SignIn extends SignInSync {
    type: typeof SIGN_IN
}

export interface SignOut extends SignInSync {
    type: typeof SIGN_OUT
}

export interface SignUp extends SignInSync {
    type: typeof SIGN_UP
}
export type SignInActionTypes = SignIn | SignOut | SignUp