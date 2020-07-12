import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import './header.styles.scss';

import { ReactComponent as Logo} from '../../assets/logo.svg';

const Header =  ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);


/*const mapStateToProps = (state) => ({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
});*/

//the above method can simplify using 'createStructuredSelector' like as below. 'createStructuredSelector' automatically pass the state. Usually use when multiple values needed, here current user and hidden

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
//connect is higher level function and have 2 arguments. passing value to current user of this component from redux