import React from 'react';
import Directory from '../../component/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className ='directory-menu'>
            <Directory></Directory>
        </div>
    </div>
);

export default HomePage;