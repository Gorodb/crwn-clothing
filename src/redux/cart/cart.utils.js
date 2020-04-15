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