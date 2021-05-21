import { renderStatsHeader } from '../stats-header.js';
import { resultsMessage } from '../messages/messages.js';
import { getPlayer } from '../local-storage-utils.js';

const player = getPlayer();

renderStatsHeader(player);

const mainSection = document.querySelector('section');
const resultsP = document.createElement('p');

resultsP.textContent = resultsMessage(player);

const returnButton = document.createElement('button');

returnButton.textContent = 'Play Again!';
returnButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    localStorage.clear();

    window.location = '../index.html';

});

mainSection.append(resultsP, returnButton);