import React from 'react';
import NavbarMenu from './NavbarMenu';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<NavbarMenu/>
			</header>
		)
	}
}