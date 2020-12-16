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

function onButtonClick2() {
    appDataBase.numbeOfClicks += 2;
    clickerClick.innerHTML = appDataBase.numbeOfClicks;
}

function onButtonClick0() {
    appDataBase.numbeOfClicks += 0;
    clickerClick.innerHTML = appDataBase.numbeOfClicks;
}

// shop
const buttonUpgrader = document.querySelector('.button-clicker');
function buyClickUpgrade() {
    let ClickUpgrade = document.querySelector('.shopClickUpgrade');
    if(appDataBase.numbeOfClicks >= 10){
        alert('You bought it!');
        appDataBase.numbeOfClicks -= 10;
        onButtonClick0()
        buttonUpgrader.setAttribute( 'onclick', 'onButtonClick2()' );
        ClickUpgrade.innerHTML = 'Max Level 1/1';
        ClickUpgrade.removeAttribute( 'onclick', 'buyClickUpgrade()' );

    } else {
        alert('You dont have enough money');
    }
}