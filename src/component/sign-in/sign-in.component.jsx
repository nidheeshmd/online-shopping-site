import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custome-button/custom-button.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        /*here [name] is a dynamic assignement, if the return value from mail text box, this will be mail,
         because the name of that field is email. the same will happen for password, because name of the
         password field is password*/
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>sign in with your email and password</span>
                <form name='email' onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email' />
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    };
}

export default SignIn;