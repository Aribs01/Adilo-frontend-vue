export default class ProductService {

	getRecords() {
		return fetch('data/records.json').then(res => res.json()).then(d => d.data);
    }
	
}