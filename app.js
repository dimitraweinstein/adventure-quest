// import functions and grab DOM elements
const form = document.querySelector('#player-form');

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const player = formData.get('playerName');
    const character = formData.get('character');

    


})