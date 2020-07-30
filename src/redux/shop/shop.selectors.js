import { createSelector } from 'reselect';

/*const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}*/

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], (shop) => shop.collections
);

export const selectCollection = ( collectionUrlParam ) =>
createSelector(
   /* [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])*/
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],  collections => Object.keys(collections).map(key => collections[key])
    //'keys' used to convert object to array. then map the array to fetch all the data from array.
)