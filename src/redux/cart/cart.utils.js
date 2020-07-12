export const UTLAddItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem );
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]// for the first time we need to add quantity.
};

export const UTLRemoveItemFromCart = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1){
        //return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity -1}: cartItem);
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity -1} : cartItem);
} 
