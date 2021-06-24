import { Signin } from "../model/Signin";

export const SIGN_IN = "SIGN_IN ";

export interface SignInSync {
    user_details: Signin
}

export interface SignIn extends SignInSync {
    type: typeof SIGN_IN
}

export type SignInActionTypes = SignIn