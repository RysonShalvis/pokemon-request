const button = document.querySelector('button');
const weight = document.querySelector('#pokemon-weight');
const pokemonText = document.querySelector('#pokemon-text');
const loadContainer = document.querySelector('.load-container');
const anyPokemonInfo = document.querySelector('#pokemon-anything');
const pokemonImage = document.querySelector('#pokemon-image');
function pokemonRequest () {
    pokemonImage.src = 'https://img.pokemondb.net/artwork/large/'
    let loading = document.createElement('p');
    loading.innerHTML = 'Loading';
    loadContainer.appendChild(loading);
    const pokemonName = pokemonText.value;
    try {
    if (pokemonText.value) {
const xhr = new XMLHttpRequest();
const url = `https://pokeapi.co/api/v2/pokemon/`;
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    weight.innerHTML = '';
    if (xhr.readyState === XMLHttpRequest.DONE) {
        try {
            loading.innerText = '';
            const pokemon = xhr.response;
            let weightInPounds = pokemon.weight / 4.54;
            weightInPounds = weightInPounds.toFixed(2);
            weight.innerHTML = `${pokemon.name}: weight: ${weightInPounds}lbs`;
            anyPokemonInfo.innerHTML = pokemon.height;
            pokemonImage.src =  pokemonImage.src + pokemonText.value + '.jpg';
        } catch (e) {
            weight.innerHTML = 'Please choose a valid Pokemon';
            console.log(e);
        }
        pokemonText.value = '';
        }
    }
xhr.open('GET',url + pokemonName);
xhr.send();
    } 
    } catch (e) {
        weight.innerHTML = 'Please choose a valid Pokemon';
        console.log(e);
    }
}

console.log(pokemonImage)
button.addEventListener('click',pokemonRequest);