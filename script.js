const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const items = document.querySelectorAll(".item");

// Player movement variables
let playerPosition = { x: 10, y: 50 };

// Handle keyboard input for player movement
document.addEventListener("keydown", (event) => {
    const step = 5;
    switch (event.key) {
        case "ArrowUp":
            playerPosition.y = Math.max(0, playerPosition.y - step);
            break;
        case "ArrowDown":
            playerPosition.y = Math.min(400 - 30, playerPosition.y + step);
            break;
        case "ArrowLeft":
            playerPosition.x = Math.max(0, playerPosition.x - step);
            break;
        case "ArrowRight":
            playerPosition.x = Math.min(600 - 30, playerPosition.x + step);
            break;
    }
    player.style.top = `${playerPosition.y}px`;
    player.style.left = `${playerPosition.x}px`;

    checkItemCollision();
});

// Check collision between player and items
function checkItemCollision() {
    items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const playerRect = player.getBoundingClientRect();

        if (
            playerRect.left < itemRect.left + itemRect.width &&
            playerRect.left + playerRect.width > itemRect.left &&
            playerRect.top < itemRect.top + itemRect.height &&
            playerRect.height + playerRect.top > itemRect.top
        ) {
            item.style.display = "none"; // Hide the item
            alert("Item Collected!");
        }
    });
}

// Enemy movement (simple AI)
setInterval(() => {
    const enemySpeed = 2;
    const dx = playerPosition.x - parseInt(enemy.style.left || 0);
    const dy = playerPosition.y - parseInt(enemy.style.top || 0);
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Move enemy towards the player
    if (distance > 0) {
        const moveX = (dx / distance) * enemySpeed;
        const moveY = (dy / distance) * enemySpeed;
        enemy.style.left = `${parseInt(enemy.style.left || 0) + moveX}px`;
        enemy.style.top = `${parseInt(enemy.style.top || 0) + moveY}px`;
    }
}, 50);
