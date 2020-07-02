import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
  /*
  <Route exact path='/' component={HomePage}/>
  <Route path='/hats' component={HatsPage}/>

  if property path property value is wrong, router will show unwanted pages
  so we put exact propery as true, so any wrong spelling in the address it will not show
  any other pages. In other words show 404 page

  <Switch></Switch>

  the moment switch find the match, it show that page and omit other pages
  for example path='/' & path='/hats' this will show the home page insted of 
  hats page(must omit exact property). allows us 404 page.
  */

}

export default App;
