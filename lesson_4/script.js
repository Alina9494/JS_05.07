hamburger = `hamburger`;
cheeseburger = `cheeseburger`;

small = `small`;
middle = `middle`;
big = `big`;

ketchup = `ketchup`;
mayonnaise = `mayonnaise`;

priceItem = 0;
priceHamburger = 10;
priceCheeseburger = 15;
priceDoubleCheese = 5;
pricePotatoSmall = 10;
pricePotatoMiddle = 15;
pricePotatoBig = 20;
priceMayonnaise = 3;
priceKetchup = 2;


tipeOfItem = prompt (`Please, choose type of item: ${hamburger} or ${cheeseburger}`);

if(tipeOfItem !== null) {
    tipeOfItem = tipeOfItem.replaceAll(` `, ``).toLowerCase()
}

if(tipeOfItem === cheeseburger) {
    priceItem += priceCheeseburger
} else { 
    tipeOfItem = hamburger 
    priceItem += priceHamburger
}

if(tipeOfItem === cheeseburger) {
    confirmDoubleCheese = confirm(`Would you like to add double cheese?`);
    if(confirmDoubleCheese) {
        priceItem += priceDoubleCheese
    }
}

addItemPotato = confirm(`Would you like potato?`);

if(addItemPotato) {
    potatoSize = prompt(`Choose potato size: ${small}/${middle}/${big}`);

    if(potatoSize !== null) {
        potatoSize = potatoSize.replaceAll(` `, ``).toLowerCase();
    }

    if(potatoSize === middle) {
        priceItem += pricePotatoMiddle;
    } else if(potatoSize === big) {
        priceItem += pricePotatoBig
    } else{
        potatoSize = small;
        priceItem += pricePotatoSmall
    }
}

addItemSauce = confirm(`Would you like sauce?`);

if(addItemSauce) {
    typeOfSauce = prompt(`Choose sauce: ${ketchup}/${mayonnaise}`)

if(typeOfSauce !== null) {
    typeOfSauce = typeOfSauce.replaceAll(` `, ``).toLowerCase();
}

if(typeOfSauce === mayonnaise) {
    priceItem += priceMayonnaise;
} else{
    typeOfSauce = ketchup;
    priceItem += priceKetchup;
    }

}

renderPotato = ``;
if(addItemPotato) {
    renderPotato = `<li>Potato: ${potatoSize}`
}

renderSouse = ``;
if(addItemSauce) {
    renderSouse = `<li>Souse: ${typeOfSauce}`
}


document.write(`<h2>Your order:</h2>
    <ul>
 		<li>Bulka 🍔: ${tipeOfItem} </li>
 		${renderPotato}
 		${renderSouse}
 	</ul>

 	<p>Price: ${priceItem} </p>
`);

