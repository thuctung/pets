import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductListManage from '../../components/ProductListManage/ProductListManage'
import ProductManageItem from '../../components/ProductManageItem/ProductManageItem'


const ProductListPage = props => {
    const { products, onDeleteProduct } = props

    const showListProduct = listProduct => {
        let result = null
        if (listProduct.length > 0) {
            result = listProduct.map((product, index) => {
                return <ProductManageItem
                    key={index}
                    index={index + 1}
                    product={product}
                    onDeleteProduct={onDeleteProduct}
                />
            })
        }
        return result
    }

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to='/product/add' className="btn btn-large btn-info btn-default mb-10">Add product</Link>
            <ProductListManage >
                {showListProduct(products)}
            </ProductListManage>
        </div>
    )

}

ProductListPage.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.bool,
            imgURL: PropTypes.string
        })
    ).isRequired,
    onDeleteProduct: PropTypes.func.isRequired
}

export default ProductListPage
