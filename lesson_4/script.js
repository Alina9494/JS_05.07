tipeOfItem = prompt (`Please, choose type of item: hamburger or cheeseburger`);
priceItem = 0;

hamburger = `hamburger`;
cheeseburger = `cheeseburger`;

if(tipeOfItem === hamburger) {
    priceItem += 10;

} else if(tipeOfItem === cheeseburger) {
    priceItem += 15;

    confirmDoubleCheese = confirm(`Would you like to add double cheese?`);

    if(confirmDoubleCheese === true) {
        priceItem += 5;
    }

} else {
        tipeOfItem = hamburger;
        priceItem += 10;
}

addItemPotato = confirm(`Would you like potato?`);

small = `small`;
middle = `middle`;
big = `big`;

if (addItemPotato === true) {
    addItemPotato = prompt(`Choose potato size: small/middle/big`);
}

if (addItemPotato === middle) {
    addItemPotato = middle;
    priceItem += 15;

} else if(addItemPotato === big) {
        addItemPotato = big;
        priceItem += 20;

} else {
        addItemPotato = small;
        priceItem += 10;
}

addItemSauce = confirm(`Would you like sauce?`);

ketchup = `ketchup`;
mayonnaise = `mayonnaise`;

if(addItemSauce) {
    addItemSauce = prompt(`Choose sauce: ketchup/mayonnaise`);

    if(addItemSauce === mayonnaise) {
        addItemSauce = mayonnaise;
        priceItem += 3;

    } else {
            addItemSauce = ketchup;
            priceItem += 2;
        }

} else {
    addItemSauce = ketchup;
    priceItem += 2;
}

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${tipeOfItem} </li>
		<li>Potato 🍟: ${addItemPotato} </li>
		<li>Sauce 🧂: ${addItemSauce} </li>
	</ul>

	<p>Price: ${priceItem} </p>
`);

