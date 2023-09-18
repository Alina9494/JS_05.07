const block = document.querySelector(`.block`)

function getRandomNumber(min=0, max=255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const getRandomColor = () => {
    let first = getRandomNumber();
    let second = getRandomNumber();
    let thirt = getRandomNumber();

    return `rgb(${first} ${second} ${thirt})`
}

setInterval(() => {
    block.style.background = getRandomColor()
}, 500);


const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

const moving = setInterval(() => {
    const blockWidth = block.offsetWidth
    const blockHeight = block.offsetHeight

    const getRandomLeft = getRandomNumber(0, bodyWidth - blockWidth)
    const getRandomTop = getRandomNumber(0, bodyHeight - blockHeight)

    block.style.left = getRandomLeft + 'px';
    block.style.top = getRandomTop + 'px'

}, 1000);
