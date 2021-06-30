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
import { SignOut } from './actions/SignInActions';

interface IProps {
   count: any;
   user_details: any;
   logout_Fn: any;
   
}
interface IState {
   displayNavDropDown: any
}

class App extends React.Component<IProps, IState>{
   constructor(props: IProps) {
      super(props)
      this.state = {
         displayNavDropDown: ''
      }
   }
   logout = (e: any) => {
      e.preventDefault();
      this.props.logout_Fn()
      this.toogleNavDropdown()
      //this.props.history.push('/signin')
   }

   toogleNavDropdown = () => {
      this.setState({
         displayNavDropDown: !this.state.displayNavDropDown
      })
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

                        <NavLink to="/cart" exact={true} strict ><i className="fa fa-shopping-cart" aria-hidden="true" id="cart-icon"></i>
                           {this.props.count > 0 ? <span className="badge badge-success">{this.props.count}</span> : <span className="badge badge-empty">{this.props.count}</span>}
                        </NavLink>

                        <div>
                           {this.props.user_details.image ?
                              <div className="dropdown d-flex">
                                 <img src={this.props.user_details.image} alt="profile_pic" id="profile_pic" />
                                 <i className="fa fa-caret-down" aria-hidden="true" onClick={this.toogleNavDropdown}></i>

                                 <ul className={`dropdown-content ${this.state.displayNavDropDown ? 'visible' : ''}`}>
                                    <li> <NavLink to="#">Profile</NavLink></li>
                                    <li> <NavLink to="#">Orders</NavLink></li>
                                    <li> <NavLink to="#" onClick={this.logout}>Signout</NavLink></li>
                                 </ul>
                              </div>
                              : <NavLink to="/signin" exact={true} strict>
                                 <i className="fa fa-user-circle" id="profile_pic_icon" aria-hidden="true"></i>
                              </NavLink>
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
      user_details: state.signIn.user_details,

   }
}

const send = (dispatch: any) => {
   return {
      logout_Fn: () => { dispatch(SignOut()) }
   }
}

export default connect(receive, send)(App);
