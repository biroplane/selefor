var nomi = ["Gaetano", "Matteo","Giacomo","Mario","Francesco"]
var numeri = [5,7,54,23,78,1,96,34];
var taskStatus = [
  {title:"Comprare il pane", completed:true},
  {title:"Portare il cane a passeggio", completed:false},
  {title:"Fare benzina", completed:false},
  {title:"Impare JS", completed:false},
  {title:"Accompagnare i bambini all'asilo", completed:false},
]

var nomiSenzaGaetano = nomi.slice(0,1)
console.log("Nomi",nomi)
console.log("Nomi senza gaetano ",nomiSenzaGaetano) // ["Matteo","Giacomo","Mario","Francesco"]
nomi.splice(0,3)
console.log("Togli 3 nomi",nomi)
// CERCARE TUTTI I NOMI CHE CONTENGONO LA LETTERA "E"
// var nomiConLaE =[]
// for(var i = 0; i<nomi.length; i++){
//   var nome = nomi[i]
//   // NOME CORRENTE 
//   if(nome.includes("e")){
//     // IL NOME CONTIENE LA LETTERA "E"
//     // AGGIUNGERE ALL'ARRAY DEI RISULTATI
//     nomiConLaE.push(nome)
//   }
// }

// console.log(nomiConLaE)
// var oggetto = {
//   nome:"Mario",
//   cognome:"Rossi",
//   eta:"40",
//   anno:1982,
//   stato:"celibe",
//   sesso:"maschio"
// }

// var attr = oggetto.filter(function(att){
//   console.log("Attributo",att)
// })

var nomiConLaE = nomi.filter(function(nome){
  // return nome.includes("e")
  return nome.indexOf('e')>-1
}).map(function(nome){
  return "Piacere mi chiamo "+nome
})

var giacomo1 = nomi.find(function(nome){
  return nome == "Giacomo"
})
var giacomo2 = nomi.filter(function(nome){
  return nome == "Giacomo"
})

var somma = numeri.reduce(function(prev,curr){
  return Math.min(prev,curr)
},0)

var indice = numeri.findIndex(function(numero){
  return numero == 96
})

var possoTornareACasa=taskStatus.some(function(task){
  return task.completed
})





console.log(nomiConLaE)
console.log(giacomo1)
console.log(giacomo2)
console.log(somma)
console.log(indice)
console.log("Posso tornare a casa? ", possoTornareACasa?'Si, certo':'No, LAVORA!', possoTornareACasa)

// console.log(rinomina)


function sommatoria(a,b){
  console.log("Arguments ", arguments)
  return Array.prototype.reduce.call(arguments, function(prev,curr){
    return prev+curr
  },0)
}
var sum = sommatoria(5,4,6,7,3,4,5,6,7,2,3,45,6,6,9,3,3,9) // 9
console.log("Somma ",sum)