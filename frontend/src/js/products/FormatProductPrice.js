// Цена товара с пробелами после каждых 3-х символов
export default function formatProductPrice(price) {
	return Math.round(price).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}