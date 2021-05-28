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

interface IProps{}
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
                     <NavLink to="/" exact={true} strict>Cart</NavLink>
                     <NavLink to="/" exact={true} strict>SignIn</NavLink>
                  </div>
               </header>

               <main>
                  <Route path="/" component={HomeScreen} exact={true} strict></Route>
               </main>

               <footer className="row center">copyright@eshop.in</footer>
            </div>
         </BrowserRouter>
      </React.Fragment>
      )
   }
}
 
export default App;
