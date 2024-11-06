document.getElementById('spinButton').addEventListener('click', function() {
    const rewards = ['Diamond', 'Gold', 'Silver', 'Rare Item', 'Epic Item', 'Common Item'];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

    // Update the reward display before spin
    document.getElementById('currentReward').innerText = 'Spinning...';

    // Simulasi animasi putaran roda
    const gachaWheel = document.querySelector('.gacha-wheel');
    gachaWheel.style.transition = 'transform 2s ease-in-out';
    gachaWheel.style.transform = 'rotate(720deg)';
    
    // Setelah animasi selesai, tampilkan hasil
    setTimeout(function() {
        document.querySelector('.reward').innerText = randomReward;
        document.getElementById('result').style.display = 'block';
        updateLeaderboard(randomReward); // Update leaderboard
    }, 2000);
});

document.getElementById('claimButton').addEventListener('click', function() {
    alert("You have claimed your reward!");
    document.getElementById('result').style.display = 'none';
});

function updateLeaderboard(reward) {
    const leaderboardList = document.getElementById('leaderboardList');
    
    // Mock leaderboard update (this could be dynamic with server data)
    const newPlayer = document.createElement('li');
    newPlayer.textContent = `Player ${Math.floor(Math.random() * 1000)}: ${reward}`;
    leaderboardList.insertBefore(newPlayer, leaderboardList.firstChild);
}
