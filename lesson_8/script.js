animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

cars = ['Kia', 'Mazda', 'Seat', 'Nissan'];
secondCars = ['Ferrari', 'BWM', 'Subaru', 'Audi', 'Mercedes-Benz'];

function countCars(venicleArr) {
    count = 0;

    for(i = 0; i < venicleArr.length; i++) {
        if (checkCar(venicleArr[i])) {
            count += 1;
        }
    }

    return count;
}

function checkCar(carBrand) {
    japonCars = ['Nissan', 'Mazda', 'Subaru'];

    return !japonCars.includes(carBrand);
}

console.log(countCars(cars));
console.log(countCars(secondCars));

// function getInfoRow(name, arrAnimals) {
//     addStr = `<table><caption> ${name} info </caption><tbody>`;

//     for(i=0; i<arrAnimals.length; i++) {
//         addStr += `<tr>`

//         currentElement = arrAnimals[i];

//         for(j=0; j<currentElement.length; j++) {
//             addStr += `<td>${currentElement[j]}</td>`
//         }
//         addStr += `</tr>`
//     }
//     addStr += `</tbody></table>`;

//     return addStr 
// }

// document.write(getInfoRow(`Animals`, animals))
// document.write(getInfoRow(`Food`, food))





