import React from 'react';
import Query from '../Query';
import Product from './Product';
import SortingProducts from './SortingProducts';
import ButtonMoreProducts from './ButtonMoreProducts';


export default class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: props.products || [],
			pages: props.pages || 1,
			productsCountAll: props.productsCountAll || 0,
			title: props.title || null,
			categoryPath: props.categoryPath || null,
			sortingCategory: props.sortingCategory || 'popularity',
	        error: null,
            isLoaded: false
		}
		this.getMoreProducts = this.getMoreProducts.bind(this);
		this.sortProducts = this.sortProducts.bind(this);
	}

	getMoreProducts() {
		if (this.state.products.length >= this.state.productsCountAll) {
			return null
		}
		let params = {
			'page': this.state.pages + 1,
			'sort': this.state.sortingCategory
		}
		Query(`${ this.state.categoryPath }`, params)
			.then( (result) => {
				if (result.products) {
					if (result.products.length !== 0) {
					    this.setState((state) => {
					    	return {
						    	isLoaded: true,
						    	error: null,
					    		products: [...state.products, ...result.products],
					    		pages: state.pages + 1
					    	}
					    })
					}
				}
			})
			.catch(error => {
			  	this.setState({
			        isLoaded: true,
			        error: error.statusText || 'fail to load resource'
			  	});
			})
	}

	sortProducts(event) {
		let sortingCategory = event.target.classList[0];
		let params = {
			'page': 1,
			'sort': sortingCategory
		}
		Query(`${ this.state.categoryPath }`, params)
			.then( (result) => {
				if (result.products) {
					if (result.products.length !== 0) {
					    this.setState((state) => {
					    	return {
						    	isLoaded: true,
						    	error: null,
					    		products: result.products,
					    		pages: 1,
					    		sortingCategory: sortingCategory
					    	}
					    })
					}
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
				children.push(<Product key={ product.id } product={ product } />);
			});
			return (
				<React.Fragment>
					<h2 className="products__title"><a href={ "#" } className="products__title_text">{ this.state.title }</a></h2>
					<SortingProducts productsCountAll={ this.state.productsCountAll } sortingCategory={ this.state.sortingCategory } sortProducts={ this.sortProducts } />
					<div className={ "products__wrapper" }>
						{ children }
					</div>
					<ButtonMoreProducts productsCount={ this.state.products.length } productsCountAll={ this.state.productsCountAll } getMoreProducts={ this.getMoreProducts } />
				</React.Fragment>
			);
		}
	}
}