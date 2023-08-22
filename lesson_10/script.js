const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

const renderItems = (arr) => {
    arr.forEach((innerArr, i) => {

        setTimeout(() => {
            document.write(`<p>${innerArr.join(` `)}</p>`)
        }, i*1000) 
    });
}

renderItems(animalsList)

