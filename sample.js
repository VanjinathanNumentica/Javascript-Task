const file = require('./users-db.json');
console.table(file);

function FindingHighestIncome(data) {
    let highestIncome = 0;
    let countryWithHighest = '';

    for (let i = 0; i < data.length; i++) {
        const income = data[i].income;
        const country = data[i].country;

        if (income > highestIncome) {
            highestIncome = income;
            countryWithHighest = country;
        }
    }

    console.log("\nCountry with highest person income:");
    console.log(`Country: ${countryWithHighest}\nIncome: ${highestIncome}`);
}

function FindingCombinedHighestIncome(data) {
    const MaxIncome = {};

    for (let i = 0; i < data.length; i++) {
        const country = data[i].country.toLowerCase();
        const income = Number(data[i].income);

        if (!MaxIncome[country]){MaxIncome[country] = 0;}
        MaxIncome[country] += income;
    }

    let highestIncome = 0;
    let richCountry = '';

    for (const country in MaxIncome) {
        if (MaxIncome[country] > highestIncome) {
            highestIncome = MaxIncome[country];
            richCountry = country;
        }
    }

    console.log("\nCountry with Combined Highest Income:");
    console.log(`Country: ${richCountry}`);
    console.log(`Total Income: ${highestIncome}`);
}

function SeparatedEmailUsers(data) {
    const Users = [];

    for (let i = 0; i < data.length; i++) {
        const email = data[i].email;
        const Final = email.substring(email.length-4);
        if (Final === '.gov')
        {
            Users.push(data[i]);
        }
    }

    console.log("\nUsers with Separated email address:");
    console.table(Users);
}

function FindingCombinedHighestFemaleIncome(data) {
    const MaxIncome = {};

    for (let i = 0; i < data.length; i++) {
        //const person = data[i];
        const country = data[i].country;
        const income = Number(data[i].income);
        const gender = data[i].gender;

        if (gender.toLowerCase() === "female") {
        if (!MaxIncome[country]){MaxIncome[country] = 0;}
        MaxIncome[country] += income;
    }
}

    let highestIncome = 0;
    let richCountry = '';

    for (const country in MaxIncome) {
        if (MaxIncome[country] > highestIncome) {
            highestIncome = MaxIncome[country];
            richCountry = country;
        }
    }

    console.log("\nCountry with Combined Highest Female Income:");
    console.log(`Country: ${richCountry}`);
    console.log(`Total Female Income: ${highestIncome}`);
}

function PaginatedResult(file,PageNumber, pageSize) {
    const startIndex = (PageNumber-1)* pageSize
    const EndIndex = startIndex + pageSize
    const Paginated = []

    for (i = startIndex; i < EndIndex && file.length; i++){
        Paginated.push(file[i])
    }
    console.log("\nHere is the Paginated Result of Your Index:");
    console.table(Paginated)
}

FindingHighestIncome(file);
FindingCombinedHighestIncome(file);
SeparatedEmailUsers(file);
FindingCombinedHighestFemaleIncome(file);
PaginatedResult(file,2,20)