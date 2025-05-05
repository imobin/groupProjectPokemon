const gridLayout = document.getElementById("gridLayout")

const pokemonNames =[]

function saveToWishiLst(name){


  const wishlist = localStorage.getItem("wishlist")

  if (wishlist) {
    const parsedWishList = JSON.parse(wishlist)
          if (parsedWishList.includes(name)) {
        alert(`${name} is already in your wishlist`)
        return
          }else{
        parsedWishList.push(name)
        localStorage.setItem("wishlist", JSON.stringify(parsedWishList))
        alert(`${name} is now in your wishlist`)

  }}else{
    const pokemonNames =[name]
    localStorage.setItem("wishlist", JSON.stringify(pokemonNames))
    alert(`${name} is now in your wishlist`)
  }
  };


fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json())
.then((pokemonObject) => {
    
   
    for (let index = 0; index < pokemonObject.results.length; index++) {
        const element = pokemonObject.results[index];


gridLayout.innerHTML +=`
        <div class="card bg-base-100 w-54 shadow-sm">
  <figure>
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png"
      alt="${element.name}" class="w-54"/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${element.name}
    </h2>
    <p>Basic pokemon info here</p>
    <div class="card-actions justify-between" id="likeButton${index+1}">
        <a href="pokemonPage.html?id=${index+1}">
            <button class="badge badge-outline" >read more</button>
        </a>
        <button class="btn btn-circle" onclick="saveToWishiLst('${element.name}')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
    </div>
  </div>
</div>
`
    }
})