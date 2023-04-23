export const addCartItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id);
    console.log(cartItems)

    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToRemove._id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem._id !==  cartItemToRemove._id)
    }

    return cartItems.map((cartItem) => 
    cartItem._id === cartItemToRemove._id ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id )
}

