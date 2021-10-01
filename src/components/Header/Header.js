import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <h1>Instagram</h1>
            <input type="text" className="search"></input>
        </div>
    )
}

export default Header