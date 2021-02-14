import React from 'react'

import ImageSlider from './ImageSlider'
import FeaturedProducts from './FeaturedProducts'

export default class Homepage extends React.Component {
render(){
        return(
            <>
                <ImageSlider/>
                <FeaturedProducts />
            </>
        )
    }
}