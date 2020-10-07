import React from 'react';
import updateProducts from '../products/UpdateProducts';

export default class DropdownSubCategory extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.href = props.href;
	}

	render() {
		return(
			<a className="dropdown-item" href={ this.href } data-toggle="collapse" data-target=".navbar-collapse.show" onClick={ updateProducts } > {this.title} </a>
		)
	}
}