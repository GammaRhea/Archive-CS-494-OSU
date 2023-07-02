import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Search from './pages/Search'

function App() {
    return (
        <Routes>
            <Route
                path="/search"
                element={<Search />}
            />
            <Route path="/" element={<Navigate to="/search" />} />
        </Routes>
    )
}

export default App
