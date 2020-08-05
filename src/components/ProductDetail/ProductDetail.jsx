import React from 'react'
import './ProductDetail.scss'
const ProductDetail = props => {
    const { id, name, price, imgURL, status, description } = props.item

    return (
        <div className="product-detail">
            <div className="content">
                <div className="avatar">
                    <img src={imgURL} />
                </div>
                <div className="info">
                    <p className="name"> <span>Tên</span>{name}</p>
                    <p className="price"><span>Giá</span> {price}</p>
                    <p className="status"><span>Trạng thái</span> {status ? 'Còn hàng' : 'Hết hàng'}</p>
                    <p className="description"><span>Mô tả</span> {description}</p>
                </div>
                <button className="btn btn-by-now">Mua ngay</button>
            </div>
        </div>
    )
}

export default ProductDetail
