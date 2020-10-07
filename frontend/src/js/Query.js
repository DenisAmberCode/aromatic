// Асинхронное получение товаров
export default function Query(path, params) {
	const url = new URL('http://192.168.0.102:8000');
	url.pathname += path;
	const options = {
    	method: 'GET'
    }
    for (let key in params) {
      url.searchParams.set(key, params[key]);
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