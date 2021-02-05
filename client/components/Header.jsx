import React from 'react'
import ImageSlider from './ImageSlider'

export default class Header extends React.Component {
render(){
    
    const imgUrls = [
        "../img/houses/alexandra/alexandra.png",
        "../img/houses/andrew/andrew.png",
        "../img/houses/anne/anne.png",
        "../img/houses/catherine/catherine.png",
        "../img/houses/charles/charles.png"
    ];

        return(
            <>
            <header>
            <ImageSlider imgUrls={imgUrls} />
            </header> 
            </>
        )
    }
}