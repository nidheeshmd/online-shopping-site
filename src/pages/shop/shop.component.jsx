import React from 'react';
import CollectionsOverview from  '../../component/collections-overview/collections-overview.component';



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

const ShopPageComponent = () =>(
    <div className='shop-page'>
            <CollectionsOverview/>
        </div>
);



export default ShopPageComponent;