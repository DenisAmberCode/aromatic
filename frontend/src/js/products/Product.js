import React from 'react';
import formatProductPrice from './FormatProductPrice'

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.product.id,
			name: props.product.name,
			price: formatProductPrice(props.product.price),
			description: props.product.description,
			image: props.product.image,
			inBasket: props.product.inBasket
		}
		this.carouselClass = props.carouselClass || "";
	}

	render() {
		return (
			<div className={"product" + this.carouselClass}>
				<div className="product__image">
					<a href="">
						<img src={ this.state.image } alt={ this.state.image }></img>
					</a>
				</div>
				<div className="product__info">
					<a href="" title={ this.state.name } className="product__title">
						{ this.state.name }
					</a>
					
					<p title={ this.state.description }>
				    	{ this.state.description }
					</p>
				</div>
				<div title={ this.state.price + '₽' } className="product__price">
					{ this.state.price } ₽
				</div>
			</div>
		);
	}
}