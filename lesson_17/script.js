const buttonList = document.querySelectorAll(`[data-btn="action"]`);

const firstFunction = event => {
    console.log(`firstFunction for`, event.target.innerHTML)
    event.target.removeEventListener(`click`, firstFunction);
    event.target.addEventListener(`click`, secondFunction);
}

const secondFunction = event => {
    console.log(`secondFunction for`, event.target.innerHTML);
    event.target.removeEventListener(`click`, secondFunction);
    event.target.addEventListener(`click`, lastFunction);
}

const lastFunction = event => {
    console.log(`lastFunction for`, event.target.innerHTML)
    event.target.addEventListener(`click`, lastFunction)
}

buttonList.forEach((el) => {
    el.addEventListener(`click`, firstFunction)
});

console.dir(buttonList)


