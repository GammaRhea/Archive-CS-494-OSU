function Cart() {
    // cart would make use of the useSelector for the store, getting all the cart items then mapping over them, producing the cart list.
    // I would then add in the remove from cart button which would call an action to return those items to the cart, then erase then I would re-render the list

    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart