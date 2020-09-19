const button = document.querySelector('#first-button');
const body = document.querySelector('body');
const weight = document.querySelector('#pokemon-weight');
const pokemonText = document.querySelector('#pokemon-text');
const loadContainer = document.querySelector('.load-container');
const pokemonMoves = document.querySelector('#pokemon-moves');
const pokemonImage = document.querySelector('#pokemon-image');
const anyInfo = document.querySelector('#any-info');
pokemonImage.src = 'https://img.pokemondb.net/artwork/large/'
function pokemonRequest () {
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
            let movesArray = pokemon['moves'];
            let fourRandomMoves = [];
            let randomMove = ~~(Math.random() * (movesArray.length) - 1);
            let randomMove1 = ~~(Math.random() * (movesArray.length) - 1);
            let randomMove2 = ~~(Math.random() * (movesArray.length) - 1);
            let randomMove3 = ~~(Math.random() * (movesArray.length) - 1);
            let randomMove4 = ~~(Math.random() * (movesArray.length) - 1);
            fourRandomMoves.push(movesArray[randomMove1]['move']['name']);
            fourRandomMoves.push(movesArray[randomMove2]['move']['name']);
            fourRandomMoves.push(movesArray[randomMove3]['move']['name']);
            fourRandomMoves.push(movesArray[randomMove4]['move']['name']);
            console.log('four moves', fourRandomMoves);
            const showAllMoves = movesArray.map(move => '<br>' + move['move']['name']);
            pokemonMoves.innerHTML = `Moves: ${fourRandomMoves.join(', ')}`;
            anyInfo.innerHTML = `type: ${pokemon.types[0].type.name}`;
            console.log('types',pokemon.types[0].type.name)
            body.style.backgroundImage =  `url(${pokemonImage.src}${pokemonText.value}.jpg)`;
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