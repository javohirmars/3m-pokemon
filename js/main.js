var pokemonList = document.querySelector("#pokemonlist");

var pokemonGo = pokemons.slice();

function render(array, place) {
    place.innerHTML = null
    
    for (var item of array) {

        // create div element
        var newDiv = document.createElement("div");
        newDiv.classList.add("box")
        newDiv.classList.add("col")
        
        // create img element
        var newImg = document.createElement("img")
        newImg.src = `http://www.serebii.net/pokemongo/pokemon/${item.num}.png`
        newDiv.appendChild(newImg);
        newImg.width = 120;

        // create h3 element
        var newH3 = document.createElement("h4");
        newH3.textContent = item.name;
        newDiv.appendChild(newH3);
        
        // create p elements
        var newP = document.createElement("p");
        newP.textContent = item.type;
        newDiv.appendChild(newP);
        
        var newP2 = document.createElement("p");
        newP2.textContent = item.weight;
        newDiv.appendChild(newP2);
        
        var newP3 = document.createElement("p");
        newP3.textContent = item.height;
        newDiv.appendChild(newP3);   

        place.appendChild(newDiv);
    }
}

render(pokemonGo, pokemonList)
