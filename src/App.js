import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import Header from './component/header/header.component';
import {auth} from './firebase/firebase.utils';

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    });
  };

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
    //to close the user subscription
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
  /*
  <Route exact path='/' component={HomePage}/>
  <Route path='/hats' component={HatsPage}/>

  if property path property value is wrong, router will show unwanted pages
  so we put exact propery as true, so any wrong spelling in the address it will not show
  any other pages. In other words show 404 page

  <Switch>to be continue</Switch>

  the moment switch find the match, it show that page and omit other pages
  for example path='/' & path='/hats' this will show the home page insted of
  hats page(must omit exact property). allows us 404 page.
  */

}

export default App;
