import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_BACK_PRODUCT } from "./actions"
import { useDispatch } from 'react-redux'
import update from "react-addons-update"

function cartReducer(state = [], action) {
    console.log(action.type)
    switch (action.type) {
        case ADD_PRODUCT:
            if (action.product[0].inStock >= parseInt(action.product[1])) {
                action.product[0].inStock -= parseInt(action.product[1])
                return [{
                    id: action.product[0].id,
                    name: action.product[0].name,
                    price: action.product[0].price,
                    amount: parseInt(action.product[1])
                }, ...state]
            } else {
                return state
            }
        case REMOVE_PRODUCT:
            console.log(state)
            return [
                ...state.filter(product => (product != action.product))
            ]
        default:
            return state
    }
}

export default cartReducer