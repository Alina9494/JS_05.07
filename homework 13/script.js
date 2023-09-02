class Bulka {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`]
    }

    setAdditionalIngredients(ingredients) {
        // this.ingredients = this.ingredients.concat(ingredients)
        this.ingredients.push(...ingredients)
    }
}


const humburger = new Bulka(`Humburger`, `small`);
humburger.setAdditionalIngredients([`avocado`, `mushrooms`]);
console.log(humburger);

const cheeseburger = new Bulka(`Cheeseburger`, `big`);
cheeseburger.setAdditionalIngredients(["onion", "black pepper"]);
console.log(cheeseburger);

