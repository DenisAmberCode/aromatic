import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/styleHome.css';
import Header from './js/header/Header';
import carouselTop1 from './image/carouselTop1.jpg';
import carouselTop2 from './image/carouselTop2.jpg';
import carouselTop3 from './image/carouselTop3.jpg';
import carouselTop4 from './image/carouselTop4.jpg';
import carouselTop5 from './image/carouselTop5.jpg';
import ImagesCarousel from './js/imagesCarousel/ImagesCarousel';
import ProductsCarousel from './js/productsCarousel/ProductsCarousel'
import Products from './js/products/Products';
import ButtonScrollUp from './js/ButtonScrollUp'
import Footer from './js/footer/Footer'
import * as serviceWorker from './serviceWorker';
const $ = window.$;

// Слайды для карусели
const CarouselImagesList = [
	{ src: carouselTop1 , alt:"First slide" },
	{ src: carouselTop2, alt:"Second slide" },
	{ src: carouselTop3, alt:"Third slide" },
	{ src: carouselTop4, alt:"Fourth slide" },
	{ src: carouselTop5, alt:"Fifth slide" },
]

// Возобновление пролистывания слайдов карусели на мобильных устройствах
$('.cc-slider-container').on('touchstart', e => {
  $('.cc-slider-container').slick('slickPlay');
});

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="wrapper">
      <article id="carouselTop" className="carousel__wrapper"></article>
      <article id="carousel1" className="carousel__wrapper"></article>
      <article id="carousel2" className="carousel__wrapper"></article>
      <article id="carousel3" className="carousel__wrapper"></article>
      <article id="products" className="products"></article>
      <ButtonScrollUp />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<ImagesCarousel images={ CarouselImagesList } />, $("#carouselTop")[0]);

ReactDOM.render(<ProductsCarousel name={ "carousel1" } title={ "Новинки" } href="category/specialCategories/novently" />, $("#carousel1")[0]);

ReactDOM.render(<ProductsCarousel name={ "carousel2" } title={ "Бестселлеры" } href="category/specialCategories/best-seller" />, $("#carousel2")[0]);

ReactDOM.render(<ProductsCarousel name={ "carousel3" } title={ "Эксклюзивно онлайн" } href="category/specialCategories/exclusively-online" />, $("#carousel3")[0]);

// Товары выбранной категории (не отображаются при первом рендере)
export const products = ReactDOM.render(<Products products={ [] } />, $("#products")[0]);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
