import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "../actions/SignInActions";
import MessageBox from "../components/MessageBox";
import { History, LocationState } from "history";

interface IProps {
    login_Fn: any;
    res: any;
    history: History<LocationState>;
    logout_Fn: any;
}
interface IState { }
class SignInScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    uemail = React.createRef<HTMLInputElement>();
    upwd = React.createRef<HTMLInputElement>();

    redirect = () => {
        console.log(this.props.res)
        if (this.props.res.user_details._id != "") {
            //this.props.history.push("/cart")
        }
    }
    
    login = async (e: any) => {
        e.preventDefault()
        await this.props.login_Fn({ "email": this.uemail.current?.value, "password": this.upwd.current?.value })
        await this.redirect()

    };

    logout = (e: any) => {
        e.preventDefault();
        this.props.logout_Fn()
    }
    render() {
        const { error } = this.props.res
        return (
            <React.Fragment>
                <div className="row">
                    <form className="form" onSubmit={this.login}>
                        <div><h1>Sign In</h1></div>
                        {error ? (<MessageBox variant="danger">{error.includes("401") ? "Invalid Credentials" : error}</MessageBox>) : (<span></span>)}
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter email" ref={this.uemail} required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" ref={this.upwd} required />
                        </div>
                        <div>
                            <button type="submit" className="button primary">Sign In</button>
                        </div>
                        <div>
                            <div>New Customer ? <a href="/signup">Create New Account</a></div>
                        </div>
                        <div>
                            <button onClick={this.logout}>Signout</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

//subscription
const receive = (state: any) => {
    return {
        res: state.signIn
    }
}

//dispatch
const send = (dispatch: any) => {
    return {
        login_Fn: (obj: any) => { dispatch(SignIn(obj)) },
        logout_Fn: () => { dispatch(SignOut()) }
    }
}


export default connect(receive, send)(SignInScreen);