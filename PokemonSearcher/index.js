const nombre = document.getElementById('name');
const boton = document.getElementById('boton');
const divP = document.getElementById('pokemons');

boton.addEventListener('click',()=>{
    const pokemon = traerpokemon(nombre.value);
});

function traerpokemon(nombre){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
    .then(response => response.json())
    .then(data =>{
        crear(data);
    });
}
function crear(pokemon){
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const div = document.createElement('div');
    img.classList= "row";
    h1.classList = "row";
    h1.textContent = pokemon.name;
    img.src = pokemon.sprites.front_default;
    div.classList = "container-fluid";
    div.append(img);
    div.append(h1);
    divP.append(div);
    
}