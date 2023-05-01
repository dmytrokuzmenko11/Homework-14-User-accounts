

// 0.
// source array

let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
];



// 1.
// get 'balance' in a new array
// string clearing and converting to a number

let balanceArray = [];

for (let key in users) {
    balanceArray[key] = users[key]['balance'].slice(1).replaceAll(',', '');
    balanceArray[key] = Number(balanceArray[key]);
    // console.log(typeof balanceArray[key]);
};
// console.log(balanceArray);



// 2.
// determining the balance is more than $2000
// comparison of the index of the matched element with the index of the array in the source array

let phonesArray = [];
let namesArray = [];
let moreArray = [];

for (let i = 0; i < balanceArray.length; i++) {
    if (balanceArray[i] >= 2000) {
        phonesArray.push(users[i]['phone'].replaceAll('"', ''));
        namesArray.push(users[i]['name'].replaceAll('"', ''));
        moreArray.push(users[i]['balance'].replaceAll('"', ''));
    };
};
// console.log(phonesArray);
// console.log(namesArray);



// 3
// determining the sum of all balances

let sum = 0;

balanceArray.forEach(item => {
  sum += item;
});

sum = sum.toFixed(2);
// console.log(sum);



// 4
// display phone number, name, corresponding balance and total balance

for (let k = 0; k < phonesArray.length; k++) {
    document.write(phonesArray[k] + '<br>' + namesArray[k] + '<br>' + moreArray[k] + '<br>' + '<br>');
};

document.write(`Total = $${sum}`);












