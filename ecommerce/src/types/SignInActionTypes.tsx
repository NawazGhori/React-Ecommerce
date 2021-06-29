import { Signin } from "../model/Signin";

export const SIGN_IN = "SIGN_IN ";
export const SIGN_OUT = "SIGN_OUT";

export interface SignInSync {
    user_details: Signin;
    error: String;
}

export interface SignIn extends SignInSync {
    type: typeof SIGN_IN
}

export interface SignOut extends SignInSync {
    type: typeof SIGN_OUT
}

export type SignInActionTypes = SignIn | SignOut