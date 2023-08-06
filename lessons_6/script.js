hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbowArr = hero.concat(native, destination);
rainbowArr.reverse();
rainbowArr.splice(0, 2);
rainbowArr.unshift('Richard')
rainbowArr.pop();
rainbowArr.push('Gave','Battle','In','Vain');

colorArr = [`red`, `orange`, `yellow`, `green`, `lightBlue`, `blue`, `violet`];

htmlString = ``;

for(i=0; i<rainbowArr.length; i++) {
    htmlString += `<li class="rainbow-item">
        <div class="rainbow-circle" style="background-color:${colorArr[i]}"></div>
        <p class="rainbow-title">${rainbowArr[i]}</p>
    </li>`;
};

document.write(`<ul class="rainbow"> ${htmlString} </ul>`)


