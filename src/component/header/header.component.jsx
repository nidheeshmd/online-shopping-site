import React from 'react';
import { Link} from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo} from '../../assets/logo.svg';

const Header =  () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACT</Link>
            <Link className='option' to='/'>SHOP</Link>
        </div>
    </div>
);

export default Header;