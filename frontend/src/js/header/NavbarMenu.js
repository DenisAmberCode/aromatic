import React from 'react';
import NavbarMenuItem from './NavbarMenuItem';
import NavbarMenuDropdown from './NavbarMenuDropdown';
import NavbarMenuBasket from './NavbarMenuBasket';
import logo from '../../image/aromatic89_logo.png';

export default class NavbarMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			    <a className="navbar-brand" href="/">
					<img src={ logo } className="d-inline-block align-top" alt="aromatic89_logo"></img>
				</a>
			    <button className="navbar-toggler navbar-toggler_right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			    </button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav navbar_center">
						<NavbarMenuItem     key={ 1 } title={ "Акции" } href={ "#" } />
						<NavbarMenuDropdown key={ 2 } title={ "Парфюмерия" } href={ "category/parfyumeriya" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "category/parfyumeriya/zhenskie-aromaty"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "category/parfyumeriya/muzskie-aromaty"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "category/parfyumeriya/nishevaya-parfyuneriya"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "category/parfyumeriya/aromaterapiya-i-svechi"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "category/parfyumeriya/parfyumernye-nabory"}
							] } />
						<NavbarMenuDropdown key={ 3 } title={ "Макияж" } href={ "category/makiyazh" } categories={ [ 
							{"title": "Для лица", "subCats": [{"title":"Пудра", "href":"category/makiyazhy/dlya-litsa/pudra"}, {"title":"Румяна", "href":"category/makiyazhy/dlya-litsa/rumyana"}], "href": "category/makiyazhy/dlya-litsa"}, 
							{"title": "Для глаз", "subCats": [{"title":"Тушь для ресниц", "href":"category/makiyazhy/dlya-glaz/tush-dlya-resnits"}, {"title":"Тени для век", "href":"category/makiyazhy/dlya-glaz/teny-dlya-vek"}], "href": "category/makiyazhy/dlya-glaz"}, 
							{"title": "Для ногтей", "subCats": [{"title":"Лаки для ногтей", "href":"category/makiyazhy/dlya-nogtey/laky-dlya-nogtey"}, {"title":"Накладные ногти", "href":"category/makiyazhy/dlya-nogtey/nakladniye-nogty"}], "href": "category/makiyazhy/dlya-nogtey"}, 
							{"title": "Бля бровей", "subCats": [{"title":"Тени для бровей", "href":"category/makiyazhy/dlya-brovey/teny-dlya-brivey"}, {"title":"Гель для бровей", "href":"category/makiyazhy/dlya-brovey/gel-dlya-brovey"}], "href": "category/makiyazhy/dlya-brovey"}, 
							{"title": "Для губ", "subCats": [{"title":"Губная помада", "href":"category/makiyazhy/dlya-gub/gubnaya-pomada"}, {"title":"Блеск для губ", "href":"category/makiyazhy/dlya-gub/blesk-dlya-gub"}], "href": "category/makiyazhy/dlya-gub"}
							] } />
						<NavbarMenuDropdown key={ 4 } title={ "Уход за кожей" } href={ "#" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "#"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "#"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "#"}
							] } />
						<NavbarMenuDropdown key={ 5 } title={ "Уход за волосами" } href={ "#" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "#"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "#"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "#"}
							] } />
						<NavbarMenuDropdown key={ 6 } title={ "Для дома" } href={ "#" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "#"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "#"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "#"}
							] } />
						<NavbarMenuDropdown key={ 7 } title={ "Для мужчин" } href={ "#" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "#"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "#"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "#"}
							] } />
						<NavbarMenuItem     key={ 8 } title={ "Sale" } href={ "#" } />
						<NavbarMenuDropdown key={ 9 } title={ "Подарки" } href={ "#" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "#"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "#"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "#"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "#"}
							] } />
						<NavbarMenuItem     key={ 10 } title={ "Услуги" } href={ "#" } />
						<NavbarMenuItem     key={ 11 } title={ "Бренды" } href={ "#" } />
					</ul>
					<ul className="navbar-nav">
						<NavbarMenuBasket href={ "checkout/" }/>
					</ul>
				</div>
			</nav>
		)
	}
}