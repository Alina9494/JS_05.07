const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]

function summerValue(value){
	return value*0.8;
}

function winterValue(value){
	return value*2;
}

function getPrice(products, seasonFunc) {
    let result = 0

    for(let i=0; i<products.length; i++) {
        let productElement = products[i]
        let productPrice = productElement[1]

         let finalPrice = typeof seasonFunc === `function` 
            ? seasonFunc(productPrice)
            : productPrice

        result += finalPrice;
    }
    
    return result;
}

let summerPruduct = getPrice(products, summerValue)
let winterPruduct = getPrice(products, winterValue)
let allProducts = getPrice(products)

console.log(summerPruduct, winterPruduct, allProducts);