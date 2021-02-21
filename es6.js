const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function (name) {
    return `${name} patron`
})

//arrow function
const fullNames2 = names.map((name) => {
    return `${name} patron2`
})

//değişkene fonks atama
const sayMyName = (name) => { alert(`hello ${name}`) }


//returning object
const race = '100m koşu';
const winners = ['Usain bolt', 'Singa Song', 'Imda Bos'];

const win  = winners.map((winner , i)=> ({name: winner, race, place : i +1}))

const ages = [23,62,45,234,2,62,234,62,34];
const old = ages.filter(age => age >= 60)



//arrow func and this
const $box = $(".box");


$box.on('click', function()  { //if we use arrow func here, this will be window 
  $(this).toggleClass("testClass");

  
let first ='opening';
let second ='open';

// if(this.hasClass(first)){  //animasyon olduğu zaman settimeouttta second animasyonu eklerken, animasyon kapanırken süreleri ters çevirmek için variable değerlerini deiştriyror
//     [first, second] = [second, first]
// }

  setTimeout(() => { //we can use this here cuz it inheritance from parent
      console.log(this)
  }, 1000);
    
})





//es6 function arguments default value

function calculateBill (total, tax=0.13, tip=0.15){
    return total + (total * tax) + (total * tip);
}
const totalBill = calculateBill(100, .3, 0.25)
// console.log(totalBill);


