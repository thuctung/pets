import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

import './Search.scss'
const Search = props => {
    const { onSearchValue } = props
    const [state, setState] = useState('')

    const onSubmit = () => {
        onSearchValue(state)
    }

    return (
        <div className="input-search">
            <input type="text"
                placeholder="Tên, loại sản phẩm...."
                value={state}
                onChange={e => setState(e.target.value)}
            />
            <button onClick={onSubmit} className="btn-search"><FaSearch />Tìm</button>
        </div>
    )
}

Search.propTypes = {
    onSearchValue: PropTypes.func
}

export default Search
