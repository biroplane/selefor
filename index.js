
let cocktailName = document.querySelector('#cocktailName')
let cocktailCat = document.querySelector('#cocktailCat')
let cocktailImg = document.querySelector('#cocktailImg')
let strInstructionsIT = document.querySelector('#strInstructionsIT')
let cocktail


const responsePromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')


responsePromise.then(response => response.json())
.then(data => {
  cocktail= data.drinks[0]
  
  console.log("Data acquired",data)
  cocktailName.innerHTML=cocktail.strDrink
  cocktailCat.innerHTML=cocktail.strCategory
  strInstructionsIT.innerHTML=cocktail.strInstructionsIT
  cocktailImg.src=cocktail.strDrinkThumb
  return cocktail
});
let pokeGrid = document.querySelector('#pokemon')
let pokedeck = document.querySelector('#pokedeck')
let catName = document.querySelector('#catName')
let catCat = document.querySelector('#catCat')
let catImg = document.querySelector('#catImg')
let fact = document.querySelector('#fact')

let catPromise
let pokebase = "https://pokeapi.co/api/v2/pokemon";
(async ()=>{
  pokeGrid.innerHTML = ""
  catPromise= await (await fetch(`${pokebase}`)).json()
  console.log( catPromise.results)
  catPromise.results.forEach(async (pokemon)=>{
    let pokemonData = await (await fetch(`${pokebase}/${pokemon.name}`)).json()
    console.log("Pokemon Data", pokemonData)
    let _deck = pokedeck.cloneNode(true)
    // let _name = catName.cloneNode(true)
    // // let _cat = catCat.cloneNode(true)
    let _img = _deck.querySelector('img')
    let _name = _deck.querySelector('h2')
    _name.innerHTML = pokemon.name
    // let _fact = _deck.querySelector('p')
    _img.src = pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default

    // // let _fact = fact.cloneNode(true)
    
    // _name.innerHTML=pokemon.name
    // _cat.innerHTML=pokemon
    
    pokeGrid.appendChild(_deck)
  })

})()
