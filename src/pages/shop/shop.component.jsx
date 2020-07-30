import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from  '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

/*class ShopPage extends Component{
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
}*/

const ShopPage = ({match}) =>{
    console.log(match);
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>);
};

export default ShopPage;