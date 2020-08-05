import React from 'react'
import PropTypes from 'prop-types'
import Highlight from '../Highlight/Highlight'
const ListHighlight = props => {
    const { direction, listImgURL } = props
    const showHighlight = arr => {
        let result = null
        if (arr.length > 0) {
            result = arr.map((item, index) => {
                return <Highlight key={index} imgURL={item} />
            })
        }
        return result
    }
    return (
        <div className={`highlight ${direction}-item`}>
            {showHighlight(listImgURL)}
        </div>
    )
}

ListHighlight.propTypes = {

}

export default ListHighlight
