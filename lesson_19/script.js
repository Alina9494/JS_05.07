let getMoney = confirm(`Do you want to get money?`);

let promiseMoney = new Promise(
    function(resolve, reject){
        setTimeout(() => {
            return getMoney ? resolve() : reject()
        }, 1000)
    }
)

promiseMoney
    .then(
        function(){
            let enterAmount = prompt(`Enter amount`)
            return Promise.resolve(enterAmount); 
        },
        function(){
            let chooseLanguage = prompt("Choose language for info: Ukrainian, German, English")
            return Promise.reject(chooseLanguage); 
        }
    )
    .then(
        function(amount){ 
            let chooseCurrency = prompt(`Choose currency: USD, EUR, UAH`);
            return Promise.resolve({ amount: amount, currency: chooseCurrency })
        },
        function(lang){ 
            let enterEmail = prompt(`Enter email`)
            return Promise.reject({ lang: lang, email: enterEmail})
        }
    )
    .then(
        function(obj){
            console.log(`Take: ${obj.amount} ${obj.currency } , please`);
            return Promise.resolve();
        },
        function(obj){
            console.log(`Information about the account was sent to the ${obj.email} in ${obj.lang}.`);
            return Promise.resolve();
        }
    )
    .then(
        function(){
            console.log(`Goodbye and have a good day!`);
        },
    )