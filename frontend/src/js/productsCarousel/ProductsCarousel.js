import React from 'react';
import Query from '../Query';
import updateProducts from '../products/UpdateProducts'
import Product from '../products/Product'

const $ = window.$;

export default class ProductsCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			products: [],
			title: props.title,
			href: props.href,
	        error: null,
            isLoaded: false,
		}
	}

	componentDidMount() {
		const mainSlickOptions = {
			dots: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: "<span class='carousel__button carousel__button_prev'>&#8249;</span>",
		    nextArrow: "<span class='carousel__button carousel__button_next'>&#8250;</span>",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
		    ]

		}

		const FirstProductsSlickOptions = {
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: false,
			pauseOnFocus: false,
		}

		// Получение товаров для карусели товаров
		let params = {
			'page': 1,
			'sort': 'popularity'
		}
		Query(`${ this.state.href }`, params)
			.then((response) => {
	        	this.setState({
		        	isLoaded: true,
		        	error: null,
		        	products: response.products
		        });

		        switch (this.state.name) {  // Slick параметры карусели
		        	case "carousel1":
		        		$('.'+this.state.name).slick({...mainSlickOptions, ...FirstProductsSlickOptions});
		        		break;
		        	default:
		        		$('.'+this.state.name).slick(mainSlickOptions);
		        }

			})
			.catch(error => {
	          	this.setState({
	                isLoaded: true,
	                error: error.statusText || 'fail to load resource'
	          	});
			})
	}

	render() {
        if (this.state.error) {
        	return <div>Error: {this.state.error}</div>;
        } else if (!this.state.isLoaded) {
        	return null;
        } else {
			let children = [];
			this.state.products.forEach((product) => {
				children.push(<Product key={ product.id } product={ product } carouselClass={ " carousel__product" } />);
			});
			return (
				<React.Fragment>
					<h2 className="products__title"><a href={ this.state.href } className="products__title_text" onClick={ updateProducts } >{ this.state.title }</a></h2>
					<div className={ "products__wrapper carousel " + this.state.name }>
						{ children }
					</div>
				</React.Fragment>
			);
		}
	}
}