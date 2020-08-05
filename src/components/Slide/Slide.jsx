import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Slide.scss'
const listSlide = [
    'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
    'https://cdn.mos.cms.futurecdn.net/otjbibjaAbiifyN9uVaZyL.jpg',
    'https://worlddogfinder.com/imager/880x495/upload/toy_poodle.jpg',
    'https://cdn.statically.io/img/duypets.com/wp-content/uploads/2019/12/Cho-golden-retriever-6-min-730x350.jpg?f=auto'
]
const Slide = props => {

    useEffect(() => {
        const listItems = document.querySelectorAll('.item-slide')
        const time = setInterval(() => {
            let indexSlide = 0;
            let currentSlide = document.querySelector('.list-item .active')
            for (indexSlide; currentSlide = currentSlide.previousElementSibling; indexSlide++) { }
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.add('slideOut')
                listItems[i].classList.remove('active')
                listItems[i].classList.remove('slideIn')
            }
            if (indexSlide < listItems.length - 1) {
                listItems[indexSlide + 1].classList.remove('slideOut')
                listItems[indexSlide + 1].classList.add('active')
                listItems[indexSlide + 1].classList.add('slideIn')
            } else {
                listItems[0].classList.remove('slideOut')
                listItems[0].classList.add('active')
                listItems[0].classList.add('slideIn')
            }

        }, 2500)
        return () => clearInterval(time)
    }, [])

    const showListSlide = arr => {
        let result = null
        if (arr.length > 0) {
            result = arr.map((item, index) => {
                return <li className={index === 0 ? 'item-slide active' : 'item-slide'} key={index}>
                    <img src={item}></img>
                </li>
            })
        }
        return result
    }

    return (
        <div className="slide">
            <ul className="list-item">
                {showListSlide(listSlide)}
            </ul>
        </div>
    )
}

Slide.propTypes = {

}

export default Slide
