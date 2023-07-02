import { RECIEVE_PRODUCTS } from "./actions";

const initialState = {
    products: []
}

function storefrontReducer(state = initialState, action) {
    switch (action.type) {
        case RECIEVE_PRODUCTS:
            return {
                    ...state,
                    products: action.products
                }
        default:
            return state
    }
}

export default storefrontReducer