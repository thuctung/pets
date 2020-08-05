import React, { useEffect } from 'react'
import ProductsHighlight from '../../components/ProductsHighlight/ProductsHighlight'
import PanelComponent from '../../containers/PanelContainer'
import { connect } from 'react-redux'
import * as actionAnimal from '../../actions/ActionAnimals'
import * as actionProducts from '../../actions/ActionProducts'


const HomePage = props => {
    const { animals, products, actionGetAnimalRequest, actionGetProductRequest } = props
    useEffect(() => {
        actionGetAnimalRequest()
        actionGetProductRequest()
    }, [])
    return (
        <>
            <PanelComponent />
            <ProductsHighlight products={animals} title="Bán chạy" />
            <ProductsHighlight products={products} title="Giảm giá" />
        </>
    )
}
const mapStateToProps = state => {
    return {
        animals: state.animals,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actionGetAnimalRequest: () => dispatch(actionAnimal.actionGetAnimalRequest()),
        actionGetProductRequest: () => dispatch(actionProducts.actionGetProductsRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
