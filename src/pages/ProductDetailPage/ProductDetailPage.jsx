import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import callAPi from '../../utils/apiCaller'
import { Animal } from '../../constants/EndPointResource'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
const ProductDetailPage = props => {
    const { params } = props.match
    const [item, setItem] = useState()
    useEffect(() => {
        callAPi(`${Animal}/${params.id}`, 'GET')
            .then(res => {
                setItem(res.data)
            })
    }, [])

    return (
        <>
            {item && <ProductDetail item={item} />}
        </>
    )
}

ProductDetailPage.propTypes = {

}

export default ProductDetailPage
