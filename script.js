let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameContainer = document.getElementById("game-container");

function moveBox() {
    const maxX = gameContainer.clientWidth - box.clientWidth;
    const maxY = gameContainer.clientHeight - box.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

moveBox(); // Initial move