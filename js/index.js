class Observable {
	
	constructor () {
		this.observers = []
	}

	addObserver (newObserver) {
		this.observers.push(newObserver)
	}

	notifyObservers () {
		this.observers.forEach(observer => {
			observer.newUpdates(this)
		})
	}
}

class ProductsGroup extends Observable {

	constructor () {
		super()
		this.products = []
	}

	addProduct (product) {
		this.products.push(product)
		this.notifyObservers()
	}

}

class Observer {
	newUpdates () {
	}
}

class OriginalProductsGroup extends Observer{
	// @Override
	newUpdates (observable) {
		var newList = observable.products.map(product => `<li>${product}</li>`).join('')
		document.querySelector('#products-list').innerHTML = newList
	}
}

class MartinCopyProducts extends Observer{
	// @Override
	newUpdates (observable) {
		var newList = observable.products.map(product => `<li>${product}</li>`).join('')
		document.querySelector('#martin-copy-products').innerHTML = newList
	}
}

class UncleCopyProducts extends Observer{
	// @Override
	newUpdates (observable) {
		var newList = observable.products.map(product => `<li>${product}</li>`).join('')
		document.querySelector('#uncle-copy-products').innerHTML = newList
	}
}

document.addEventListener('DOMContentLoaded', () => {
	
	var productsGroup = new ProductsGroup()

	productsGroup.addObserver(new OriginalProductsGroup())
	productsGroup.addObserver(new MartinCopyProducts())
	productsGroup.addObserver(new UncleCopyProducts())

	document.querySelector('#add-product-button').addEventListener('click', () => {
		var inputValue = document.querySelector('#add-product-input').value
		productsGroup.addProduct(inputValue)
	})
})