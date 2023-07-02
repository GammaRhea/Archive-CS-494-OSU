import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Candy from './Candy'
import { getProducts } from '../redux/selectors'

import useProducts from '../hooks/useProducts'
import { recieveProducts } from '../redux/actions'
import { useDispatch } from 'react-redux'

function Storefront() {
    const data = useProducts()
    //console.log("Raw Products: ", data.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(recieveProducts(data.products))
    })

    const inventory = useSelector(getProducts)
    //console.log("Inventory: ", inventory)
    return (
        <div>
            {inventory.map(item => <Candy key={item.id} {...item} />)}
        </div>
    )
}

export default Storefront