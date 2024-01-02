//Variables
var a; //declaracion de una variable
var b = 'b'  // declaramos y asignamos
var a = 'aa';  //redeclaracion 

//Global Scope
const fruit = 'Apple'; //global
function bestFruit() {
    var banana = 'Platano'
    console.log(fruit);
}

bestFruit()


function countries(){
    var country = 'Colombia';  // Varianble intena jojo 
    
    console.log(country);
}
//countries();

console.log(country);