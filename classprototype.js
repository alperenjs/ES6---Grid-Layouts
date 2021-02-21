
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   };

// Dog.prototype.bark = function(){ // prototype is inherited from parent DOG
//     console.log(`bark bark! my name is ${this.name}`)
// };



  //yukardakinin aynısı classlısı

  class Dog {
      constructor(name, breed){
        this.name = name;
        this.breed = breed;
      }
      bark(){
        console.log(`bark bark! my name is ${this.name}`)
      }
      konus(){
          console.log(`Adamsın ${this.breed}`)
      }
    }  
    
    const dog1 = new Dog('köpek', 'Bulldog');
      dog1.konus();

      ////////// heyvan besleme

      class Animal {
        constructor(name) {
          this.name = name;
          this.thirst = 100;
          this.belly = [];
        }
        drink() {
          this.thirst -= 10;
          return this.thirst;
        }
        eat(food) {
          this.belly.push(food);
          return this.belly;
        }
      }





      const hayvan1 = new Animal('Eşek');