const button = document.querySelector('#first-button');
const body = document.querySelector('body');
const weight = document.querySelector('#pokemon-weight');
const pokemonTextOne = document.querySelector('#pokemon-text-one');
const loadContainer = document.querySelector('.load-container');
const pokemonMoves = document.querySelector('#pokemon-moves');
const pokemonImage = document.querySelector('#pokemon-image');
const anyInfo = document.querySelector('#any-info');
const buttonTwo = document.querySelector('#second-button');
const pokemonTextTwo = document.querySelector('#pokemon-text-two');
pokemonOne = document.querySelector('.pokemon-one');
pokemonTwo = document.querySelector('.pokemon-two');
const pokemonNameOne = document.querySelector('#pokemon-name-one');
const pokemonNameTwo = document.querySelector('#pokemon-name-two');
const url = `https://pokeapi.co/api/v2/pokemon/`;
pokemonImage.src = 'https://img.pokemondb.net/artwork/large/'
function pokemonRequest () {
    let loading = document.createElement('p');
    loading.innerHTML = 'Loading';
    loadContainer.appendChild(loading);
    const pokemonName = pokemonText.value;
    try {
    if (pokemonText.value) {
const xhr = new XMLHttpRequest();
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
            pokemonOne.style.backgroundImage =  `url(${pokemonImage.src}${pokemonText.value}.jpg)`;
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

function secondPokemonRequest(e) {
    let inputField;
    let pokemonContainer;
    let movesArray;
    let pokemonName;
    if (e.target === buttonTwo) {
        pokemonContainer = pokemonTwo;
        inputField = pokemonTextTwo.value; 
        pokemonName = pokemonNameTwo;
    } else if (e.target === button) {
        inputField = pokemonTextOne.value;
        pokemonContainer = pokemonOne;
        pokemonName = pokemonNameOne;
    }
    fetch(url + inputField)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed! Choose valid Pokemon');
    }, networkError => console.log(networkError.message)
    ).then(pokemon => {
        let weight = pokemon.weight;
        let height = pokemon.height;
        let name = pokemon.name;
        let fourRandomMoves = [];
        movesArray = pokemon['moves'];
        for (i = 0; i < 5; i++) {
            let randomMove = ~~(Math.random() * (movesArray.length) - 1);
            fourRandomMoves.push(movesArray[randomMove]['move']['name']);
        };
        pokemonName.innerHTML = name;
        pokemonContainer.style.backgroundImage =  `url(${pokemonImage.src}${inputField}.jpg)`;
    })
}



console.log(pokemonImage)
//button.addEventListener('click',pokemonRequest);
buttonTwo.addEventListener('click',secondPokemonRequest);
button.addEventListener('click',secondPokemonRequest);