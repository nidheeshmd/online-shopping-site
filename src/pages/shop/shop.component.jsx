import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../component/with-spinner/with-spinner.component';

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

/*const ShopPage = ({match}) =>{
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>);
};*/

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    state = { loading: true }; // no need use constructor. React automatically create constructor.
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading = {loading}{...props}/>} />
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);