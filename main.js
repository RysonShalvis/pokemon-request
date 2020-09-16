const button = document.querySelector('button');
const weight = document.querySelector('#pokemon-weight');
const pokemonText = document.querySelector('#pokemon-text');
function pokemonRequest () {
    const pokemonName = pokemonText.value;
    if (pokemonText.value) {
const xhr = new XMLHttpRequest();
const url = `https://pokeapi.co/api/v2/pokemon/`;
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const pokemon = xhr.response;
        let weightInPounds = pokemon.weight / 4.54;
        weightInPounds = weightInPounds.toFixed(2);
           weight.innerHTML = `${pokemon.name}: weight: ${weightInPounds}lbs`
        }
    }
xhr.open('GET',url + pokemonName);
xhr.send();
    } else {
        weight.innerHTML = 'Please choose a valid Pokemon';
    }
}

button.addEventListener('click',pokemonRequest);