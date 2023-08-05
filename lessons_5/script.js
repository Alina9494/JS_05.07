arr = [];

lenghtArr = prompt(`Please enter your arr lenght from 2 to 10`);

minLenght = 2;
maxLenght = 10;

while(lenghtArr === null 
    || lenghtArr === ``
    || Math.abs(lenghtArr) < minLenght
    || Math.abs(lenghtArr) > maxLenght
) {

        lenghtArr = prompt(`Please enter your arr lenght from 2 to 10?`);
}

    lenghtArr = lenghtArr.trim().replaceAll(` `, ``);
    lenghtArr = Math.round(lenghtArr);
    lenghtArr = Math.abs(lenghtArr);
    resultValue = 1;
    minValue = 0;
    maxValue = 0;

    arr = new Array(lenghtArr);

    minNumber = -10;
    maxNumber = 10;
    
    for(i=0; i<arr.length; i++) {
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

    console.log(arr);
    console.log(resultValue);
    console.log(`Min Number is ${minValue}`);
    console.log(`Max Number is ${maxValue}`);

    




