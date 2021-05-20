import { setPlayer } from './local-storage-utils.js';

// import functions and grab DOM elements
const form = document.querySelector('#player-form');

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