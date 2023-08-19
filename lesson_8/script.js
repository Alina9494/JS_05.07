animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

function getInfoRow(name, arrAnimals) {
    addStr = `<table><caption> ${name} info </caption><tbody>`;

    for(i=0; i<arrAnimals.length; i++) {
        addStr += `<tr>`

        currentElement = arrAnimals[i];

        for(j=0; j<currentElement.length; j++) {
            addStr += `<td>${currentElement[j]}</td>`
        }
        addStr += `</tr>`
    }
    addStr += `</tbody></table>`;

    return addStr 
}

document.write(getInfoRow(`Animals`, animals))
document.write(getInfoRow(`Food`, food))





