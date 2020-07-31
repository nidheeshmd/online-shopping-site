import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';

import CheckoutPage from './pages/checkout/checkout.component';
import Header from './component/header/header.component';
//import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    //const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          /* this.setState({
          currentUser: ({
          id: snapShot.id,
          ...snapShot.data()
          })
          })*/

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      //else{
      setCurrentUser(userAuth);
      //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title,items})));
      //}


    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //to close the user subscription
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : <SignInSignUpPage/>}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
  /*
  <Route exact path='/' component={HomePage}/>
  <Route path='/hats' component={HatsPage}/>

  if property path property value is wrong, router will show unwanted pages
  so we put exact properly as true, so any wrong spelling in the address it will not show
  any other pages. In other words show 404 page

  <Switch>to be continue</Switch>

  the moment switch find the match, it show that page and omit other pages
  for example path='/' & path='/hats' this will show the home page instead of
  hats page(must omit exact property). allows us 404 page.
  */

};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
//first argument is null because we need not any current/present user.