// DATA BASE
const appDataBase = {
    numbeOfClicks: 0
}

// Click system

const a = document.createElement('div');
function onButtonClick1() {
    appDataBase.numbeOfClicks += 1;
    a.innerHTML = appDataBase.numbeOfClicks;
}
document.querySelector('.test').appendChild(a);






