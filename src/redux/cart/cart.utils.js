export const addItemToCart = (cartItems, cartItemToAdd) => {
    const  existingCartItem = cartItems.find(({ id }) => id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                    totalPrice: cartItem.price * (cartItem.quantity + 1)
                } : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1, totalPrice: cartItemToAdd.price }]
}

export const decreaseItem = (cartItems, decreasedItem) => {
    const existingCartItem = cartItems.find(({ id }) => id === decreasedItem.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(({ id }) => id !== decreasedItem.id)
    }

    return cartItems.map((cartItem) => cartItem.id === decreasedItem.id
        ? {...cartItem, quantity: cartItem.quantity - 1, totalPrice: cartItem.totalPrice - cartItem.price }
        : cartItem )
}
