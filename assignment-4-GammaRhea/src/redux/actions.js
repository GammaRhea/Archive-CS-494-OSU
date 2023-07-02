export const RECIEVE_PRODUCTS = "RECIEVE_PRODUCTS"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const ADD_BACK_PRODUCT = "ADD_BACK_PRODUCT"

export function recieveProducts(products) {
    return { type: RECIEVE_PRODUCTS, products }
}

export function addProduct(product) {
    return { type: ADD_PRODUCT, product }
}

export function removeProduct(product) {
    return { type: REMOVE_PRODUCT, product }
}

// I would make an action here to re-add items back into the storefront after deleting them from the cart