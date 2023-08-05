arr = [];
lengthArr = prompt(`Please enter your arr length from 2 to 10`);
minLength = 2;
maxLength = 10;
minNumber = -10;
maxNumber = 10;

while(lengthArr === null 
    || lengthArr === ``
    || Math.abs(lengthArr) < minLength
    || Math.abs(lengthArr) > maxLength
    || Number.isNaN(Math.abs(lengthArr))
) {

    lengthArr = prompt(`Please enter your arr length from 2 to 10`);
}

    lengthArr = lengthArr.trim().replaceAll(` `, ``);
    lengthArr = Math.round(lengthArr);
    lengthArr = Math.abs(lengthArr);
    resultValue = 1;
    minValue = 0;
    maxValue = 0;

    arr = new Array(lengthArr);
    
    for(i=0; i < arr.length; i++) {
        randomNumber = Math.random() * (maxNumber - (minNumber)) + (minNumber);
        arr[i] = Math.round(randomNumber);
        resultValue = resultValue * arr[i];

        if(arr[i] < minValue) {
            minValue = arr[i];
        }

        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    console.log(`Array number: ${arr}`);
    console.log(`Multiples result: ${resultValue}`);
    console.log(`Min Number is ${minValue}`);
    console.log(`Max Number is ${maxValue}`);

    




