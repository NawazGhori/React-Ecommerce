import React, { Component } from "react";

interface IProps { }
interface IState {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    image: string;

}
class SignUpScreen extends Component<IProps, IState>{
    constructor(props:IProps){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            isAdmin: false,
            image: ""
        }
    }

    register = (e: any) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e: any) => {
        if(e.target.type=== "checkbox"){
            this.setState({
                [e.target.name]: e.target.checked
            } as Pick<IState, keyof IState>)
        }else{
            this.setState({
                [e.target.name]: e.target.value
            } as Pick<IState, keyof IState>)
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <form className="form" onSubmit={this.register}>
                        <div><h1>Register </h1></div>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Enter name" onChange={this.handleChange} name="name"  value={this.state.name} required />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="Enter password"  name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        <div className="checkbox-div">
                            
                            <input type="checkbox" name="isAdmin" checked={this.state.isAdmin} onChange={this.handleChange}/><span> Admin </span>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="text" placeholder="Upload Image" name="image"  value={this.state.image} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <button type="submit" className="button primary">Register</button>
                        </div>
                        <div>
                            <div>Already a Customer ? <a href="/signin">Sign In </a></div>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        )
    }
}
export default SignUpScreen;