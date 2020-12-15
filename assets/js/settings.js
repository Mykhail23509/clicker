let el = document.querySelector('.button1')
let anim = false;
anim = !anim; 
const settingsAnimStyle = document.querySelector('.settingsOffAnims')
function settingsButtonAnimsOff() {
    if(anim) {
        el.classList.remove('button1');
        anim = false; 
        settingsAnimStyle.innerHTML = 'Off';
        settingsAnimStyle.classList.add('settingsOffAnimsOff');
    }  else {
        el.classList.add('button1');
        anim = true;
        settingsAnimStyle.innerHTML = 'On';
        settingsAnimStyle.classList.remove('settingsOffAnimsOff');
        settingsAnimStyle.classList.add('settingsOffAnimsOn');
    } 
}
