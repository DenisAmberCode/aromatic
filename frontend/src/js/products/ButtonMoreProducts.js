import React from 'react';


export default class ButtonMoreProducts extends React.Component {
	constructor(props) {
		super(props);
		this.getMoreProducts = props.getMoreProducts;
	}

	render() {
		return (
			<div className="productMore" onClick={ this.getMoreProducts } >
				<div className="productMore__icon"></div>
				<div className="productMore__text">
					<div className="productMore__text_top">Показать еще</div>
					<div className="productMore__text_bottom">Показано { this.props.productsCount } из { this.props.productsCountAll }</div>
				</div>
			</div>
		);
	}
}