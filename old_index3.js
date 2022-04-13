var nomi = ["Gaetano", "Matteo","Giacomo","Mario","Francesco"]
var numeri = [5,7,54,23,78,1,96,34,1,2,3,1,2,3,3,2,1];
var taskStatus = [
  {title:"Comprare il pane", completed:true},
  {title:"Portare il cane a passeggio", completed:false},
  {title:"Fare benzina", completed:false},
  {title:"Impare JS", completed:false},
  {title:"Accompagnare i bambini all'asilo", completed:false},
]

nomi.length // 5
nomi.push('Gianni') // [....., Gianni]

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
var cercanomi = function(nome){
  return nome.includes('e')
}

var nome = "Pippo"


function ripeti(numero){
  console.log("Numero ",numero)
  console.log("Pippo",nome) // Pippo
  if(numero <1024){
    var nuovonum = numero * 2
    ripeti(nuovonum)
  }
}

(function ciao(){
  console.log("%cCiao","font-size:2rem;color:tomato")
})() 
// $ 
// ciao()

function persona(){
  // ....
  var nome = "Pippo"
  function uomo(){
    console.log("Mi chiamo ",nome)
  }
}

// numero NON esiste
console.log(numero) // undefined

// click bottone 
// sommatoria(1,2) = // 3

// load della pagina
// sommatoria(3,5) = // 8
var nomiacaso = nomi.filter(sommatoria)

var nomiConLaE = nomi
  .filter(nome=>nome.includes("e"))
  .map(nome=>"Piacere mi chiamo"+nome)

var giacomo1 = nomi.find(function(nome){
  return nome == "Giacomo"
})
var giacomo2 = nomi.filter(function(nome){
  return nome == "Giacomo"
})

const giacomo3 = nomi.filter(nome=>nome=="Giacomo")

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


class Veicolo {
  constructor(options){
    console.log("Yea! hai creato una classe")
    console.log(options)
    this.options = options
  }

  accendi(){
    console.log("Accendi la macchina")
    // ...
    this.onAccendi()
  }

  spegni(){
    console.log("Spegni la macchina")
  }

  onAccendi(){
    console.log("WROOOOOOM")
  }

  onSpegni(){
    console.log("OWWWWWWWWW")
  }

}

class Macchina extends Veicolo{
  constructor(options){
    super(options)
  }

  gira(direzione){
    return direzione=='left'?'gira a sinistra':'gira a destra'
  }
}

class Velivolo extends Veicolo{
  constructor(options){
    super(options)
  }

  vola(){
    // ....
  }
}

class Elicottero extends Velivolo{
  // ...
  constructor(options){
    super(options)
  }
  spara(){

  }

}


class Umano{
  constructor(){
    console.log("Heelo, World!")
    var saldo = 0
  }
   lavora(){
    // ....
    this.saldo += 1000
    this.spendi(10) // FUNZIONA
  }

   spendi(quanto){
    if(this.saldo > 0 && this.saldo >= quanto){
     this.saldo -=quanto
    }else{
      console.log("Non puoi spendere soldi che non hai")
    }
  }
}

var gaetano = new Umano()
gaetano.lavora() // +1000
gaetano.lavora() // +2000
gaetano.lavora() // +3000

gaetano.spendi(1500) // +1500 // ! ERRORE



function primaLettera(arr){
  arr.map(function(a){
    return a[0]
  })
}

Array.prototype.primaLettera = function(arr){
  arr.map(function(a){
    return a[0]
  })
}

nomi.primaLettera


var veicolo = new Veicolo({brand:'Mercedes', model:'pippo'})
veicolo.accendi() // .....
veicolo.gira() // ERRORE 

var macchina = new Macchina({brand:'Mercedes', model:'pippo'})
macchina.gira()