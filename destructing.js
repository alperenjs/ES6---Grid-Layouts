//destructuring object
const person = {
    first: 'wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@alperen',
    social:{
        twitter: 'http:twitter',
        facebook : 'htt:facebook'
    }
}

const {first,last,city} = person; //destructing from obj to var
const{twitter:tweet, facebook:fb} = person.social //tweetter propertysini al ama tweet olarak çağır



//destructuring arrays

const details = ['alperen', 123, 'alperensozen.com'];

const [name, id, website] = details;

const data = 'Basketball,sports,90201,230';
const [itemName, category, sku, inventory] = data.split(',')

    //rest operator ...

    const team = ['wes', 'harry', 'sarah', 'keenue'];
    const[captain, assistant, ...players] = team


//swapping variables with destructuring

let a = 1;
let b = 2;

[a,b] = [b,a]


//destruction function example

function convertCurrency(amount){
    const converted = {
        USD: amount * 0.76,
        GBP: amount * 0.53,
        AUD: amount * 1.01
    }
    return converted;
}

const {USD,GBP,AUD} = convertCurrency(100);

//ANOTHER EXAMPLE

function tipCalc({total, tip = 0.15, tax = 0.13}){ //fonks içini bracket yazarak var olşturduk
    return total + (tip * total) + (tax * total)
}

const bill = tipCalc({total:200})





//for loop

const cuts = ['chuck' , 'bricket', 'muz', 'elma'];

// for (let i = 0; i < cuts.length; i++){
//     console.log(cuts[i])
// }

// cuts.forEach((cut)=>{
//     console.log(cut) 
// });

for(const cut of cuts){
    console.log(cut)
}

