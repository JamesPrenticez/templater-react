import React from 'react'

export default class ImageSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 1
		}
		this.plusSlides = this.plusSlides.bind(this)
	}

	componentDidMount = () =>{
		this.showSlides(this.state.slideIndex)
	}
	
	plusSlides = (n) => {
		this.setState(state => ({
			slideIndex: state.slideIndex += n
		}))		
		this.showSlides(this.state.slideIndex)
	}

	minusSlides = (n) => {
		this.setState(state => ({
			slideIndex: state.slideIndex - n
		}))		
		this.showSlides(this.state.slideIndex)
	}

	currentSlide = (n) => {
		this.setState(state => ({
			slideIndex: state.slideIndex = n
		}))
		this.showSlides(this.state.slideIndex = n);
	}

	showSlides = (n) => { 
		// console.log(n)
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		
		if (n === 1){
			this.setState(state => ({
				slideIndex: 2
			}))
		}

		if (n >= slides.length) {
			this.setState(state => ({
				slideIndex: 1
			}))
		}	

		if (n < 1) {
			this.setState(state => ({
				slideIndex: slides.length
			}))
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[this.state.slideIndex-1].style.display = "block";  
		dots[this.state.slideIndex-1].className += " active";
	  }

	render() {
		return (
			<>
				<div className="slideshowContainer">
				<div className="mySlides fade">
						<img style={{ backgroundImage: `url(../img/houses/james/james.png)`}}></img>
						<div className="imageSlideText">James</div>
					</div>

					<div className="mySlides fade">
						<img style={{ backgroundImage: `url(../img/houses/alexandra/alexandra.png)`}}></img>
						<div className="imageSlideText">Alexandra</div>
					</div>

					<div className="mySlides fade">
						<img style={{ backgroundImage: `url(../img/houses/george/george.png)`}}></img>
						<div className="imageSlideText">George</div>
					</div>

					<div className="mySlides fade">
						<img style={{ backgroundImage: `url(../img/houses/catherine/catherine.png)`}}></img>
						<div className="imageSlideText">Catherine</div>
					</div>

					<div className="mySlides fade">
						<img style={{ backgroundImage: `url(../img/houses/mary/mary.png)`}}></img>
						<div className="imageSlideText">Mary</div>
					</div>
					
					<a className="prev" onClick={() => { this.minusSlides(1) }}>&#10094;</a>
					<a className="next" onClick={() => { this.plusSlides(1)  }}>&#10095;</a>
		
				<div className='dotContainer'>
					<span className="dot" onClick={ () => { this.currentSlide(1) }}></span>
					<span className="dot" onClick={ () => { this.currentSlide(2) }}></span>
					<span className="dot" onClick={ () => { this.currentSlide(3) }}></span>
					<span className="dot" onClick={ () => { this.currentSlide(4) }}></span>
					<span className="dot" onClick={ () => { this.currentSlide(5) }}></span>
				</div>
			</div>
			</>
		)
	}
}