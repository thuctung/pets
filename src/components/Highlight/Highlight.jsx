import React from 'react'
import PropTypes from 'prop-types'

const Highlight = props => {
    const { imgURL } = props
    return (
        <div className="item" >
            <img src={imgURL} />
        </div>
    )
}

Highlight.propTypes = {

}

export default Highlight
