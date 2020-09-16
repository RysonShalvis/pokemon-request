const button = document.querySelector('button');
const weight = document.querySelector('#pokemon-weight')

const xhr = new XMLHttpRequest();
const url = 'https://pokeapi.co/api/v2/pokemon/eevee';
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const pokemon = xhr.response;
        function showWeight() {
           weight.innerHTML = `${pokemon.name}: weight: ${pokemon.weight}`
        }

        button.addEventListener('click', showWeight)
    }
}

xhr.open('GET',url);
xhr.send();
