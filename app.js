//DOM Objects

const mainScreen = document.querySelector(".main-screen");

const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');

console.log(pokeName);

fetch('https://pokeapi.co/api/v2/pokemon/3')
.then(res => res.json())
.then(data => {
    console.log(data);
    mainScreen.classList.remove('hide');
    pokeName.textContent = data['name'];
    pokeId.textContent = data['id'];
    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];

    const dataTypes = data['types'];

    console.log(dataTypes[0]);
    const dataFirstType = dataTypes[0];
    // const dataSecondType = dataTypes[2];
    console.log(dataFirstType);
    console.log({pokeTypeOne})
    pokeTypeOne.textContent = dataTypes[0]['type']['name'];
        // if (dataSecondType) {
        //     pokeTypeTwo.textContent = dataSecondType['type']['name'];
        // } else {
        //     pokeTypeTwo.textContent = '';
        // }
 });
