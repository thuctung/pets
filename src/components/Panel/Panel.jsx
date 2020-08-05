import React from 'react'
import PropTypes from 'prop-types'
import './Panel.scss'
import ListHighlight from '../ListHighlight/ListHighlight'
import Portfolio from '../Portfolio/Portfolio'
import Slide from '../Slide/Slide'
const petHighlight = [
    'https://www.cats.org.uk/media/3236/choosing-a-cat.jpg',
    'https://www.thukieng.com/wp-content/uploads/2018/08/gia-mua-ban-cho-golden-retriever-thukieng-6-300x300.jpg',
]
const productHighlight = [
    'https://bizweb.dktcdn.net/100/307/433/products/cat-thuy-tinh-kit-cat-crytsal-2.jpg?v=1529251440243',
    'https://chuongchodep.com/wp-content/uploads/2018/10/chuong-cho-chihuahua-1.jpg',
    'https://dichvuhay.vn/wp-content/uploads/2019/10/nuoc-hoa-cho-cho-pug-giam-mui-hoi-o-cho-0139.jpg'
]
const Panel = props => {
    return (
        <div className="mt-130">
            <div className="panel-show w-90">
                <Portfolio />
                <Slide />
                <ListHighlight direction="col" listImgURL={petHighlight} />
            </div>
        </div>
    )
}

Panel.propTypes = {

}

export default Panel
