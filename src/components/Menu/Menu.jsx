import React from 'react'
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product manage',
        to: '/product-list',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
            const active = match ? 'active' : ''
            return <li className={active}>
                <Link to={to}>{label}</Link>
            </li>
        }}
    />
}
const Menu = () => {
    const showMenu = menus => {
        let result = null
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
            })
        }
        return result
    }
    return (
        <div className="navbar navbar-default">
            <Link to="/" className="navbar-brand" >TGDD</Link>
            <ul className="nav navbar-nav">
                {showMenu(menus)}
            </ul>
        </div>
    )
}

export default Menu
