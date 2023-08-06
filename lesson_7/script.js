sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summer_sports = [
    ...sports.slice(5, 7),
    ...sports.slice(9, 11)
];

console.log('*** Summer sports ***');
for(i=0; i<summer_sports.length; i++){
    console.log(summer_sports[i].join(`: `));
}
console.log(``);

winter_sports = sports.slice(0, 2);
winter_sports = winter_sports.concat(sports.slice(3, 6));

console.log('*** Winter sports ***');
for(i=0; i<winter_sports.length; i++){
    console.log(winter_sports[i].join(`: `));
}
console.log(``);

fruits = sports.slice(2, 3);
fruits = fruits.concat(sports.slice(7, 9));

console.log('*** Fruits ***');
for(i=0; i<fruits.length; i++){
    console.log(fruits[i].join(`: `));
}