import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProduct } from '../redux/actions'

import { getProducts } from '../redux/selectors'

function Candy({ id, name, price, inStock, photoUrl }) {
    const [ num, setNum ] = useState("0")
    const dispatch = useDispatch()

    const inventory = useSelector(getProducts)

    return (
        <div>
            <img src={photoUrl} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Current Stock: {inStock}</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("Amount Requested: ", num)
                dispatch(addProduct(/* Pass the Object into Store Here */))
                // dispatch(removeProduct(Remove the Ammount requested from the stock here, since it is now in the cart))
                // update the button to become "Out of Stock"
            }}>
                <input type="number" defaultValue={num} onChange={(e) => setNum(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Candy