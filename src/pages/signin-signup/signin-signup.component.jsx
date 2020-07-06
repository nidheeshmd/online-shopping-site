import React from 'react';

import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

import './signin-signup.styles.scss';

const SignInSignUpPage = () => (
    <div className='signin-signup'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignUpPage;