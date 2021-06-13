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
import {connect} from "react-redux";

interface IProps{
   count:any
}
interface IState{}

class App extends React.Component<IProps,IState>{
   constructor(props:IProps){
      super(props)
   }
   render(){
      return(
         <React.Fragment>
         <BrowserRouter>


            <div className="grid-container">
               <header className="row">
                  <div>
                     <NavLink to="/" exact={true} strict className="brand">EShop</NavLink>
                  </div>

                  <div>
                     <NavLink to="/cart" exact={true} strict>Cart
                        {this.props.count>0 ? <span className="badge-success">{this.props.count}</span>:<span className="badge-empty">{this.props.count}</span>}
                     </NavLink>
                     <NavLink to="/" exact={true} strict>SignIn</NavLink>
                  </div>
               </header>

               <main>
                  <Route path="/" component={HomeScreen} exact={true} strict></Route>
                  <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                  <Route path="/cart/:id" component={CartScreen} exact={true} strict></Route>
               </main>

               <footer className="row center">copyright@eshop.in</footer>
            </div>
         </BrowserRouter>
      </React.Fragment>
      )
   }
}

const receive = (state:any)=>{
   return {
      count: state.cart.finalArray.length
   }
}

const send = (dispatch:any)=>{
   return{

   }
}
 
export default connect(receive,send)(App);
