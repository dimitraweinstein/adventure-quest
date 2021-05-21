import { setPlayer } from './local-storage-utils.js';


// import functions and grab DOM elements
const form = document.querySelector('#player-form');
const characterImage1 = document.querySelector('#yoshi-image');
const characterImage2 = document.querySelector('#luigi-image');
const characterImage3 = document.querySelector('#princess-image');
const characterImage4 = document.querySelector('#toadette-image');

characterImage1.src = 'assets/yoshi-img.png';
characterImage2.src = 'assets/luigi-img.png';
characterImage3.src = 'assets/peach-img.png';
characterImage4.src = 'assets/toadette-img.png';

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const player = formData.get('playerName');
    const playerCharacter = formData.get('character');

    const playerObject = {
        name: player,
        character: playerCharacter,
        completed: {},
        hp: 35,
        gold: 0,
    };
    setPlayer(playerObject);

    window.location = './map';
});