import React from 'react';
const $ = window.$;

export default class ImagesCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: props.images		
		}
	}

	componentDidMount() {
		// Slick параметры карусели слайдов
		$('.carouselTop').slick({
			dots: true,
			prevArrow: "<span class='carousel__button carousel__button_prev'>&#8249;</span>",
		    nextArrow: "<span class='carousel__button carousel__button_next'>&#8250;</span>",
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: false,
			pauseOnFocus: false,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
					prevArrow: "<span></span>",
		    		nextArrow: "<span></span>",
			      }
			    }
		    ]
		});
	}

	render() {
		let children = [];
		let key = 1;
		this.state.images.forEach((image) => {
			children.push(<div key={ key } > <img src={ image.src } alt={ image.alt } /> </div>);
			key++;
		});

		return (
			<React.Fragment>
                <div className="carouselTop">
                    {children}
                </div>
			</React.Fragment>
		);
	}
}