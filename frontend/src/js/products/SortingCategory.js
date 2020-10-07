import React from 'react';

export default class SortingCategory extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.sortProducts = props.sortProducts;
	}

	render() {
		return(
			<div className={ this.props.className } onClick={ this.sortProducts } >{ this.title }</div>
		)
	}
}