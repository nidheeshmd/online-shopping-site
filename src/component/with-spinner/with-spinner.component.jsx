import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

//this is a higher order component which input a function or component and return a function or component.a1

const WithSpinner = WrappedComponent =>{
    const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};
 return Spinner;
};
export default WithSpinner;