import React from 'react';
import { withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, id, imageUrl, size, history, linkUrl, match}) => (
    /*<div className={`${size} menu-item`} key={id} onClick={() => history.push(`${match.url}${linkUrl}`)}>*/
    <div className={`${size} menu-item`} key={id} onClick={() => history.push(`${linkUrl}`)}>
        <div className='background-image'
            style={{ backgroundImage: `URL(${imageUrl})` }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);

/*with 'withRouter' we get the access of 3 properties of react router
location, history  and history*/