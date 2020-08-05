import React from 'react'
import { Link } from 'react-router-dom'
import { FaDog, FaCat, FaFeather, FaTools, FaCookieBite, FaSprayCan, FaToolbox } from 'react-icons/fa'
import PropTypes from 'prop-types'

const arrMenu = [
    {
        title: 'Dogs',
        icon: () => <FaDog />,

    },
    {
        title: 'Cats',
        icon: () => <FaCat />,
    },
    {
        title: 'Animal Other',
        icon: () => <FaFeather />,
    },
    {
        title: 'Tools',
        icon: () => <FaTools />,
    },
    {
        title: 'Foods',
        icon: () => <FaCookieBite />,
    },
    {
        title: 'Makeup',
        icon: () => <FaSprayCan />,
    },
    {
        title: 'Other',
        icon: () => <FaToolbox />,
    },
]
const Portfolio = props => {

    const showMenu = arr => {
        let result = null
        if (arr.length > 0) {
            result = arr.map((item, index) => {
                return <li key={index}>
                    {item.icon()}
                    <a>{item.title}</a>
                </li>
            })
        }
        return result
    }
    return (
        <div className="list-portfolio">
            <ul>
                {showMenu(arrMenu)}
            </ul>
        </div>
    )
}

Portfolio.propTypes = {

}

export default Portfolio
