import React, { Component } from 'react';
import CollectionPreview from '../../component/preview-collection/collection-preview.component';

import SHOP_DATA from './shop.data.js';


class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        //const {collections} = this.state;
        return (
        <div className='shop-page'>
            {
                this.state.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))
            }
        </div>   
        );
    }
}

export default ShopPage;