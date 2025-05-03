
const cards = document.getElementById("cards")
// let inpValue = [20, 31, 2, 3, 4, 5, 6, 5, 7, 5, 6, 5]
// let inpValue = ["ivysaur", "venusaur", "blastoise"]

// let myObject1 = JSON.stringify(inpValue)
// localStorage.setItem("whishList", myObject1)





let whishList = localStorage.getItem("whishlist")
if (whishList) {
  whishList = JSON.parse(whishList)
// whishList = whishList.slice(1, whishList.length - 1).split(",")
// Unique
whishList= new Set(whishList);

// Convert back the set to array
whishList = [...whishList]

// function salam(){
//     element.innerHTML = ""
// }

for (let index = 0; index < whishList.length; index++) {
    const element = whishList[index];
    // console.log(element)
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}`).then(response => response.json()).then(data => {
      const pokemonID = data.id  
      // console.log(pokemonID)
      cards.innerHTML += ` <div class="card bg-base-100 w-96 shadow-sm id=${element}">
            <figure>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID}.png"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center text-3xl font-bold">${data.name}</h2>
              <div class="card-actions justify-center">
                <a href="pokemon.html?id=${element}">
                <button class="btn btn-primary">More Info</button>
                </a>
              </div>
            </div>
          </div>`
    }) 
}
} else{
  cards.innerHTML += ` <div class="card bg-base-100 w-96 shadow-sm">
            <figure>

            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center text-3xl font-bold">You have nothing in your wish-list yet!!!</h2>
              <div class="card-actions justify-center">
              </div>
            </div>
          </div>`
}



