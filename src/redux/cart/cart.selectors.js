//'reselect' is needed to install. This is needed to avoid unwanted re-rendering of component. this improve performance

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
    //Syntax is: [collection of input selectors], (function which return the output we needed)
);

export const selectCartItemsCount = createSelector(
[selectCartItems], (cartItems) => cartItems.reduce(
    (CalculatedQuantity, cartItem) => CalculatedQuantity + cartItem.quantity, 0
));

export const selectCartHidden =createSelector(
    [selectCart] ,(cart) => cart.hidden
)