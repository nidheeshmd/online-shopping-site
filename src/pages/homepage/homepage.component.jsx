import React from 'react';
import Directory from '../../component/directory/directory.component';

//import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <div className ='directory-menu'>
            <Directory></Directory>
        </div>
    </HomePageContainer>
);

export default HomePage;