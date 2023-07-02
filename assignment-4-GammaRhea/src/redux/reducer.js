import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

import storefrontReducer from './storefrontReducer'

const rootReducer = combineReducers({
    storefront: storefrontReducer,
    cart: cartReducer
})

export default rootReducer