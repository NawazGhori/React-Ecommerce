import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn } from "../actions/SignInActions";

interface IProps {
    login_Fn: any;
    res: any;
}
interface IState { }
class SignInScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    uemail = React.createRef<HTMLInputElement>();
    upwd = React.createRef<HTMLInputElement>();
    login = (e:any)=>{   
        e.preventDefault()
        this.props.login_Fn({"email":this.uemail.current?.value,"password":this.upwd.current?.value})
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <form className="form" onSubmit={this.login}>
                        <div><h1>Sign In</h1></div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter email" ref={this.uemail} required/> 
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" ref={this.upwd} required/>
                        </div>
                        <div>
                            <button type="submit" className="button primary">Sign In</button>
                        </div>
                        <div>
                            <div>New Customer ? <a href="/">Create New Account</a></div>
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
        login_Fn: (obj: any) => { dispatch(SignIn(obj)) }
    }
}


export default connect(receive, send)(SignInScreen);