import { getPlayer } from './local-storage-utils.js';

export function renderStatsHeader() {
    const player = getPlayer();

    const header = document.querySelector('header');
    const div = document.querySelector('div');
    const playerP = document.createElement('p');
    const hpP = document.createElement('p');
    const goldP = document.createElement('p');

    playerP.textContent = `Player: ${player.name}`;
    hpP.textContent = `HP: ${player.hp}`;
    goldP.textContent = `Gold: ${player.gold}`;

    div.append(playerP, hpP, goldP);
    header.append(div);

}