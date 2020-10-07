import React from 'react';
import SortingCategory from './SortingCategory';


export default class SortingProducts extends React.Component {
	constructor(props) {
		super(props);
		this.sortProducts = props.sortProducts;
	}

	render() { 
		const sortingCategories = [
			{'id': 1, 'className': 'popularity', 'title': 'по популярности'},
			{'id': 2, 'className': 'price', 'title': 'по цене'},
			{'id': 3, 'className': 'alphabet', 'title': 'по алфавиту'},
		]
		let children = [];
		sortingCategories.forEach((category) => {
			// Для выбранного компонента сортировки устанавливаем доп. класс sort_selected (color: #fe5101)
			let className = (this.props.sortingCategory == category.className) ? `${ category.className } sort_selected` : category.className;
			children.push(<SortingCategory key={ category.id } className={ className } title={ category.title } sortProducts={ this.sortProducts } />);
		});
		return(
			<div className="info">
				<div className="info__sort-box">
					<div className="sort sort-wrapper">
						{ children }
					</div>
				</div>
				<div className="info__found">
					<span>Найдено товаров:&nbsp;</span>
					<span className="info__found_result">{ this.props.productsCountAll }</span>
				</div>
			</div>
		);
	}
}