userName = prompt(`Enter your name`);

if (userName === null) {
    userName = `Ваше ім'я`;
} else if (userName === ``) {
    userName =`Ваше ім'я`;
} else {
    userName = userName.trim();
}

userLastName = prompt(`Enter your last name`);

if (userLastName === null) {
    userLastName = `Ваше прізвище`;
} else if (userLastName === ``) {
    userLastName = `Ваше прізвище`;
} else {
    userLastName = userLastName.trim();
}

userEmail = prompt(`Enter your Email`);

if (userEmail === null) {
    userEmail = `email not defined`;
} else if (userEmail === ``) {
    userEmail = `email not defined`;
} else if (userEmail.startsWith(`@`) && userEmail.endsWith(`@`)) {
    userEmail = `not valid email ${userEmail} (symbol @ find in first place, symbol @ find in last place)`;
} else if (!userEmail.includes(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else {
    userEmail = userEmail.replaceAll(' ', '').toLowerCase()
};

userAge = prompt (`Your year of birth?`);

if (userAge === null) {
    userAge = `Ваш рік народження 😌`;
} else if (userAge === ``) {
    userAge = `Ваш рік народження 😌`;
} else {
    userAge = userAge.replaceAll(` `, ``);
}

today = new Date();
year = today.getFullYear();
currentUserAge = (year - userAge);

document.write(`
    <h3>Full name: ${userName} ${userLastName}</h3>
    <h3>Email: ${userEmail}<h3>
    <h3>Age: ${currentUserAge}<h3>
`)




