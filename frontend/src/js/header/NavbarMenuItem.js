import React from 'react';

export default class NavbarMenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.href = props.href;
	}

	render() {
		return(
			<li className="nav-item active">
				<a className="navbar__item_link navbar__item nav-link" href={ this.href } data-toggle="collapse" data-target=".navbar-collapse.show"> {this.title} </a>
			</li>
		)
	}
}