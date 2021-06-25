/*
   1) grid-container
   2) row
   3) center
   4) brand
*/

import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { connect } from "react-redux";
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PaymentScreen from './screens/PaymentScreen';

interface IProps {
   count: any;
   profile_pic: string;
}
interface IState { }

class App extends React.Component<IProps, IState>{
   constructor(props: IProps) {
      super(props)
   }
   render() {
      return (
         <React.Fragment>
            <BrowserRouter>

               <div className="grid-container">
                  <header className="row">
                     <div>
                        <NavLink to="/" exact={true} strict className="brand">EShop</NavLink>
                     </div>

                     <div className="d-flex">
                        {/* <NavLink to="/cart" exact={true} strict >Cart
                           {this.props.count > 0 ? <span className="badge-success">{this.props.count}</span> : <span className="badge-empty">{this.props.count}</span>}
                        </NavLink> */}
                        <NavLink to="/cart" exact={true} strict ><i className="fa fa-shopping-cart" aria-hidden="true" id="#cart-icon"></i>
                           {this.props.count > 0 ? <span className="badge badge-success">{this.props.count}</span> : <span className="badge badge-empty">{this.props.count}</span>}
                        </NavLink>
                        {/* <NavLink to="/signIn" exact={true} strict>SignIn</NavLink> */}
                        <div>
                           {this.props.profile_pic ?
                              <div className="dropdown d-flex">
                                 <img src={this.props.profile_pic} alt="profile_pic" id="profile_pic" /><i className="fa fa-caret-down" aria-hidden="true"></i>
                                 <div className="dropdown-content">
                                    <a href="#">Profile</a>
                                    <a href="#">Orders</a>
                                    <a href="#">Signout</a>
                                 </div>
                              </div>
                              : <NavLink to="/signin" exact={true} strict><i className="fa fa-user" id="profile_pic" aria-hidden="true"></i></NavLink>
                           }
                        </div>
                     </div>
                  </header>

                  <main>
                     <Route path="/" component={HomeScreen} exact={true} strict></Route>
                     <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                     <Route path="/cart/:id?" component={CartScreen} exact={true} strict></Route>
                     <Route path="/signin" component={SignInScreen} exact={true} strict></Route>
                     <Route path="/signup" component={SignUpScreen} exact={true} strict></Route>
                     <Route path="/payment" component={PaymentScreen} exact={true} strict></Route>
                  </main>

                  <footer className="row center">copyright@eshop.in</footer>
               </div>
            </BrowserRouter>
         </React.Fragment>
      )
   }
}

const receive = (state: any) => {
   return {
      count: state.cart.finalArray.length,
      profile_pic: state.signIn.user_details.image
   }
}

const send = (dispatch: any) => {
   return {

   }
}

export default connect(receive, send)(App);
