export function getProducts(state) {
    return state.storefront.products
}

export function getCart(state) {
    return state.cart
}

export function getCartTotal(state) {
    const cart = getCart(state)
    return cart.length
}