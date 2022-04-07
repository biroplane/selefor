var pippo, pluto, paperino, topolino, nome, cognome


// STRING
var firstName = '12Gaetano'
var lastName = 'Dell\'Acquila'
var saluto = "\"Stay hungry stay foolish\""
var numeroALettere = "145.67"


// NUMBER 
var eta = 38
var salarioAnnuo = 100000
var tasse = 0.2
var numero1 = -10000
var numero2 = 3.14
var numero3 = 1e10
var numero4 = -123.456
var numero5 = 0
var username = firstName + numero2 // Gaetano3.14

salarioAnnuo.toFixed(2) // 100000.00
salarioAnnuo.toFixed(4) // "100000.0000" => numero a stringa
salarioAnnuo.toString() // "100000"

username.length // 13
username.toUpperCase() // 12GAETANO3.14
username.toLowerCase() // 12gaetano3.14
username.charAt(0) // 1
parseInt(numeroALettere) // 145
parseFloat(numeroALettere) // 145.67




// BOOLEAN
var isOdd = true
var isRich = false
var isEngineOn = accendiMacchina(1)
isOdd.valueOf() // true
isOdd // true

var nome = cognome == 'Dell\'Acquila' ? 'Gaetano' : 'Gianni'
var cognome = lastName || 'Rossi'
var username = globalUsername || 'User'

var niente = null
var indef = undefined

pippo = "Ciao"

// x = 10
// x += 5 //15

// DI DEFAULT LE LUCI SONO SPENTE


// SE l'utente è loggato ed è di tipo Admin
// &&

// Se l'utente è di tipo Admin oppure SuperAdmin 
// Se l'utente è di tipo Dealer oppure Agent
// ||

macchina.owners.first
macchina.accendi(10)


console.log("Ho comprato una nuova macchina", macchina.brand) //Ho comprato una nuova macchina Ferrari
var macchina = {
  brand: "Ferrari",
  model: "Purosangue",
  year: 2022,
  maxSpeed: 300,
  isNew: false,
  owners:{
    first: 'Gaetano',
    second: "Michele",
    third: "Gianni"
  },
  km:0,
  accendi:function(serbatoio){



    if(temperatura > 40 || vento < 4){
      // IRRIGAZIONE
    }
    // "9" == 9
    if(ore === 9){

    }

    // verificare il nome del proprietario
    // Se gaetano ....
    // Se marco ....
    // Se alessandro ....
    // Se matteo...
 
    switch (ownerType) {
      case 'SuperAdmin':
        // ESEGUI 
        // FACCIO TUTTO
        break;
        case 'Admin':
        // Ciao Gaetano
        // FACCIO TUTTO MA NON CANCELLO GLI UTENTI
        break;
        case 'Agent':
        // LEGGERE E CREARE I POST
        break;
        case 'Dealer':
        // esegui
        // LEGGO I POST
        break;
        
        default:
        // Ciao Utente
        break;
    }

    switch(true){
      case serbatoio>10:
         // ....
      break;
      case serbatoio>5:
         // .... VAI A FARE RIF
      break;
      case serbatoio>3:
         // .... VAI A FARE RIF, CORRI!
      break;
      default: 
        // STOP
    }

    // if(serbatoio > 10){
    //   // SI, PARTI
    //   console.log("VROOOOOOOOM")
    // } else if(serbatoio < 5){
    //   console.log("VAI A FARE RIFORNIMENTO")
    // } else if(serbatoio < 4){
    //   console.log("VAI A FARE RIFORNIMENTO, CORRI")
    // }else{
    //   console.log("STOP")
    //   return false
    // }

    if(serbatoio < 0){
      // PARTI
      return true
    } else {
      // VAI A FARE RIFORNIMENTO
      return false
    }
    return serbatoio > 0
  },
  spegni:function(){
    console.log("OOOOOOOOOOOFF")
  },
  fullBrand:function(){
    // prendi brand, model e year e stampali a monitor insieme
    var fullBrand = brand + model + " - " + year
    return "Ferrari Purosangue - 2022"
  },
  sellCar:function(runningKm){
    // SE LA MACCHINA SUPERA I 50K Km vendila
    var messaggio = runningKm > 50000 ? 'Puoi vendere la macchina' : 'Tieni la macchina'

    return runningKm > 50000
    // var messaggio
    // if(runningKm > 50000){
    //   messaggio = "Puoi vendere la macchina"
    // }else{
    //   messaggio = "Tieni la macchina"
    // }
    // return messaggio
  }
}

var parcoMacchine = ["Fiat", "Ferrari", "Lamborghini", "Bugatti", "Porsche"]
var annoDelleMacchine = [2020, 2021, 2022, 2023, 2024]
var statoVenditaMacchine = [true, false, true, false, true]
var park = [
  { brand: "Ferrari",model: "Purosangue",year: 2022,},
  { brand: "Lamborghini",model: "Gagliardo",year: 2022,},
  { brand: "Bugatt",model: "XT7",year: 2022,},
  { brand: "Porsche",model: "Cayenne"},
  { brand: "Bmw",model: "X5",fuel:'Diesel'},
]

park.push({brand: "Fiat",model: "Punto",year: 2022})

parcoMacchine.push("Fiat")
annoDelleMacchine.push(2025)
statoVenditaMacchine.push(true)

parcoMacchine.unshift("Pagani") // aggiunge un elemento all'inizio dell'array

parcoMacchine.shift() // rimuove l'elemento all'inizio dell'array

//parcoMacchine.splice(n,m) // n = indice, m = numero di elementi da rimuovere
parcoMacchine.splice(2,1) // rimuove 1 elemento dall'indice 2


parcoMacchine.sort() // ordina l'array

parcoMacchine.concat(annoDelleMacchine) // concatena due array

parcoMacchine.includes("F") // true

parcoMacchine.length // 1

parcoMacchine[2] // Lamborghini
annoDelleMacchine[5] // 2024
statoVenditaMacchine[2] // false
parcoMacchine[0] = "Pagani"

parcoMacchine[0] // Pagani

parcoMacchine[0] // Pagani
parcoMacchine[1] // Audi  
parcoMacchine[2]  // Lamborghini

for(var i=0; i<parcoMacchine.length;i++){
  console.log("Stai visualizzando la macchina ",parcoMacchine[i])
}

var i = 0
while(i<parcoMacchine.length){
  console.log("Stai visualizzando la macchina ",parcoMacchine[i])
  i++
}

console.log("Messaggio",messaggio)
var spegniMacchina = function (serbatoio){
  console.log("Spengo",serbatoio)
}

// accendi la macchina poi guida verso la panetteria

function accendiMacchina(serbatoio) {
  /**
  * inserisci le chiavi
  * schiaccia frizione
  * accendi quadro
  */
  // controlla se c'è un errore => return false
  insertKeys()
  pressClutch()
  turnOn()
  console.log("VROOOOOOOOM")
  // se il serbatoio è pieno
  return serbatoio > 0

  // return "la macchina è accesa"
  // return 10
  //return true 
  // NON VIENE ESEGUITO

}