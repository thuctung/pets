import React, { useState, useEffect } from 'react'
import { Redirect, Prompt } from 'react-router-dom'
import PropTypes from 'prop-types'
const ProductActionManagePage = props => {
    const { product, onActionProduct } = props
    const btnName = product ? 'Save' : 'Create'

    const [prompt, setPrompt] = useState(true) // confirm leave page
    const [redirect, setRedirect] = useState(false)

    const [state, setState] = useState({
        id: '',
        name: '',
        price: '',
        status: true,
        imgURL: '',
    })

    useEffect(() => {
        if (product) {
            setState(product)
        }
    }, [product])

    const { name, price, status, imgURL } = state

    const onCreateOrUpdateProduct = (e) => {
        e.preventDefault()
        onActionProduct(state)
        setPrompt(false) // turn off confirm leave page when create or update data
    }

    const onChangeValue = (e) => {
        const target = e.target
        const name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        if (name === 'price') {
            value = value - 0
        }
        setState(preState => {
            return {
                ...preState,
                [name]: value
            }
        })
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

            <form>

                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className="form-control"
                        name="name"
                        value={name}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="number" className="form-control" min="1000" step="1000"
                        name="price"
                        value={price}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Status</label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value=""
                            name="status"
                            value={status}
                            checked={status}
                            onChange={onChangeValue}
                        />
                        Yet
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="">Link image</label>
                    <input type="" className="form-control"
                        name="imgURL"
                        value={imgURL}
                        onChange={onChangeValue}
                    />
                </div>
                {imgURL && (
                    <div className="form-group">
                        <img width="100px" height="100px" src={imgURL} />
                    </div>
                )}

                <button className="btn btn-primary mr-10" onClick={onCreateOrUpdateProduct}>{btnName}</button>
                <button className="btn btn-primary mr-10" onClick={() => setRedirect(true)}>Back</button>
                <Prompt
                    when={prompt}
                    message="Data not save!,  Do you want to leave this page?"
                />
                {redirect && (<Redirect to='/product-list' />)}
            </form>

        </div>
    )
}

ProductActionManagePage.propTypes = {
    product: PropTypes.shape({

    }),
    onActionProduct: PropTypes.func.isRequired
}

export default ProductActionManagePage
