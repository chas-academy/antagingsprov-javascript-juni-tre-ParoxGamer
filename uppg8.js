

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const personer = [
  { name: "Leon", age: 25 },
  { name: "Leo", age: 31 },
  { name: "Leona", age: 34 },
  { name: "Leonardo", age: 21 },
  { name: "Leonora", age: 36 },
];

function printnamesover30 (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > 30) {
      console.log(array[i].name);
    }
  }
}

printnamesover30 (personer);
  
}

module.exports = { uppg8 };
