const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let dead = 0;
let lost = 0;

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }

        if (dead === 10) {
            alert('Победа! Вы убили 10 кротов!');
            resetGame();
        }

        if (lost === 5) {
            alert('Игра окончена! Вы промахнулись 5 раз.');
            resetGame();
        }
    };
}

const resetGame = () => {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
};
