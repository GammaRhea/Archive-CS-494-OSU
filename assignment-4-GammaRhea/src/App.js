import React, { useState, useEffect } from 'react'

import StoreFront from './components/Storefront'
import Cart from './components/Cart'

function App() {
    return (
        <div>
            <h1>Penny Candy Store</h1>
            <h2>Inventory</h2>
            <StoreFront />
            <Cart />
        </div>
    )
}

// ultimately I couldnt get everything working, I'm going to try and work with Sumer to understand what I missed out on then focus my attention to the final,
// I should have started this assignment right after we finished the Redux section, isntead I waiting until we were almost down with Next.js, whoops.
// I'll try to put in some extra time to play catch-up while working on the Final, but I don't wanna let my team down.

export default App;
