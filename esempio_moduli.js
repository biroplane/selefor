import matematica from "./moduli/matematica.js"

console.log("Somma ",matematica.somma(1,2))
console.log("Differenza ",matematica.differenza(4,2))


let somma = matematica.somma(1,2)
const differenza = matematica.differenza(5,2)

let nome = "Gaetano"
nome = "Mario"

const cognome = "Rossi"
cognome = "Verdi" // ! ERRORE 

const macchina = {
  brand: 'BMW',
  model: "540",
  year:'2022',
  color:'red',
  // +1000000
}


const {brand, model, year} = macchina

const macchina2 = {
  // TUTTI I PARAMETRI DI MACCHINA 
  // PIU POSTI A SEDERE 
  // brand, // => brand:brand
  // model:model,
  // year:year,
  // color:macchina.color,
  ...macchina,
  seats: 6

}

function pippo(arg){
  // ...
}
const pippo2 = (arg)=>{
  // ...
}
const pippo3 = (arg)=>arg+5

console.log("Brand", brand)
console.log("Brand", model)
console.log("Brand", year)



// macchina = {...} // ! ERRORE 
// macchina.brand = "Fiat" // ? NESSUN ERRORE

