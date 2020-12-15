// DATA BASE

const appDataBase = {
    numbeOfClicks: 0
}

// Click system

const clickerClick = document.querySelector('.score-point');
function onButtonClick1() {
    appDataBase.numbeOfClicks += 1;
    clickerClick.innerHTML = appDataBase.numbeOfClicks;
}