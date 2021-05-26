import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
           <Route path="/" component={HomeScreen} exact={true} strict></Route>
        </BrowserRouter>
     </React.Fragment>
  );
}

export default App;
