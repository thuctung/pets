import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch, FaBell, FaUser, FaShoppingCart, FaBars, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../images/logo.png'
const Header = props => {
    const { countItemInCart } = props
    return (
        <header>
            <div className="w-90">
                <div className="dp-flex">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} />
                        </div>
                    </Link>
                    {props.children}
                    <div className="notification">
                        <FaBell /> <span>Thông báo</span>
                    </div>
                    <div className="login-logout">
                        <FaUser /> <span>Đăng nhập</span>
                    </div>
                    <Link to="/cart">
                        <div className="cart">
                            <FaShoppingCart />
                            <span className="title">
                                Giỏ hàng
                                    <span className="count-item">{countItemInCart}  </span>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="menu">
                    <div className="product-portfolio">
                        <FaBars />
                        <span>DANH MỤC SẢN PHẨM</span>
                    </div>
                    <div className="view-product">
                        <FaChevronDown />
                        <span>Sản phẩm đã xem</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {

}

export default Header
