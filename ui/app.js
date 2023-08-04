document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        window.addEventListener('message', function (event) {
            if (event.data.type === 'updateHUD') {
                const healthElement = document.getElementById('health');
                const armorElement = document.getElementById('armor');
healthElement.style.width = `${event.data.health}%`;
                armorElement.style.width = `${event.data.armor}%`;

                healthElement.innerText = `Health: ${event.data.health}`;
                armorElement.innerText = `Armor: ${event.data.armor}`;
            } else if (event.data.type === 'updateName') {
                const playerNameElement = document.getElementById('player-name');
                playerNameElement.innerText = `Player Name: ${event.data.playerName}`;
            }
        });
    }
};
