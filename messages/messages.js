export const aliveGoldMessages = {
    poor: 'you managed to remain as broke as when you started.',
    modest: 'you even managed to keep a little pocket change while you were at it!',
    rich: 'you even managed to come out richer than when you started!'
};

export const deadGoldMessages = {
    poor: 'on top of that you died poor. Shame.',
    modest: 'with barely a penny to your name.',
    rich: 'you failed to save Mario, but at least you died rich.',
};

export const hpMessages = {
    dead: 'You failed because you died',
    frail: 'You made it back, bumped and bruised. But at least you saved the day',
    healthy: 'You saved Mario and saved the day! Now you can retire back to Yoshi Island to live a long and happy life',
};

function evaluateHealth(player) {
    if (player.hp > 100) {
        return 'healthy';
    }
    if (player.hp > 50) {
        return 'frail';
    }
    return 'dead';
}

function evaluateWealth(player) {
    if (player.gold > 90) {
        return 'rich';
    }
    if (player.gold > 30) {
        return 'modest';
    }
    return 'poor';
}

export function resultsMessage(player) {
    const health = evaluateHealth(player);
    const wealth = evaluateWealth(player);

    let wealthMessage;

    if (player.hp <= 0) {
        wealthMessage = deadGoldMessages[wealth];
    } else {
        wealthMessage = aliveGoldMessages[wealth];
    }

    return `Congratulations ${player.name} playing as ${player.character}! ${hpMessages[health]} and ${wealthMessage}`;


}