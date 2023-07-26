threeWords = confirm(`Tell me three most important words 💚`);

if(threeWords === true) {
    
    firstWord = prompt('Let\'t typing first word');

    while(firstWord === null || firstWord === '') {
        firstWord = prompt('Let\'t typing first word');
    }  

    chooseFirstWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);

    while( 
        chooseFirstWordsOption !== 'uppercase' 
        && chooseFirstWordsOption !== 'lowercase'
        && chooseFirstWordsOption !== 'capitalize'
    ) {
        chooseFirstWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);
    }

    if(chooseFirstWordsOption === 'uppercase') {
        firstWord = firstWord.toUpperCase()
    }

    if(chooseFirstWordsOption === 'lowercase') {
        firstWord = firstWord.toLowerCase()
    }

    if(chooseFirstWordsOption === 'capitalize') {
        firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
    }
   
    secondWord = prompt('Let\'t typing second word');

    while (secondWord === null || secondWord === ``) {
        secondWord = prompt('Let\'t typing second word');
    }

    chooseSecondWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);

    while( 
        chooseSecondWordsOption !== 'uppercase' 
        && chooseSecondWordsOption !== 'lowercase'
        && chooseSecondWordsOption !== 'capitalize'
    ) {
        chooseSecondWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);
    }

    if(chooseSecondWordsOption === 'uppercase') {
        secondWord = secondWord.toUpperCase()
    }

    if(chooseSecondWordsOption === 'lowercase') {
        secondWord = secondWord.toLowerCase()
    }

    if(chooseSecondWordsOption === 'capitalize') {
        secondWord = secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();
    }

    thirdWord = prompt('Let\'t typing third word');

    while (thirdWord  === null || thirdWord  === ``) {
        thirdWord  = prompt('Let\'t typing third word');
    }

    chooseThirdWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);

    while( 
        chooseThirdWordsOption !== 'uppercase' 
        && chooseThirdWordsOption !== 'lowercase'
        && chooseThirdWordsOption !== 'capitalize'
    ) {
        chooseThirdWordsOption = prompt(`Choose type of transformation: uppercase, lowercase, capitalize`);
    }

    if(chooseThirdWordsOption === 'uppercase') {
        thirdWord = thirdWord.toUpperCase()
    }

    if(chooseThirdWordsOption === 'lowercase') {
        thirdWord = thirdWord.toLowerCase()
    }

    if(chooseThirdWordsOption === 'capitalize') {
        thirdWord = thirdWord[0].toUpperCase() + thirdWord.slice(1).toLowerCase();
    }
}


document.write(`
    <h3>${firstWord} ${secondWord} ${thirdWord}!</h3>
`)
