const button = document.querySelector('button');
const weight = document.querySelector('#pokemon-weight')

const xhr = new XMLHttpRequest();
const url = 'https://pokeapi.co/api/v2/pokemon/eevee';
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {

        function showWeight() {
           weight.innerHTML = xhr.response.weight
        }

        button.addEventListener('click', showWeight)
    }
}

xhr.open('GET',url);
xhr.send();
