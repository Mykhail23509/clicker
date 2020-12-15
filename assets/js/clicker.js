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
document.querySelector('.test').appendChild(clickerClick);

// Achieve
function AchieveFirst(){
    if(appDataBase.numbeOfClicks >= 10) {
        alert('You master!');
    }
}