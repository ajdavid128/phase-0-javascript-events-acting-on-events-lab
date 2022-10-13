// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#cc5a71';

const game = document.getElementById('game');
game.style.backgroundColor = '#7c7ca2';

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowLeft') {
//         const leftNumber = dodger.style.left.replace('px','');
//         const left = parseInt(leftNumber, 10);

//         dodger.style.left = `${left - 5}px`;
//     }
// });

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace('px','');
        const left = parseInt(leftNumber, 10);

        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
}

document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            dodgerMoveLeft();
        }
    });

function moveDodgerRight() {
    const rigthNumber = dodger.style.left.replace('px', '');
    const right = parseInt(rigthNumber, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
if (e.key === 'ArrowRight') {
    dodgerMoveRight();
}
});