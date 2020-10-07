import React from 'react';
import DropdownCategory from './DropdownCategory';
import DropdownSubCategory from './DropdownSubCategory';

export default class NavbarMenuDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.href = props.href;
		this.categories = props.categories;
	}

	render() {
		let children = [];
		let key = 1;
		this.categories.forEach((category) => {
			children.push(<DropdownCategory key={ key } title={ category.title } href={ category.href }/>);  // Основная категория
			key ++;
			category.subCats.forEach((subCat) => {  // Подкатегории
				children.push(<DropdownSubCategory key={ key } title={ subCat.title } href={ subCat.href }/>);
				key ++;
			});
		});
		return(
			<li className="nav-item dropdown active">
				<a className="navbar__item_link navbar__item nav-link dropdown-toggle" href={ this.href } id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{this.title}
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					{ children }
				</div>
			</li>
		)
	}
}