'use strict';

class Header extends React.Component {
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



class NavbarMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			    <a className="navbar-brand" href="/">
					<img src="../static/image/aromatic89_logo.png" className="d-inline-block align-top" alt="aromatic89_logo"></img>
				</a>
			    <button className="navbar-toggler navbar-toggler_right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			    </button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav navbar_center">
						<NavbarMenuItem     key={ 1 } title={ "Акции" } href={ "#" } />
						<NavbarMenuDropdown key={ 2 } title={ "Парфюмерия" } href={ "/category/parfyumeriya" } categories={ [ 
							{"title": "Женские ароматы", "subCats": [], "href": "/category/parfyumeriya/zhenskie-aromaty"}, 
							{"title": "Мужские ароматы", "subCats": [], "href": "/category/parfyumeriya/muzskie-aromaty"}, 
							{"title": "Нишевая парфюмерия", "subCats": [], "href": "/category/parfyumeriya/nishevaya-parfyuneriya"}, 
							{"title": "Ароматерапия и свечи", "subCats": [], "href": "/category/parfyumeriya/aromaterapiya-i-svechi"}, 
							{"title": "Парфюмерные наборы", "subCats": [], "href": "/category/parfyumeriya/parfyumernye-nabory"}
							] } />
						<NavbarMenuDropdown key={ 3 } title={ "Макияж" } href={ "/category/makiyazh" } categories={ [ 
							{"title": "Для лица", "subCats": [{"title":"Пудра", "href":"/category/makiyazhy/dlya-litsa/pudra"}, {"title":"Румяна", "href":"/category/makiyazhy/dlya-litsa/rumyana"}], "href": "/category/makiyazhy/dlya-litsa"}, 
							{"title": "Для глаз", "subCats": [{"title":"Тушь для ресниц", "href":"/category/makiyazhy/dlya-glaz/tush-dlya-resnits"}, {"title":"Тени для век", "href":"/category/makiyazhy/dlya-glaz/teny-dlya-vek"}], "href": "/category/makiyazhy/dlya-glaz"}, 
							{"title": "Для ногтей", "subCats": [{"title":"Лаки для ногтей", "href":"/category/makiyazhy/dlya-nogtey/laky-dlya-nogtey"}, {"title":"Накладные ногти", "href":"/category/makiyazhy/dlya-nogtey/nakladniye-nogty"}], "href": "/category/makiyazhy/dlya-nogtey"}, 
							{"title": "Бля бровей", "subCats": [{"title":"Тени для бровей", "href":"/category/makiyazhy/dlya-brovey/teny-dlya-brivey"}, {"title":"Гель для бровей", "href":"/category/makiyazhy/dlya-brovey/gel-dlya-brovey"}], "href": "/category/makiyazhy/dlya-brovey"}, 
							{"title": "Для губ", "subCats": [{"title":"Губная помада", "href":"/category/makiyazhy/dlya-gub/gubnaya-pomada"}, {"title":"Блеск для губ", "href":"/category/makiyazhy/dlya-gub/blesk-dlya-gub"}], "href": "/category/makiyazhy/dlya-gub"}
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
						<NavbarMenuBasket href={ "/checkout/" }/>
					</ul>
				</div>
			</nav>
		)
	}
}

class NavbarMenuItem extends React.Component {
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

class NavbarMenuDropdown extends React.Component {
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

class DropdownCategory extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.href = props.href;
	}

	render() {
		return(
			<a className="navbar__item_link dropdown-item" href={ this.href } data-toggle="collapse" data-target=".navbar-collapse.show" onClick={ updateProducts } > {this.title} </a>
		)
	}
}


class DropdownSubCategory extends React.Component {
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

class NavbarMenuBasket extends React.Component {
	constructor(props) {
		super(props);
		this.href = props.href;
	}

	render() {
		return(
			<li className="nav-item">
				<a className="navbar__basket_link" href={ this.href }>
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="navbar__basket_img bi bi-handbag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					  <path fillRule="evenodd" d="M8 1a2 2 0 0 0-2 2v4.5a.5.5 0 0 1-1 0V3a3 3 0 0 1 6 0v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
					  <path fillRule="evenodd" d="M3.405 6a.5.5 0 0 0-.498.45l-.912 6.9A1.5 1.5 0 0 0 3.488 15h9.024a1.5 1.5 0 0 0 1.493-1.65l-.913-6.9a.5.5 0 0 0-.497-.45h-9.19zm-1.493.35A1.5 1.5 0 0 1 3.405 5h9.19a1.5 1.5 0 0 1 1.493 1.35L15 13.252A2.5 2.5 0 0 1 12.512 16H3.488A2.5 2.5 0 0 1 1 13.251l.912-6.9z"/>
					</svg>
				</a>
			</li>
		)
	}
}

class ImagesCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: props.images		
		}
	}

	componentDidMount() {
		// Slick параметры карусели слайдов
		$('.carouselTop').slick({
			dots: true,
			prevArrow: "<span class='carousel__button carousel__button_prev'>&#8249;</span>",
		    nextArrow: "<span class='carousel__button carousel__button_next'>&#8250;</span>",
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: false,
			pauseOnFocus: false,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
					prevArrow: "<span></span>",
		    		nextArrow: "<span></span>",
			      }
			    }
		    ]
		});
	}

	render() {
		let children = [];
		let key = 1;
		this.state.images.forEach((image) => {
			children.push(<div key={ key } > <img src={ image.src } alt={ image.alt } /> </div>);
			key++;
		});

		return (
			<div className="carouselTop">
				{children}
			</div>
		);
	}
}

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: props.products || [],
			pages: props.pages || 1,
			productsCountAll: props.productsCountAll || 0,
			title: props.title || null,
			categoryPath: props.categoryPath || null,
	        error: null,
            isLoaded: false
		}
		this.getMoreProducts = this.getMoreProducts.bind(this);
	}

	getMoreProducts() {
		if (this.state.products.length >= this.state.productsCountAll) {
			return null
		}
		Query(`${ this.state.categoryPath }/${ this.state.pages + 1 }`)
			.then( (result) => {
				if (result.products) {
					if (result.products.length != 0) {
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
			        error: error.statusText
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
					<div className={ "products__wrapper" }>
						{ children }
					</div>
					<ButtonMoreProducts productsCount={ this.state.products.length } productsCountAll={ this.state.productsCountAll } getMoreProducts={ this.getMoreProducts } />
				</React.Fragment>
			);
		}
	}
}

class ButtonMoreProducts extends React.Component {
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

class ProductsCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			products: [],
			title: props.title,
			categoryPath: props.categoryPath,
			href: props.href,
	        error: null,
            isLoaded: false,
		}
	}

	componentDidMount() {
		const mainSlickOptions = {
			dots: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: "<span class='carousel__button carousel__button_prev'>&#8249;</span>",
		    nextArrow: "<span class='carousel__button carousel__button_next'>&#8250;</span>",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
		    ]

		}

		const FirstProductsSlickOptions = {
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: false,
			pauseOnFocus: false,
		}

		// Получение товаров для карусели товаров
		Query(this.state.categoryPath)
			.then((response) => {
	        	this.setState({
		        	isLoaded: true,
		        	error: null,
		        	products: response.products
		        });

		        switch (this.state.name) {  // Slick параметры карусели
		        	case "carousel1":
		        		$('.'+this.state.name).slick({...mainSlickOptions, ...FirstProductsSlickOptions});
		        		break;
		        	default:
		        		$('.'+this.state.name).slick(mainSlickOptions);
		        }

			})
			.catch(error => {
	          	this.setState({
	                isLoaded: true,
	                error: error.statusText
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
				children.push(<Product key={ product.id } product={ product } carouselClass={ " carousel__product" } />);
			});
			return (
				<React.Fragment>
					<h2 className="products__title"><a href={ this.state.href} className="products__title_text">{ this.state.title }</a></h2>
					<div className={ "products__wrapper carousel " + this.state.name }>
						{ children }
					</div>
				</React.Fragment>
			);
		}
	}
}

class Product extends React.Component {
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
		// this.onClick = this.onClick.bind(this);

	}

		// onClick(e) {
		// 	this.setState({
		// 		image: "../static/image/javascript-security.jpg"
		// 	});
		// }

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


// btn

class ButtonScrollUp extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		$('html, body').animate({scrollTop:0}, 300);
	}

	componentDidMount() {
		$(window).scroll(() => {
			if ($(window).scrollTop() > 300) {
				$("#btnScrollUp")[0].style.opacity = 0.8;
			} else {
				$("#btnScrollUp")[0].style.opacity = 0;
				
			}
		});
	}

	render() {
		return (<div id="btnScrollUp" className={ "btnScrollUp" } onClick={ this.onClick }></div>)
	}

}


ReactDOM.render(<Header/>, $("#header")[0]);

// Возобновление пролистывания слайдов карусели на мобильных устройствах
$('.cc-slider-container').on('touchstart', e => {
  $('.cc-slider-container').slick('slickPlay');
});

// Карусель слайдов
const CarouselImagesList = [
	{ src: "../static/image/carouselTop1.jpg", alt:"First slide" },
	{ src: "../static/image/carouselTop2.jpg", alt:"Second slide" },
	{ src: "../static/image/carouselTop3.jpg", alt:"Third slide" },
	{ src: "../static/image/carouselTop4.jpg", alt:"Fourth slide" },
	{ src: "../static/image/carouselTop5.jpg", alt:"Fifth slide" },
]
ReactDOM.render(<ImagesCarousel images={ CarouselImagesList } />, $("#carouselTop")[0]);

// Карусель товаров 1
ReactDOM.render(<ProductsCarousel name={ "carousel1" } title={ "Новинки" } categoryPath={ "/carousel/novently" } href="" />, $("#carousel1")[0]);

// Карусель товаров 2
ReactDOM.render(<ProductsCarousel name={ "carousel2" } title={ "Бестселлеры" } categoryPath={ "/carousel/best-seller" } href="" />, $("#carousel2")[0]);

// Карусель товаров 3
ReactDOM.render(<ProductsCarousel name={ "carousel3" } title={ "Эксклюзивно онлайн" } categoryPath={ "/carousel/exclusively-online" } href="" />, $("#carousel3")[0]);

// Товары выбранной категории (не отображаются при первом рендере)
const products = ReactDOM.render(<Products products={ [] } />, $("#products")[0]);

// Следует убрать обёртывающий div, когда компоненты будут монтироваться в $("root").
// Кнопка скрола в начало страницы
ReactDOM.render(<ButtonScrollUp />, $("#btnScrollUpWrapper")[0]);

// Асинхронное получение товаров
function Query(path) {
	const url = 'http://192.168.0.101:8000'+path;
	const options = {
    	method: 'GET'
    }
    return fetch(url, options)
			.then((response) => {
			    if (response.ok) {
			        return response.json();
			    } else {
			        throw response;
			    }
			})
}

// Обновление карточек товаров при переходе по категориям (первая страница товаров)
function updateProducts(event){
	event.preventDefault();
	let title = event.currentTarget.innerText;
	let categoryPath = event.currentTarget.pathname;
	Query(`${ categoryPath }/1`)
		.then( (result) => {
			if (result.products) {
				if (result.products.length != 0) {
					ReactDOM.unmountComponentAtNode($("#carouselTop")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel1")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel2")[0]);
					ReactDOM.unmountComponentAtNode($("#carousel3")[0]);
					products.setState({
				    	isLoaded: true,
				    	error: null,
				    	products: result.products,
				    	pages: 1,
						productsCountAll: result.productsCountAll,
				    	title: title,
				    	categoryPath: categoryPath
				    });
				}
			}
		})
		.catch(error => {
		  	products.setState({
		        isLoaded: true,
		        error: error.statusText
		  	});
		})
}

// Цена товара с пробелами после каждых 3-х символов
function formatProductPrice(price) {
	return Math.round(price).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}
